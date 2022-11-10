const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressionText = document.querySelector('#ProgressionText');
const scoreText = document.querySelector('#score');
const progressionBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let Counter = 0;
let avaliableQuestions = [];


let questions = [
    {
    question: "What is 2 + 2?",
    choice1: "2",
    choice2: '6',
    choice3: '4',
    choice4: '9',
    answer: 2,
},
{
    question: 'What is 2 + 0?',
    choice1: '2',
    choice2: '6',
    choice3: '4',
    choice4: '9',
    answer: 2,
},
{
    question: 'What is 5 + 4?',
    choice1: '2',
    choice2: '6',
    choice3: '4',
    choice4: '9',
    answer: 2,
},
{
    question: 'What is 3 + 3?',
    choice1: '2',
    choice2: '6',
    choice3: '4',
    choice4: '9',
    answer: 2,
}
]




const SCORE_POINTS = 100
const Max_Questions = 4

startGame = () => {
    Counter = 0
    score = 0
    avaliableQuestions = [...questions]
    getNewQuestion()
}


getNewQuestion = () => {
    if(avaliableQuestions.length === 0 || Counter > Max_Questions) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
}

Counter++
progressionText.innerText = `Question ${Counter} of ${MAX_Questions}`
progressionBarFull.style.width = `$[Counter/MAX_QUESTIONS) * 100}%`

const questionsIndex= Math.floor(Math.randon() * avaliableQuestions.length)
currentQuestion = avaliableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset ['number']
    choice.innerText = currentQuestion['choice' + number]
    
})


avaliableQuestions.splice(questionsIndex, 1)


acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
    'incorrect'
    if(classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
        selectedChoice.parentElement.classList.remote(classToApply)
         getNewQuestion()
        
        }, 1000)


    })
})
startGame()
