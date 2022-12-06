// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 100;

// function displayTime(){
//   var label = "seconds";
//   if(secondsLeft === 1){
//     label = "second"
//   }
//   timeEl.textContent = secondsLeft + "  " + label + " left.";
// }

// function setTime() {
//   displayTime();
//   timeEl.textContent = secondsLeft + " seconds left.";
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = "Times Up! ";
// }

// setTime();
