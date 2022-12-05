var nextEl = document.querySelector('#next');
var questions = document.querySelectorAll(".question");
var cursor = 0;

// var questions = [
//     "How much wood could a woodchuck chuck?",
//     "did you have your break today?",
//     "Do you like ice cream",
//     "What's your favorite pizza topping?"
// ];
var correctAnswers = ["1", "1", "0", "1"] //numbers are index positions in html file

var displayQuestion = function() {
   for (var question of questions){
    console.log(question);
    if (question.dataset.index != cursor){
        question.style.display = "none";
    }else {
        question.style.display = "block";
    }
    // return question; 
   }
    //nextEl.textContent = questions[cursor];
};

var advance = function(event) {
    var element = event.target;
    if (element.matches('.question button ')){
    if(cursor < questions.length - 1){
       var answer = element.dataset.choice === correctAnswers[cursor];
        console.log(answer);
       cursor++;
    }
    displayQuestion();
}
};

//nextEl.addEventListener('click', advance);
document.addEventListener('click', advance);
displayQuestion();