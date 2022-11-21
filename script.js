var startButton = document.getElementById('start-btn')
var intbtn = document.querySelector('.intbtn')
// var answerButtons = document.getElementById('answer-buttons')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var startContainer = document.querySelector('.controls')
var initialSubmit = document.querySelector('intbtn')
var highScores = document.getElementById('hScores')
var yourScore = document.getElementById('yourScore')
var quizScore = 0
let currentQuestionIndex = 0
let shuffledQuestions
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('countdown');
var initials = document.getElementById("scoreContainer");
var correctIndicator = false
var points = 0
var reStart = document.getElementById('goback')
var quizInitials = document.getElementById('quizInitials')



var message = 'TIME IS UP!'
var words = message.split();
var timeLeft = 15;
// Timer that counts down from 15
function countdown() {
    

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + 'second remaining';
            timeLeft--;            

        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = 'TIME IS UP!';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            // displayMessage();
            questionContainerElement.classList.add('hide')
            initials.classList.remove('hide')            
        } 
    }, 1000);
}

intbtn.addEventListener("click", function(event) {
    event.preventDefault();

})

startButton.addEventListener('click', startGame)

function startGame() {
    countdown();
    console.log("start")
    startContainer.classList.add('hide')
    shuffledQuestions = setNextQuestion
    questionContainerElement.classList.remove('hide')    

    
    setNextQuestion()
}

  function setNextQuestion() {
        showQuestion(questions, currentQuestionIndex)
    }

function showQuestion(question, index) {
    console.log("question", question[index].question)
    questionElement.innerText = question[index].question
    answerButtonsElement.innerHTML = ""
    question[index].answers.forEach(answer => {
        const button = document.createElement('button')
        button.textContent = answer.text
        button.setAttribute("value", answer.correct)
        button.classList.add('btn')
        // button.addEventListener('click', selectAnswer)
        button.onclick = selectAnswer
        if (answer.correct) {

        }
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(event) {
    if (this.value == "true") {
        document.getElementById('correct').textContent = 'Correct'
        quizScore ++
        console.log(quizScore)
        
    }
    else {
        document.getElementById('correct').textContent = 'Wrong'
        timeLeft -=5
        
        
        
        
    }
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        setNextQuestion()
        


    
    setTimeout(function(){
        document.getElementById('correct').textContent = ""        
    }, 400 )
    event.preventDefault();

    

   
    }
    else {
        questionContainerElement.classList.add('hide')

        initials.classList.remove('hide')  
        
        
    }




    //   const selectedButton = e.target
    console.log("click", this.value)
    //   const correct = selectedButton.dataset.correct
    //   setStatusClass(document.body, correct)
    //   Array.from(answerButtonsElement.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct)
    //   })
    //   if (shuffledQuestions.length > currentQuestionIndex + 1) {
    //     answer-buttons.classList.remove('hide')
    //   } else {
    //     startButton.innerText = 'Restart'
    //     startButton.classList.remove('hide')
    //   }
}

function setCorrectDiv(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.value = 'Correct'

       

    } else {
        element.value = 'Wrong'
        
    }
}

// renderLastPlayer();

// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msDiv.setAttribute('class', type);
// }

// function renderLastPlayer() {
//     var playerName = localStorage.getItem('initials');
//     var playerScore = localStorage.getItem('quizScore');

//     if (!'initials' || !password) {
//         return;
//     }

//     user
// }
renderLastRegistered();

function renderLastRegistered() {
    var quizInitials = localStorage.getItem("initials");
    var quizScore = localStorage.getItem("quizScore");
}

var players = []
const addPlayer = (event) => {
    event.preventDefault(); // to stop form submitting initials
    let player = {
        id: Date.now(),
        initials : document.getElementById('quizInitials').value,quizScore
        
       
    }
    players.push(player);
    document.forms[0].reset();

  
   
    // document.querySelector('form').reset(); //to clear the form for the next entries

    // //for display purposes only
    // console.warn('added', {players} );
    // let pre = document.querySelector('')
    // pre.textContent = + JSON.stringify(players);

    //saving to local Storage

    localStorage.setItem('players', JSON.stringify(players) );


}
document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('button').addEventListener('click', addPlayer);
    renderLastRegistered();
});

const restart = (e) => {
    e.preventDefault();
    reStart.addEventListener('click', startGame)
    console.log("not work")
}




// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '3', correct: false },
            { text: '8', correct: false }
        ]
    },
    {
        question: 'What is 1 + 2?',
        answers: [
            { text: '3', correct: true },
            { text: '22', correct: false },
            { text: '7', correct: false },
            { text: '8', correct: false }
        ]
    },
    {
        question: 'What is 4 + 2?',
        answers: [
            { text: '6', correct: true },
            { text: '22', correct: false },
            { text: '3', correct: false },
            { text: '8', correct: false }
        ]
    },
]

// x=5
// z=7
// function sum(a,b){
//     return a+b
// }
// let answer = sum(x,z)
// let array = [a,b,c]
// array[0]
// let object = {
//     a:1,
//     b:2,
// }
// object[b]
// object.b
// let arrayofobjects = [
//     {
//         a:1,
//         b:2,
//     },
//     {
//         a:1,
//         b:2,
//     }
// ]