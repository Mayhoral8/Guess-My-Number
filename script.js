'use strict';
document.querySelector('.message').textContent = 'Correct Number';
let realNumber = Math.trunc(Math.random()*20 + 1);
 document.querySelector('.highscore').textContent;
let highScore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function (){
        console.log(score);
        let guess = Number(document.querySelector('.guess').value);
        if(!guess){
            document.querySelector('.message').textContent = '⛔Guess a number';
            
        }
        else if (guess === realNumber){
            document.querySelector('.message').textContent = 'Correct Number';
            document.querySelector('body').style.backgroundColor = 'green';
            if(score > highScore){ 
                let highScore = document.querySelector('.score').textContent;
                  document.querySelector('.highscore').textContent = highScore;

            }   
        } else if(guess > realNumber){
            document.querySelector('.message').textContent = 'Too high';
           score--;
           document.querySelector('.score').textContent = score;
           if (score === 0){
            document.querySelector('.message').textContent = 'Game over';
            document.querySelector('.score').textContent = 0;
        } 
        } else if (guess < realNumber){
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }       
        
})
document.querySelector('.again').addEventListener('click', function (){
    highScore = document.querySelector('.score').textContent;
    score = 20;
   realNumber = Math.trunc(Math.random()*20 + 1);
    document.querySelector('.guess').value = '';
     document.querySelector('.score').textContent = 20;
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.message').textContent = 'Start guessing...';
     document.querySelector('.number').textContent = '?';
})


