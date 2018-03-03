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
  
  { title: 'Thiel’s point is that…1',
    url: 'https://www.youtube.com/watch?v=MGVVRnM50yY',
    answers: ['Pies taste good.', 'Representative Democracy is always gridlocked', 'Representative Democracy becomes gridlocked without growth', 'Innovation is not always good.'],
    correctAnswer: 2
  },

  {title: 'Socrates thought that…2',
   url: 'https://www.youtube.com/watch?v=S24FxdvfOko',
   answers: ['A good idea about how to live your life could spontaneously occur without too much thinking', 'Ceramics are fun', 'There’s a method for proofing ideas', 'The truth lies in a statement that seems impossible to disprove'],
   correctAnswer: 3 
  },

  { title: 'Thiel’s point is that…3',
    url: 'https://www.youtube.com/watch?v=MGVVRnM50yY',
    answers: ['Pies taste good.', 'Representative Democracy is always gridlocked', 'Representative Democracy becomes gridlocked without growth', 'Innovation is not always good.'],
    correctAnswer: 2
  },

  {title: 'Socrates thought that…4',
   url: 'https://www.youtube.com/watch?v=S24FxdvfOko',
   answers: ['A good idea about how to live your life could spontaneously occur without too much thinking', 'Ceramics are fun', 'There’s a method for proofing ideas', 'The truth lies in a statement that seems impossible to disprove'],
   correctAnswer: 3 
  }

];

/*


function startQuiz() {
 $('.js-video-container').html('<button>start quiz</button>');

  console.log("something happened");

  $('.js-video-container').click(function(event) {
    event.preventDefault();
    console.log("something happened inside submit");
    renderQuiz(counter);
  }); 

}
*/

//I am trying to get a function to run when I click a submit button
//this is how I am doing it...

/*
  -I am calling a function that puts a submit button in the DOM
  -That same function puts and event listener on the submit button
  that listens for when it's submitted 
  -when it's clicked it should run a function that starts the quiz
  but it remains unresponsive as if the evenlister is not bound to
  the submit button 


*/

/*
  -What am I trying to do?
    -I want to show the first question and then I want to 
    move to the next question each time the person submits
    -what am I doing now?


What happens in the app?
1 - handleQuiz() calls renderQuiz() and passes 0 as an argument
2 - renderQuiz calls generateQuizQuestionsArray(STORE), passing 
the STORE array as an argument
3 - generateQuizQuestionsArray(STORE) calls .map() on STORE, which 
applies the function generateQuizElement() to each item on the 
STORE array, essentially generateQuizElement() creates an array
html strings with all the question data from the STORE array and
it takes the index of each item in the store array and puts it 
into the data-item-index="" attribute. It stores that new array
of html strings (filled with the relevant data) in a constant
named "questions" and returns it. As the array of html strings 
is what's returned from generateQuizQuestionsArray(STORE) when 
it's called in renderQuiz, that's what gets put into videoQuizItemArray and then subsequently output to the screen
with $('.js-video-container').html(videoQuizItemArray[counter]);





*/


let qCounter = 0;

function questionCounter() {
  renderQuiz(qCounter); 
  qCounter++;
  console.log("This si the counter: " + qCounter);
 

}




//renderQuiz(counter);


function renderQuiz(counter) {
  //this function will render the quiz videos and questions
  //in the DOM
  //const videoQuizItemArray = generateQuizQuestionsArray(STORE);
    //insert the html into the dom
  const videoQuizItemArray = generateQuizQuestionsArray(STORE);
  console.log(videoQuizItemArray);
  //nextQuestion(videoQuizItemArray);

  //let counter = 1;
  //for(i = 0; i <= videoQuizItemArray.length; i++) {
    $('.js-video-container').html(videoQuizItemArray[counter]);
  //}

   // $('.js-video-container').html(videoQuizItemString);
  console.log('renderQuiz has run');
}


function generateQuizQuestionsArray(quizQuestionData) {
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
DONE  

2 - listen to see if that question is answered
DONE

3 - if that question is answered, i need to report wheather the
answer is correct or not
DONE

4 - i need to advance the user to the next question

5 - i need to register the users score
 
6 - i need to let the user start a new game

*/

}

function generateQuizElement(question, questionIndex, template) {
  return `
    <div class="question-container" data-item-index="${questionIndex}">
      <div class="">${question.url}</div>
        <p>${question.title}</p>
        <div>
          <input type="radio" id="ansChoice" name="radio" value="0">
          <label for="ansChoice">${question.answers[0]}</label>
        </div>
        <div>
          <input type="radio" id="ansChoice" name="radio" value="1">
          <label for="ansChoice">${question.answers[1]}</label>
        </div>
        <div>
          <input type="radio" id="ansChoice" name="radio" value="2">
          <label for="ansChoice">${question.answers[2]}</label>
        </div>
        <div>
          <input type="radio" id="ansChoice" name="radio" value="3">
          <label for="ansChoice">${question.answers[3]}</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>`;
}

/* {
  
  return `
    <div class="">${question.url}</div>
    <form class="js-question-index-element" data-item-index="${questionIndex}" id="js-question-form">
      <p>${question.title}</p>
      <div>
        <input type="radio" id="ansChoice" name="radio" value="0">
        <label for="ansChoice">${question.answers[0]}</label>
      </div>
      <div>
        <input type="radio" id="ansChoice" name="radio" value="1">
        <label for="ansChoice">${question.answers[1]}</label>
      </div>
      <div>
        <input type="radio" id="ansChoice" name="radio" value="2">
        <label for="ansChoice">${question.answers[2]}</label>
      </div>
      <div>
        <input type="radio" id="ansChoice" name="radio" value="3">
        <label for="ansChoice">${question.answers[3]}</label>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>`;
    
} */

function handleQuizQuestionSubmit() {
  $('#js-question-form').on('submit', function(event) {
    event.preventDefault();
    let userAnswer = $('input[name="radio"]:checked').val();
   
    console.log('handleQuizQuestionSubmit did run');
    const qIndex = getQuizQuestionIndexFromElement(event.currentTarget); 
    
    let userAns = parseInt(userAnswer, 10);
    let questionIndex = parseInt(qIndex, 10);  

    console.log(userAns, questionIndex);

    //scoreKeeper(userAns, questionIndex); 
    console.log('this is the:' + questionIndex);
    
  
    questionCounter();

  });
}




function getQuizQuestionIndexFromElement(questFromDom) {
  const questionIndexString = $(questFromDom).attr('data-item-index');
  //console.log(questionIndexString); 
  return parseInt(questionIndexString, 10);
  

}

/*
function scoreKeeper(userAnswer, qIndex) {
  //this function will keep score 
  
  
    I want to keep score, I could do it by keeping the 
    ammount of write and wrong answers in different 
    variables


  

  if(userAnswer === STORE[qIndex].correctAnswer) {
    console.log("correct");
    $('.js-feedback-container').html('You got it right!')

  } else {
    console.log("wrong buddy");
    $('.js-feedback-container').html('You got it wrong!')
  }

  console.log("scoreKeeper did run alll the way!")
}
*/


function handleQuiz() {
  //this function calls all the other functions on page load
  questionCounter();
  //renderQuiz();
  //scoreKeeper();
  handleQuizQuestionSubmit();
  //startQuiz();
  
}


$(handleQuiz);