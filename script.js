var questionEl = document.querySelector(".question");
var cursor = 0;
var startButtonEl = document.getElementById('start');

var questions = [
    { text : "How much wood could a woodchuck chuck?",
    correctAnswer: "b",
    possible: [
        "a. 10",
        "b. 20",
        "c. 30",
        "d. 40",
    ],
},
    {
        text: "did you have your break today?",
        correctAnswer: "a",
        possible: [
            "a. Yes",
            "b. No",
        ],
},
    {
        text: "Do you like ice cream",
        correctAnswer: "a",
        possible: [
            "a. Yes",
            "b. No",
        ],
},
    {
        text: "What's your favorite pizza topping?",
        correctAnswer: "a",
        possible: [
            "a. Pepperoni",
            "b. Sausage",
        ],
}
 ];
var correctAnswers = ["b", "a", "a", "a"] //numbers are index positions of 
//correct answers in html file



var displayQuestion = function () {
    questionEl.querySelector('h2').textContent = questions[cursor].text;
    questionEl.querySelector('#possible').innerHTML = null;
    for (var buttonLabel of questions[cursor].possible){
        var buttonEl = document.createElement('button');
        buttonEl.textContent = buttonLabel;
        buttonEl.dataset.choice = buttonLabel[0];
        questionEl.querySelector('#possible').appendChild(buttonEl);
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

//document.addEventListener('click', start)
document.addEventListener('click', advance);
// function saveScore() {
//     var playerScore = {
//         score: answer.value,
//         timeLeft: time.value
//     };
// }

//set up different start screen in a different container
displayQuestion();