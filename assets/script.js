// Once the user presses the start button, the question will appear and the timer will begin

    // #1 --Place and Declare global variables 


    var startBtn = document.getElementById("startBtn");
    var time = 75;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    // Set score = 0 at the start of the game 
    var score = 0;
    // question index
    let i = 0;

// #2  --Place and Declare questions array; This will present the questions for the quiz:

var questionsArray = [
{
    question: "Question: What is the HTML tag under which you can write the JavaScript code?",
    imageSrc: "",
    answerChoice: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
    correctAnswer: 2
}, 
{
    question: "Question: What are variables used for in JavaScript Programs?",
    imageSrc: "",
    answerChoice: ["A) Storing numbers, dates, or other values", "B) Varying randomly", "D) Causing high-school algebra flashbacks", "D) None of the above"],
    correctAnswer: 0
},
{
    question: "Question: Which method adds a new item to the end of an array and returns the new length?",
    imageSrc: "",
    answerChoice: ["A) shift()", "B) return() ", "C) push() ", "D) pop()"],
    correctAnswer: 2
}, 
{
    question: "Question: Which of the following can't be done with client-side JavaScript?",
    imageSrc: "",
    answerChoice: ["A) Sending a form's contents by email", "B) Validating a form", "C) Storing the form's contents to a database file on the server", "D) None of the above"],
    correctAnswer: 2
},
{
    question: "Question: Which of the following are capabilities of functions in JavaScript?",
    answerChoice: ["A) Return a value", "B) Accept parameters", "C) Accept parameters and Return a value", "D) All of the above"],
    correctAnswer: 1
}];


//#3 Countdown Timer Section: Set countdown timer and interval as well as time-related valiables.

//This will change the seconds variable every second.

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

//function in order to change the time variable

function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        // clearInterval(countdownTimerInterval);
        //alert user and stop quiz
        }
        document.getElementById("timer").innerHTML = time;
    }

// #4 --Event Listener (Start): When user clicks the Start button, start the countdown timer and quiz questions. Each button should have its own event liste
startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});

// #5 -- Quiz questions & choice options: in order to show questions and multiple-choice answers

function setQuizQuestions() {
    questionHeading.textContent = questionsArray[i].question;
    answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
    answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
    answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
    answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
    };



// When the user selects their answer for the question: then user is presented with another question

// This will save the answer choices and Clear the elements and update score count, appropriately and change to the next question.


answerChoiceA.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer;
    console.log("correctAnswer " + correctAnswer);
    // checks answer
    if (0 === correctAnswer) { 
        // display message to user for 1 second to declare if the answer is correct or incorrect
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
            },
            1000
        );
        // when the user answers a question correctly it will INCREASE the score
        score++;    
        // display updated score progress
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        // when user answers a question inccorrectly it will SUBTRACT from the time
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

answerChoiceB.addEventListener('click', function(event) {
event.stopPropagation();
correctAnswer = questionsArray[i].correctAnswer;
console.log(correctAnswer);
    if (1 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
     i++ 
    setQuizQuestions();
    };
});

answerChoiceC.addEventListener('click', function(event) {
event.stopPropagation();
correctAnswer = questionsArray[i].correctAnswer;
console.log(correctAnswer);
if (2 === correctAnswer) { 
    document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
    setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
            },
            1000
        );
    score++;
    document.getElementById("score").innerHTML = score;
} else {
    time_remaining -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
    setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
            },
            1000
        );
}
if (i >= questionsArray.length -1) {
end_quiz();
} else {
    i++ 
    setQuizQuestions();
};
});

answerChoiceD.addEventListener('click', function(event) {
event.stopPropagation();
correctAnswer= questionsArray[i].correctAnswer.value;
console.log(correctAnswer);
if (3 === correctAnswer) { 
    document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
    setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
            },
            1000
        );
    score++;
    document.getElementById("score").innerHTML = score;
} else {
    time_remaining -= 5;
    document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
    setTimeout(function() {
        document.getElementById("AnswerResponse").innerHTML = "";
            },
            1000
        );
}
if (i >= questionsArray.length -1) {
   end_quiz();
} else {
    i++ 
    setQuizQuestions();
};
});

    //#6 -- END QUIZ --


    function end_quiz(){
        document.getElementById("game_over").style.display= "block";
        document.getElementById("quizContainer").style.display="none";
        document.getElementById("countdownTimer").style.display= "none";
        document.getElementById("score_keeper").style.display= "none";
        document.getElementById("AnswerResponse").innerHTML="";
        document.getElementById("end_score").innerHTML= score;
        }

    //in order to log score and initals
        function submit_score() {
         high_scores.push(document.getElementById("initials").value + " " + score);
         view_high_scores();
        }

    // localStorage.setItem("score",JSON.stringify(AnswerResponse));
    // localStorage.setItem("initials", JSON.stringify(initials));
    
    function view_high_scores(){
    
    // to change the the screen output
    
        document.getElementById("quizContainer").style.display="none";
        document.getElementById("game_over").style.display= "none";
        document.getElementById("high_scores_page").style.display="block";
    
        output="";
        for(let k=0; k<high_scores.length; k++){
             output = output + "  " + high_scores[k];
        }
        document.getElementById("high_scores").innerHTML= output;                
         clear_up();
    }

    // in order to refresh and return the site back to the home container page

    function go_home(){	
            document.getElementById("high_scores_page").style.display= "none";
            document.getElementById("homeContainer").style.display= "block";
            clear_up();
    }
    
    // clear the highscore
    function clear_hs(){
        high_scores = [];
        // high_scores.splice(0, high_scores.length);
      }
    
    // refresh the site 
    function clear_up(){
    
    time=75;
    time_remaining=true;
    time_start=false;
    i=0;
    score=0;
    }