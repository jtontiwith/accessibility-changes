

/*

-the videos and the questions should be rendered on the page
-the user should be able to submit and answer and get feedback
  -if wrong they should get the right answer
-the user should know their score
-the user should know what question they are one
-the user should be given their final score and be able to start
a new game

What are my questions?
-do the video, the form, and the answers, all each go on 
the object?

{title: '',
   url: '',
   answers: [],
   correctAnswer: 
  },


*/

const STORE = [
  
  { title: 'Thiel’s point is that…',
    url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MGVVRnM50yY?rel=0&amp;start=2504" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    answers: ['Pies taste good.', 'Representative Democracy is always gridlocked', 'Representative Democracy becomes gridlocked without growth', 'Innovation is not always good.'],
    corretAnswer: 2
  },

  {title: 'Socrates thought that…',
   url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/S24FxdvfOko?start=750" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
   answers: ['A good idea about how to live your life could spontaneously occur without too much thinking', 'Ceramics are fun', 'There’s a method for proofing ideas', 'The truth lies in a statement that seems impossible to disprove'],
   correctAnswer: 3 
  },

];

function renderQuiz() {
  //this function will render the quiz videos and questions
  //in the DOM
  const videoQuizItemString = generateQuizQuestionsString(STORE);
    //insert the html into the dom
  console.log(videoQuizItemString);
  

   // $('.js-video-container').html(videoQuizItemString);
  console.log('renderQuiz has run');
}


function generateQuizQuestionsString(quizQuestionData) {
  console.log("Generating quiz questions!!");
  
  const questions = quizQuestionData.map((question, index) =>generateQuizElement(question, index));

  //return questions.join("");
  return questions


  //for(i = 0; i <= questions.length; i++) {
    //return questions[i];
  //}


//i need to loop through the questions and display them one by one
//i need to keep score and display it 

/*
I need to...

1 - show one question at a time
  

2 - listen to see if that question is answered
3 - if that question is answered, i need to report wheather the
answer is correct or not
4 - i need to register the users score
5 - i need to advance the user to the next question 






*/




}


function generateQuizElement(question, questionIndex, template) {
  return `
    <div class="">${question.url}</div>
    <form class="js-question-index-element" data-item-index="${questionIndex}">
      <p>${question.title}</p>
      <div>
        <input type="radio" id="ansChoice" name="" value="0">
        <label for="ansChoice">${question.answers[0]}</label>
      </div>
      <div>
        <input type="radio" id="ansChoice" name="" value="1">
        <label for="ansChoice">${question.answers[1]}</label>
      </div>
      <div>
        <input type="radio" id="ansChoice" name="" value="2">
        <label for="ansChoice">${question.answers[2]}</label>
      </div>
      <div>
        <input type="radio" id="ansChoice" name="" value="3">
        <label for="ansChoice">${question.answers[3]}</label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>`;
    
}
/*
<form>
          <p>Please select the answer:</p>
          <div>
            <input type="radio" id="ansChoice1"
             name="contact" value="1">
            <label for="ansChoice1">Innovation is not always good. 
            </label>
        
            <input type="radio" id="ansChoice2"
             name="contact" value="2">
            <label for="ansChoice2">Pies taste good.</label>
        
            <input type="radio" id="ansChoice3"
             name="contact" value="3">
            <label for="ansChoice1">Representative Democracy is always gridlocked.
            </label>
          
            <input type="radio" id="ansChoice3"
             name="contact" value="4">
            <label for="ansChoice1">Representative Democracy becomes gridlocked without growth.
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

*/





function handleAnswerSubmit() {
  //this function will check to see if answer is correct 
  //and print feedback to the screen
  console.log('handleAnswerSubmit has run');
}

function scoreKeeper() {
  //this function will keep score 
  console.log('scoreKeeper has run');
}

function handleQuiz() {
  //this function calls all the other functions on page load
  renderQuiz();
  handleAnswerSubmit();
  scoreKeeper();
  
}


$(handleQuiz);




