const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
 const progressionText = document.querySelector('#progressionText');
const scoreText = document.querySelector('#score');
const progressionBarFull = document.querySelector('#progressBarFull'); 

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];


let questions = [
    {
    question: " Who has the most amount of Rings ",
    choice1: "Ty",
    choice2: "Kyo",
    choice3: "Harsh",
    choice4: "Harsh by a far",
    answer: 4,
},
{
    question: 'Bruce Lee is ',
    choice1: "MMA originator",
    choice2: 'Fighter',
    choice3: 'Water',
    choice4: 'A Fake ',
    answer: 4,
},
{
    question: 'What is 5 + 4?',
    choice1: '2',
    choice2: '6',
    choice3: '4',
    choice4: '9',
    answer: 4,
},
{
    question: 'What is 3 + 3?',
    choice1: '2',
    choice2: '6',
    choice3: '4',
    choice4: '9',
    answer: 2,
},
]




const SCORE_POINTS = 100
const Max_Questions = 4

startGame = () => {
    questionCounter = 0
    score = 0
    avaliableQuestions = [...questions]
    getNewQuestion()
};


getNewQuestion = () => {
    if(avaliableQuestions.length === 0 || questionCounter > Max_Questions) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
}



questionCounter++
 questionCounter.innerText = `${questionCounter} of ${Max_Questions}`

   /* progressionText.innerText = `${questionCounter} of ${Max_Questions}`
 progressionBarFull.style.width = `$[questionCounter/MAX_QUESTIONS) * 100}%`
*/
const questionsIndex= Math.floor(Math.random() * avaliableQuestions.length);
currentQuestion = avaliableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset ['number'];
    choice.innerText = currentQuestion['choice' + number];
    
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

    const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' ;

   
    if(classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
    }  

    selectedChoice.parentElement.classList.add(classToApply)

   
 
    setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply)
         getNewQuestion()
        
        }, 1000)


    })
    incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    }
})


startGame();
