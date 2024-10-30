let randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber)
const submit = document.querySelector('.Submit');
const userinput = document.querySelector('.userinput');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultpara');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
      const guess =  parseInt(userinput.value)
      console.log(guess)
      validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter a number greater than 0');
    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess>10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)

        }
    }

}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`You guessed it right.`)
        endGame();
    }
    if(guess<randomNumber){
        displayMessage(`Your number is small.`)
    }
    if(guess > randomNumber){
        displayMessage(`Your number is large.`)
    }

}

function displayGuess(guess){
    userinput.value=''
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userinput.value = ''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true
    })
}









