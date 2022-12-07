var questionEl = document.querySelector(".question");
var quizContainer = document.querySelector("#quizContainer")
var buttonContainer = document.querySelector('#buttonContainer')
var startButton = document.querySelector('#startButton');
var quizScreen = document.querySelector('#quizScreen');
var startScreen = document.querySelector('#startScreen');
var endScreen = document.querySelector('#endScreen');
var highScoreScreen = document.querySelector('#highScoreScreen');
var scoreLabel = document.querySelector('#scoreLabel');
var initialsInput = document.querySelector('#initialsInput');
var submitScore = document.querySelector('#submitScore');
var playAgain = document.querySelector('#playAgain');
//var timeEl = document.querySelector('#time')

var index = 0;
var secondsLeft = 100;
var timerInterval;
var cursor = 0;

var questions = [
    { message : "How much wood could a woodchuck chuck?",
    correctAnswer: "b",
    possible: [
        "a. 10",
        "b. 20",
        "c. 30",
        "d. 40",
    ],
},
    {
        message: "did you have your break today?",
        correctAnswer: "a",
        possible: [
            "a. Yes",
            "b. No",
        ],
},
    {
        message: "Do you like ice cream",
        correctAnswer: "a",
        possible: [
            "a. Yes",
            "b. No",
        ],
},
    {
        message: "What's your favorite pizza topping?",
        correctAnswer: "a",
        possible: [
            "a. Pepperoni",
            "b. Sausage",
        ],
}
 ];

// var startTimer = function() {
//     console.log('timer started')
//     timerInterval = setInterval(function ()){
//         secondsLeft --;

//     }

// }

var moveForward = function(){
    var correct = true;
    index++;

    if(index >= questions.length){
        endScreen.style.display = "block";//displayEndScreen();
        return;
    }

    if(correct) {
        console.log("right answer");
    }else {
        console.log("incorrect");
        console.log("subtract time");
    }
    displayQuestion();
}

var hideAllScreens = function(){
    var sections = document.querySelectorAll("section");
    console.log(sections);
    for(var i= 0; i < sections.length; i++){
        sections[i].style.display="none"
    }
}

startButton.addEventListener('click', function() {
    //startTimer();
    displayQuestion();
    var sections = document.querySelectorAll("section");
    for (var i =0; i< sections.length; i++){
        sections[i].style.display = 'none';
    }
    quizScreen.style.display = "block";
});

buttonContainer.addEventListener('click', function(event){
    var element = event.target;

    if(element.matches('button')){
        moveForward();
    }
})


var correctAnswers = ["b", "a", "a", "a"] //numbers are index positions of 
//correct answers in html file

var displayEndScreen = function() {
    console.log('display end screen');
    var highScore = {
        score: secondsLeft,
        initials: initialsInput.value.trim(),
    }
    var highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
    highScoresList.push(highScore);
    localStorage.setItem("highScores", JSON.stringify(highScoresList));

    highScoresList.sort(function (a,b)  {
        a.score < b.score 
    });

    for(var i=0; i < highScoresList.length; i++){
        var listItem = document.createElement('li');
        listItem.textContent = highScoresList[i].initilas + ":" + highScoresList[i].score;
        highScoreScreen.querySelector('ul').appendChild(listItem);
    }
    hideAllScreens();
    endScreen.style.display = "block";
    // scoreLabel.textContent = secondsLeft;
    // clearInterval(timerInterval);
}

var displayQuestion = function () {
    var currentQuestion = questions[index];

    quizScreen.querySelector('h2').textContent = currentQuestion.message;
    quizScreen.querySelector('#buttonContainer').innerHTML = null;

      for (var i = 0; i < currentQuestion.possible.length; i++){
         var buttonEl = document.createElement('button');
        buttonEl.textContent = currentQuestion.possible[i];
        buttonEl.dataset.id = i; //buttonLabel[0];
        quizScreen.querySelector('#buttonContainer').appendChild(buttonEl);
    }
};

var advance = function (event) {
    var element = event.target;
    if (element.matches('.question button ')) {
        var answer = element.dataset.choice === correctAnswers[cursor];
        console.log(element.dataset.choice);
        console.log(correctAnswers[cursor]);
        console.log(answer);
        if (cursor < questions.length - 1) {
            cursor++;
            questionEl.dataset.index = cursor;
        }  //else if cursor = questions.length - display high score page?
        displayQuestion();
    }
};

var start = function (event) {
    var element = event.target;
    if (element.matches('.start button')){
        console.log("begin");
        displayQuestion();
    }
}

submitScore.addEventListener('click', function(){
    console.log('send to local storage');
    hideAllScreens();
    highScoreScreen.style.display = "block";
});

playAgain.addEventListener('click', function(){
    console.log('display start screen');
    hideAllScreens();
    startScreen.style.display = "block";
    window.location.reload();
});

hideAllScreens();
startScreen.style.display = "block";
//displayQuestion();
//timeEl.textContent = secondsLeft;