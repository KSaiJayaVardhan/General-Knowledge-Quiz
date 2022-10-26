var chalk = import("chalk");

var readlineSync = require('readline-sync');
var score = 0;

var questions = [
  {
    question: "How many states are there in india? ",
    answer: "28",
  },
  {
    question: "Which country shares the Loc border line with India? ",
    answer: "Pakistan",
  },
  {
    question: "What is the second-largest continent in the world? ",
    answer: "Africa",
  },
  {
    question: "What is the second-largest mountain in the world? ",
    answer: "K2",
  },
  {
    question: "When was the Indian constitution came into effect? (Answer format: Date MonthName, year) ",
    answer: "26 january, 1950",
  },
  {
    question: "Who is the current external affairs minister of India? ",
    answer: "S jaishankar",
  }, 
]

var highScores = [
  {
    name: 'Vardhan',
    score: '5',
  },
  {
    name: 'Ravi',
    score: '4',
  },
]

function welcome(){
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to GK quiz");
  console.log("Let's start the quiz");
}

function play(question, answer) {
  var currentAnswer = readlineSync.question(question);
  if (currentAnswer.toUpperCase() === answer.toUpperCase()){
    console.log('\x1b[32m%s\x1b[0m', 'Right!');
    score ++;
  }
  else{
    console.log('\x1b[31m%s\x1b[0m', 'Wrong!');
  }
  console.log("Your Current Score: ", score);
}

function callingQuestions(){
  for (var i = 0; i < questions.length; i++){
    play(questions[i].question, questions[i].answer);
  }
}

function compareScores(highScore){
  console.log("Your final score: ", score);
  currentScore = score;
  if (currentScore >= highScore){
    console.log('\x1b[32m%s\x1b[0m', "Congratulations! You have beaten the high score. Please send me the screenshot of your score; I'll update it.");
  }
  else {
    console.log("The high score is: ",highScore);
  }
}

function callingScores(){
  var highScore = 0;
  for (var i = 0; i < highScores.length; i++){
    if (highScores[i].score > highScore) {
      highScore = highScores[i].score
    }
  }
  compareScores(highScore);
}


welcome();
callingQuestions();
callingScores();

