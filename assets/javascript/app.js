$(document).ready(function(){
var intervalId;
var time = 120;
var correctAnswers = 0;
var incorrectAnswers=0;
var unanswered=0;
$("#start").on("click",run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    setupOptions();
  }

function decrement() {
    //  Decrease number by one.
    time--;

$("#display").html("<h2>" + timeConverter(time) + "</h2>");

if (time === 0) {
    //  ...run the stop function.
    stop();
    
    //  Alert the user that time is up.
    alert("Time Up!");
          checkAns(); 
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  // time = 240;
  clearInterval(intervalId);
  $("#form").hide();
  $("#start").hide();
  $("#display").hide();
}


function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
        if (seconds < 10) {
       seconds = "0" + seconds;
      }
        if (minutes === 0) {
         minutes = "00";
          }
        else if (minutes < 10) {
        minutes = "0" + minutes;
     }
    return minutes + ":" + seconds;
}
    
var allQuestions = [{
  question: "Before Mt. Everest was discovered, whaich mountain was considered to be the highest mountain in the world?",
  choices: ["Mt. Kilimanjaro", "Kanchenjunga", "Mount Everest"],
  correctAnswer: 1
},

{
  question: "Does England have a 4th of July?",
  choices: ["Yes", "No", "I don't know"],
  correctAnswer: 0
},

{
  question: "What is Rupert the bear's middle name?",
  choices: ["Bear", "He doesn't have one!", "The", "Rupert"],
  correctAnswer: 2
},

{
  question: " What can you never eat for breakfast? ",
  choices: ["Dinner", "Something sugary", "Lunch", "Supper"],
  correctAnswer: 0
},

{
  question: "If there are three apples and you took two away, how many do you have?",
  choices: ["One", "Two", "None"],
  correctAnswer: 1
}];



function setupOptions() {
$("#form").empty();
for (let j  = 0; j  < allQuestions.length; j++){
    
    $("#form").append( j+1 + ". " + allQuestions[j].question);
    var options = allQuestions[j].choices;
    var formHtml = '';
    for (var k = 0; k < options.length; k++) {
      formHtml += '<div><input type="radio" name="option' + j + '"value="' + k + '" id="option' + k + '"><label for="option' + k + '">' +
      allQuestions[j].choices[k] + '</label></div><br/>';
     
  }
  $('#form').append(formHtml);
}
  var btn=$("<button id='submit'>Submit </button>");
  $('#form').append(btn);
  $("#form").show();
  $("display").show();
  
};
function checkAns() {
  for (let n = 0; n < allQuestions.length; n++) {
    var userChoice = $("input[name=option" + n + "]:checked").val();
    console.log(userChoice);
   if (userChoice == allQuestions[n].correctAnswer) {
    correctAnswers++;
   }
   else if(userChoice != undefined){
     incorrectAnswers++;
   }
   console.log(correctAnswers);
    
  }
   unanswered = allQuestions.length - correctAnswers - incorrectAnswers;
    $("#result").html("<p>Result: </p><p>Correct: " + correctAnswers + "</p><p>Incorrect: " + incorrectAnswers + "</p><p>Unanswered: " + unanswered + "</p><button id='reset' class='btn btn-primary btn-lg'>Reset</button>");
$("#result").show();
  };

  $(document).on("click", "#submit", function(){
    event.preventDefault();
    stop();
    checkAns();
  });

  $(document).on("click", "#reset", function(){
    time=10;
    correctAnswers = 0;
    incorrectAnswers=0;
    $("#result").hide();
    $("#start").show();
  });

});
  
  
  

  

