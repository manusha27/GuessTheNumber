const userInput = document.querySelector('.guessField')
const submit = document.querySelector("#subt")
const guesses = document.querySelector('.guesses')
const remainingAttempts = document.querySelector('.attempts')
const loworhi = document.querySelector('.loworhi')
const startOver = document.querySelector('.resultInfo')

let playGame = true
let noOfAttempts = 1
let prevGuesses = []
const p = document.createElement('p')


let randomNumber = parseInt(Math.random() * 100 + 1)

if(playGame)
{
    submit.addEventListener('click', function(e)
    {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert(`Please enter a valid number`)
    }else if(guess < 1 || guess > 100)
    {
        alert(`Please enter number between 1 and 100`)
    }
    else{
        if(noOfAttempts === 11)
        {
            displayMessage(`Game over !!! Random number was ${guess}`)
            endGame()
        }
        else{
            checkGuess(guess)
            displayGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if(guess === randomNumber)
    {
        displayMessage(`Yahoo! You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber)
    {
        displayMessage(`Your guess is too low`)
    }
    else
    {
        displayMessage(`Your guess is high`)
    }
}

function displayGuess(guess)
{
    userInput.value = ''
    guesses.innerHTML += `${guess} `
    noOfAttempts++
    remainingAttempts.innerHTML = `${11 - noOfAttempts}`
}

function displayMessage(message)
{
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newgame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame()
{
    const newGameButton = document.querySelector("#newgame")
    newGameButton.addEventListener('click', function(e)
    {
       noOfAttempts = 1
       guesses.innerHTML = ''
       remainingAttempts.innerHTML = '10'
       userInput.removeAttribute('disabled')
       startOver.removeChild(p)
       playGame = true
    })
}