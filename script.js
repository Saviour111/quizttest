
const questions = [
    {
      question: "How many hours do we have in a day",
        answers: [
            { text: "79", correct: false},
            {text: "60", correct: false},
            {text: "24", correct: true},
            {text: "43", correct: false},
       ]
    },

    {

        question: "What is the name of bootcamp 13 instructor",
        answers:[
            {text: "Drey", correct: true},
         {text: "Savy", correct: false},
          {text: "Francis", correct: false},
            {text: "Terra", correct: false},
        ]
     },

    {

      question: "How many weeks will the bootcamp last",
     answers:[
        {text: "6weeks", correct: true},
         {text: "7weeks", correct: false},
      {text: "9weeks", correct: false},
   {text: "12weeks", correct: false},
       ]
     },

     
    {
        question: "How many did codehub scored last week",
       answers:[
         {text: "83", correct: true},
         {text: "100", correct: false},
      {text: "246", correct: false},
       {text: "43", correct: false},
       ]
   }
 ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQestionIndex = 0;
 let score = 0;

function startQuiz(){
   currentQestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();
     }

 function showQuestion(){
   resetState();
         let currentQestion = questions[currentQestionIndex];
        let questionNo = currentQestionIndex + 1;
     questionElement.innerHTML = questionNo + ". " + currentQestion.
    question;

     currentQestion.answers.forEach(answer => {
      const  button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
       answerButtons.appendChild(button);
         if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        
    });
}

 function resetState(){
    nextButton.style.display = "none";
     while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
   }
 }


   function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
         selectedBtn.classList.add("incorrect");
     }
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");

      }
      button.disabled = true;

    });
    nextButton.style.display = "block";
 }
 
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

 function handleNextButton(){
  currentQestionIndex++;
  if(currentQestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }

 };

nextButton.addEventListener("click", ()=>{
  if(currentQestionIndex < questions .length){
    handleNextButton();
  }else{
    startQuiz();
  }
})
 
 resetState();
startQuiz();