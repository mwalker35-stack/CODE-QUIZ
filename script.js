const startButton = document.getElementById('start-btn')
const answerButtons = document.getElementById('answer-buttons')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const startContainer = document.querySelector('.controls')
const quizScore = 0
let currentQuestionIndex = 0
let shuffledQuestions
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('countdown');
var initials = document.getElementById("quizInitials");

var message ='Time is up!';
var words = message.split();

// Timer that counts down from 5
function countdown() {
    var timeLeft = 60;

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
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
        }
    }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
    var wordCount = 0;

    function hideContainer() {

    }

    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
        // If there are no more words left in the message
        if (words[wordCount] === undefined) {
            // Use `clearInterval()` to stop the timer
            clearInterval(msgInterval);
        } else {
            // Display one word of the message
            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000);
}


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
    question[index].answers.forEach(answer => {
        const button = document.createElement('button')
        button.textContent = answer.text
        button.setAttribute("value", answer.correct)
        button.classList.add('btn')
        // button.addEventListener('click', selectAnswer)
        button.onclick = selectAnswer
        // if (answer.correct) {
        //   button.dataset.correct = answer.correct
        // }
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer() {
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

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
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