

/*

-the videos and the questions should be rendered on the page
-the user should be able to submit and answer and get feedback
  -if wrong they should get the right answer
-the user should know their score
-the user should know what question they are one
-the user should be given their final score and be able to start
a new game

*/


let j = 0; //an iterator used to make and fadeOut unique divs

const STORE = {
  currentQuestion: 0,
  scorecard: 0,
  questions: [
    { title: 'Thiel’s point is that…',
    url: '<iframe width="560" height="315" title="Thiel Video" src="https://www.youtube.com/embed/MGVVRnM50yY?rel=0&amp;start=2504&end=2554" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    answers: ['Pies taste good', 'Representative Democracy is always gridlocked', 'Representative Democracy becomes gridlocked without growth', 'Innovation is not always good'],
    correctAnswer: 2
  },

  {title: 'Socrates thought that…',
   url: '<iframe width="560" height="315" title="Socrates Video" src="https://www.youtube.com/embed/S24FxdvfOko?rel=0&amp;start=750&end=858" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
   answers: ['A good idea about how to live your life could spontaneously occur without too much thinking', 'Ceramics are fun', 'There’s a method for proofing ideas', 'The truth lies in a statement that seems impossible to disprove'],
   correctAnswer: 3 
  },

  { title: 'Elons’s point is that…',
    url: '<iframe width="560" height="315" title="Elon Video" src="https://www.youtube.com/embed/jOzk6pCYV98?rel=0&amp;start=405&end=445" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    answers: ['You can create new carbon from nothing', 'The earth can resist anything human do to it', 'There is a surface carbon cycle you cannot continually add to without consequence', 'People are dumb'],
    correctAnswer: 2
  },

  {title: 'Cal is making the point that…',
   url: '<iframe width="560" height="315" title="Cal Video" src="https://www.youtube.com/embed/qwOdU02SE0w?rel=0&amp;start=1893&end=1966" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
   answers: ['You should become a yoga instructor', 'Career capital is important', 'You can’t switch industries or jobs', 'Leaving all your career capital on the table to do something new will set you back'],
   correctAnswer: 3 
  },

  {title: 'Peterson is saying that…',
   url: '<iframe width="560" height="315" title="Peterson Video" src="https://www.youtube.com/embed/8hTSK1iDcvQ?rel=0&amp;start=282&end=304" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
   answers: ['Unmapped territory is a problem', 'You should articulate a pathway through things that bother you', 'Chaos is the dominant force in nature', 'Things fall apart'],
   correctAnswer: 1 
  }

    ]
};

//this initates the sequence of fucntions that take the data from
//STORE and maps it into html strings
const videoQuizItemArray = generateQuizQuestionsArray(STORE.questions);


//starts the quiz
function startQuiz() {
 $('.quiz-start').html('<button class="btn btn-secondary btn-lg">start quiz</button><br><p>Listen to short video excerpts of thinkers and test your interpretation.</p>');

  console.log("something happened");

  $('.quiz-start').on('click','button',function(event) {
    console.log("something happened inside submit");
    questionCounter();
    $('.quiz-start').remove();
  }); 

}

//pass the user to the next question
function questionCounter() {
  if(STORE.currentQuestion <= 4) {
    renderQuiz(STORE.currentQuestion);
    console.log("We just passed " + STORE.currentQuestion + "to renderQuiz")
    STORE.currentQuestion++;
  } else {
    showResultsAndRetake();
  }

}


function showResultsAndRetake() {
  $('.js-video-container').toggle();
  $('.quiz-retake').append(`<button class="btn btn-secondary btn-lg retake" data-id="1">retake quiz</button>`); 
  $('.quiz-retake').append(`<div>You scored a ${STORE.scorecard} out of 5.</div>`);  

  $('button').on('click', function() {
    console.log('I want something to happen')
    
    STORE.currentQuestion = 0;
    STORE.scorecard = 0;
    
    
    //$('.quiz-retake').find(`[data-id='1']`).remove();
    $('.quiz-retake').empty();

    $('.js-video-container').toggle();
    questionCounter();
  
  });

}


function renderQuiz(counter) {
  //this function will render the quiz videos and questions
  //in the DOM 
  $('.js-video-container').html(videoQuizItemArray[counter]);


   $("input[type='radio']").change(function(){
      $("button[type='submit']").prop("disabled", false);
  }); 
 
  console.log('renderQuiz has run');
}

function generateQuizQuestionsArray(quizQuestionData) {
  console.log("Generating quiz questions!!");
  const questions = quizQuestionData.map((question, index) =>
    generateQuizElement(question, index));
  return questions

}

/* 
What's happening above here with .map? 
  -you pass in STORE.questions (an array of objects) through 
  quizQuestionData
  -you then call map on quizQuestionData
  -when you call .map(question, index) => it's the same as 
  .map(function (question, index)) so essentially the
  "question" parameter is each object in the array and the 
  index is of course the index of said object
  -then the callback function you run against each item in the
  array is the generateQuizElement function 
  -it performs and operation on each element in the array, the
  result of which is saved and put into a new array 

*/

//injecting the data from store into html strings
function generateQuizElement(question, questionIndex) {
  return `
    <fieldset role="radiogroup">
      <div class="question-container row" data-item-index="${questionIndex}">
          <div class="col-md-6">
            <legend role="radiogroup" >
              <div class="video-container">${question.url}</div>
            </legend>
          </div>
          <div class="col-md-6">
            <p class="question-counter">You are on question ${questionIndex + 1} of ${STORE.questions.length}.</p>
            <p>${question.title}</p>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="ansChoice0" name="radio" value="0">
              <label class="form-check-label" for="ansChoice0">${question.answers[0]}
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="ansChoice1" name="radio" value="1">
              <label class="form-check-label" for="ansChoice1">${question.answers[1]}</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="ansChoice2" name="radio" value="2">
              <label class="form-check-label" for="ansChoice2">${question.answers[2]}</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="ansChoice3" name="radio" value="3">
              <label class="form-check-label" for="ansChoice3">${question.answers[3]}</label>
            </div>
            <button type="submit" class="btn btn-primary" disabled="disabled">Submit</button>
          </div>
        </div>
      </fieldset>`;
}


function handleQuizQuestionSubmit() {
  $('#js-question-form').on('submit', function(event) {
    event.preventDefault();
    let userAnswer = $('input[name="radio"]:checked').val();
    let userAns = parseInt(userAnswer, 10);

    scoreKeeper(userAns); 
    questionCounter();
    
  });
}


function scoreKeeper(userAnswer) {
  //this function will keep score
  // the -1 because I already increment to the currentQuestion 
  // before I need to grab it and use it here  
  let rightAnswer = STORE.questions[STORE.currentQuestion - 1].correctAnswer;
  console.log(rightAnswer);
  
  if(userAnswer === rightAnswer) {
    STORE.scorecard++;
    console.log("correct");
   $('.js-feedback-container').append(`<div class="card card-body bg-light" id="${j}">You got question ${STORE.currentQuestion} right and your are ${STORE.scorecard} for ${STORE.currentQuestion}.</div>`); 
    //have to assign id to each div and fade out that div
    //specifically so that I can can fadeOut each one
    $('#' + j).fadeOut( 5000, function() {
    }); 
    j++;
  } else {
    $('.js-feedback-container').append(`<div class="card card-body bg-light" id="${j}">You got question ${STORE.currentQuestion} wrong and your are ${STORE.scorecard} for ${STORE.currentQuestion}. The correct answer was ${STORE.questions[STORE.currentQuestion - 1].answers[rightAnswer]}.</div>`);    
      
    //have to assign id to each div and fade out that div
    //specifically so that I can can fadeOut each one
    $('#' + j).fadeOut( 5000, function() {
    });  
    j++;
  }
  
  console.log("scoreKeeper did run alll the way!")
}


function handleQuiz() {
  //this function calls all the other functions on page load
  startQuiz(); 
  handleQuizQuestionSubmit();
}


$(handleQuiz);


//MY NOTES
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

DONE

5 - i need to register the users score
 
DONE

6 - i need to let the user start a new game

DONE

7 - I need to let the user start a new game after finishing

-I want the last question to trigger a new screen DONE
-I want the user to be able to "reset" the quiz from that screen
-I want the new screen to disappear, but then reappear when 
I need it again so that the user can loop through taking the
quiz over and over again





*/





