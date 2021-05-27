'use strict';

const rollDiceEl = document.querySelector('.btn--roll');
const holdScoreEl = document.querySelector('.btn--hold');
const newGameEl = document.querySelector('.btn--new');
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.getElementById('score--1');
const displayImage = document.querySelector('.dice');
const currentScoreE0 = document.getElementById('current--0');
const currentScoreE1 = document.getElementById('current--1');
const playerEle0 = document.querySelector('.player--0');
const playerEle1 = document.querySelector('.player--1');


// initial scores and other setting to 0
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
displayImage.classList.add('hidden');

let score = [0, 0]
let currentScore = 0;
let activePlayer = 0;
// let score = 0;



const rollDiceFun = function(){
    
    
    let diceRoll = Math.floor(Math.random() * 6 + 1)
    displayImage.src = `dice-${diceRoll}.png`;
    // displayImage.style.animation = "large 0.1s 5";
    displayImage.classList.remove('hidden');
    
    if(diceRoll !== 1){
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }else{
        currentScore = 0;
        playerEle0.classList.toggle('player--active');
        playerEle1.classList.toggle('player--active');
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
        activePlayer = activePlayer === 0 ? 1 : 0 ;
    }
}

function holdScore(){
    // add current score to active player score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]; 
    playerEle0.classList.toggle('player--active');
    playerEle1.classList.toggle('player--active');
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if(score[activePlayer] >= 100){
        document.getElementById(`score--${activePlayer}`).style.fontSize = "4rem";
        document.querySelector(`.player--${activePlayer}`).classList.add('background');
        
        document.getElementById(`score--${activePlayer}`).textContent = `${score[activePlayer]}, Player${activePlayer + 1} Wins !` 
        activePlayer = 3;
        rollDiceEl.removeEventListener('click', rollDiceFun );
        holdScoreEl.removeEventListener('click', holdScore);
        playerEle1.classList.remove('player--active')

        playerEle0.classList.remove('player--active');

    
        
    } 
    
    activePlayer = activePlayer === 0 ? 1 : 0 ;

}

function newGame(){
    // console.log(1)
    score[activePlayer] = 0;
    rollDiceEl.addEventListener('click', rollDiceFun );
    holdScoreEl.addEventListener('click', holdScore);
    currentScore = 0;
    scoreEl0.textContent = 0;
    scoreEl1.textContent = 0;
    currentScoreE0.textContent = 0;
    currentScoreE1.textContent = 0;
    activePlayer = 0;
    // playerEle0.classList.toggle('player--active');
    playerEle0.classList.remove('background');
    playerEle1.classList.remove('background');
    playerEle1.classList.remove('player--active')
    if(!playerEle0.classList.contains('player--active')){
        playerEle0.classList.add('player--active');
    }
    

}

rollDiceEl.addEventListener('click', rollDiceFun);
holdScoreEl.addEventListener('click', holdScore);
newGameEl.addEventListener('click', newGame);

// if(score[activePlayer - 1] >= 100 || score[activePlayer + 1] >=100){
//     holdScoreEl.removeEventListener('click', holdScore );
// }
    // add current score to active player score
//     score[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]; 
//     playerEle0.classList.toggle('player--active');
//     playerEle1.classList.toggle('player--active');
//     currentScore = 0;
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     if(score[activePlayer] >= 100){
//         document.getElementById(`score--${activePlayer}`).style.fontSize = "4rem";
//         document.getElementById(`score--${activePlayer}`).textContent = `${score[activePlayer]}, Player${activePlayer + 1} Wins !` 
//         activePlayer = 3;
//         holdScoreEl.removeEventListener('click');
//     } 
    
//     activePlayer = activePlayer === 0 ? 1 : 0 ;
// })
// if(score[activePlayer] >= 100){
//     document.getElementById(`score--${activePlayer}`).style.fontSize = "4rem";
//     document.getElementById(`score--${activePlayer}`).textContent = `${score[activePlayer]}, Player${activePlayer + 1} Wins !` 
//     activePlayer = 3;
//     holdScoreEl.removeEventListener('click');
// } 