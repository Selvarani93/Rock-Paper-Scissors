const computerChoiceDisplay =document.getElementById('computer-choice')
const userChoiceDisplay =document.getElementById('user-choice')
const resultDisplay =document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3 ) + 1 //or you cab use possibleCgoices.length
    

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if(randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult() {
    if(computerChoice === userChoice) {
result = "it's a draw!"
    }
    if(computerChoice === 'rock' && userChoice === "paper"){
        result = 'you win yayyy!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win! yayyy'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win! yayy'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lost!'
    }
    resultDisplay.innerHTML = result
}
