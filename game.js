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
    question: " What year did the Berlin wall fall? ",
    choice1: "1960",
    choice2: "1784",
    choice3: "1945",
    choice4: "1989",
    answer: 4,
},
{
    question: 'What element does the chemical symbol Au stand for',
    choice1: "Iron",
    choice2: 'Steel',
    choice3: 'Water',
    choice4: 'Gold ',
    answer: 4,
},
{
    question: 'What is the capital of India',
    choice1: 'Mumbai',
    choice2: 'New Delhi',
    choice3: 'Ahmadabad',
    choice4: 'Nagpur',
    answer: 2,
},
{
    question: 'What weighs more a pound of cotton or a pound of brick',
    choice1: 'Cotton',
    choice2: 'Brick',
    choice3: 'Both way the same',
    choice4: 'Neither',
    answer: 3,
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
