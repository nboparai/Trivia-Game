var intervalId;
var time = 240;
$("#start").on("click",run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
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
    for (let n = 0; n < allQuestions.length; n++) {
      checkAns(n);
      $("#result").text("Total score:"+correctAnswers);
      
    }
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
}

//  Execute the run function.
// run();

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

var correctAnswers = 0;

function setupOptions(j) {
  
    
    $("#form").append( j+1 + ". " + allQuestions[j].question);
  
  // $("#question").append( j+1 + ". " + allQuestions[j].question);
  // console.log(questionQuiz);
  
  var options = allQuestions[j].choices;
  var formHtml = '';
  for (var k = 0; k < options.length; k++) {
    formHtml += '<div><input type="radio" name="option" value="' + k + '" id="option' + k + '"><label for="option' + k + '">' +
      allQuestions[j].choices[k] + '</label></div><br/>';
     
  }
  var quiz=$('#form').append(formHtml);
  
  // $("#quesForm").append("#form");
  // $("#option0").prop('checked', true);

};
function checkAns(n) {
  if ($("input[name=option]:checked").val() == allQuestions[n].correctAnswer) {
    correctAnswers++;
  };
};


  
for (let i  = 0; i  < allQuestions.length; i ++) {
  setupOptions(i);
  
}
  

