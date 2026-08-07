const questions = [

     {
      category: "General" ,
      question: "What Is Your Name?",
      choices: ["Harry", "Barry", "Yashfeen"] ,
      answer: "Yashfeen" 
    },
    {
      category: "General" ,
      question: "What is Your Age?" ,
      choices: ["23", "19", "22"] ,
      answer: "22" 
    },
      {
      category: "General" ,
      question: "In Which Class do you read?" ,
      choices: ["9th", "10th", "11th"] ,
      answer: "11th" 
    },
      {
      category: "Personal" ,
      question: "What is Your Favorite Fruit?" ,
      choices: ["PineApple", "Mango", "Litchi"] ,
      answer: "Litchi" 
    },
     {
      category: "Personal" ,
      question: "What is Your Favorite Color?" ,
      choices: ["Blue", "Green", "White"] ,
      answer: "Blue" 
    }
];
function getRandomQuestion(questions){
  let index= Math.floor(Math.random()* questions.length);
  return (questions[index]);
}
console.log(getRandomQuestion(questions));



function getRandomComputerChoice(choices){
  let index = (Math.floor(Math.random()*choices.length));
  return choices[index];
  
  
}
let computerchoice = getRandomComputerChoice(questions);
console.log(computerchoice);

function getResults(question, computerchoice){

  let correctans= question.answer;
  if (computerchoice===correctans){
    return "The computer's choice is correct!";
  }
  else{
    return `The computer's choice is wrong. The correct answer is: ${correctans}`;
  }
}
console.log(getResults(questions[1], "23"));


