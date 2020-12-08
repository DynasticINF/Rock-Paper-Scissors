let playerWin = 0;
let computerWin = 0;
const winner = 5;
const mainControls = document.querySelector('.main-controls');
const score = document.querySelector('.main-score');
const roundResults = document.createElement('div');
roundResults.classList.add('round-results');
mainControls.appendChild(roundResults);
let results = document.createElement('p');
roundResults.appendChild(results);


        function computerPlay(){
            const randomSelect = ["Rock", "Paper", "Scissors"];
            randomChoice = randomSelect[Math.floor(Math.random() * randomSelect.length)];
            return randomChoice;
          }
         function playRound(playerSelection, computerSelection){
           computerSelection = computerPlay()
            const rock = buttons[0];
            const paper = buttons[1];
            const scissors = buttons[2]; 
            
            scoreTotal();
            
            /* Rock*/
          if(playerSelection === rock && computerSelection === "Paper"){
            results.textContent = 'You Lose! Paper Beats Rock!';
            score.textContent = " " + playerWin +  "-" + ++computerWin;
          }else if(playerSelection === rock && computerSelection === "Scissors"){
            results.textContent = 'You Win!, Rock Beats Scissors!';
            score.textContent = " " + ++playerWin +  "-" + computerWin;
          }else if(playerSelection === rock && computerSelection === "Rock"){
            results.textContent = 'Tied Round!';          
          }
          /* Paper */
          if(playerSelection === paper && computerSelection === "Scissors"){
            results.textContent = 'You Lose! Scissors Beats Paper!';
            score.textContent = " " + playerWin +  "-" + ++computerWin;
          }else if(playerSelection === paper && computerSelection === "Rock"){
            results.textContent = 'You Win!, Paper Beats Rock!';
            score.textContent = " " + ++playerWin +  "-" + computerWin;
         
          }else if(playerSelection === paper && computerSelection === "Paper"){
            results.textContent = 'Tied Round!';
          }
          /* Scissors */
          if(playerSelection === scissors && computerSelection === "Paper"){
            results.textContent = 'You Win! Scissors Beats Paper!';
            score.textContent = " " + ++playerWin +  "-" + computerWin;    
          }else if(playerSelection === scissors && computerSelection === "Rock"){
            results.textContent = 'You Lose!, Rock Beats Scissors!';
            score.textContent = " " + playerWin +  "-" + ++computerWin;
          }else if(playerSelection === scissors && computerSelection === "Scissors"){
            results.textContent = 'Tied Round!';
          }  
        }

        function scoreTotal(){
          if(playerWin === winner){
            roundResults.textContent = 'The Chosen One Wins!';
          }
          else if(computerWin === winner){
            roundResults.textContent = 'All Is Lost You Failed!';
          }
          if(playerWin === winner || computerWin == winner){
            const resetBtn = document.createElement('button');
            resetBtn.classList.add('reset-btn');
            resetBtn.textContent = 'Reset';
            roundResults.appendChild(resetBtn);
            let reset = document.querySelector('.reset-btn');
            reset.addEventListener('click', refreshPage);
          }
        }

        function refreshPage(){
          window.location.reload();
        }
        
       const buttons = document.querySelectorAll('.Part');        
       buttons.forEach((button) => {
         button.addEventListener('click',function(e){
           let playerSelection = e.target;
           let computerSelection = e.target;
           playRound(playerSelection, computerSelection);
           scoreTotal();         
         })
       })

      
