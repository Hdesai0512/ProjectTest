const question = document.querySelector('#question');
const answers = document.querySelector('.choice-text');
const progressionText = document.querySelector('#ProgressionText');
const scoreText = document.querySelector('#score');
const progressionBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let Counter = 0
let avaliableQuestions = []


let questions = {
    question: 'What is 2 + 2?',
    choice1: '2',
    choice2: '6',
    choice3: '4',
    choice4: '9',
    answer: 2
}







const SCORE_POINTS = 100
const Max_Questions = 4

startQuiz = () => {
    questionCounter = 0
    score = 0
    avaliableQuestions = [...questions]
    getNewQuestion()
}


getNewQuestion = () => {
    if(avaliableQuestions.length === 0 || questionsCounter > Max_Questions){
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
}

questionCounter++
progressionText.innerText = 'Question ${questionCounter} of ${MAX_Questions}'
progressionBarFull.style.width = '$[questionCounter/MAX_QUESTIONS) * 100}%'

const questionsIndex= Math.floor(Math.randon() * avaliableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.array.forEach(choice => {
    const number = choice.dataset ['number']
    choice.innerText = currentQuestion['choice' + number]
    
})

avaliableQuestions.splice(questionsIndex, 1)


acceptingAnswers = true
}