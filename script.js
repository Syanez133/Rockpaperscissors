/*
Create three buttons, one for each selection. Add an event listener to the buttons 
that calls your playRound function with the correct playerSelection every time a button 
is clicked. (you can keep the console.logs for this step)
*/
    
const container = document.querySelector('#container');
function computerPlay()
{
    let choices = ['rock', 'paper', 'scissor'];
    choices = choices[Math.floor(Math.random()*choices.length)];
    return choices;

}
function playRound(playerSelection,computerSelection)
{   
    let winner ='';
    const pContent = document.createElement('p');
    const pContent2 = document.createElement('p');
    const pContent3 = document.createElement('p');
    //WINS
    if((computerSelection.toLowerCase() == 'paper' && playerSelection.toLowerCase() == 'scissor')||
    (computerSelection.toLowerCase() == 'rock' && playerSelection.toLowerCase() == 'paper')||
    (computerSelection.toLowerCase() == 'scissor' && playerSelection.toLowerCase() == 'rock'))
    {
        playerwin++;
        winner = playerSelection + " "+ computerSelection + " " + "You Win!";
        
        pContent.textContent = winner;
        pContent.style.color = 'red';
        container.appendChild(pContent);
        pContent2.textContent = 'Player Wins # ' +playerwin + ' Computer Wins # ' + computerwin;
        pContent2.style.color = 'Blue';
        container.appendChild(pContent2);
        
        if(playerwin >= 5)
        {
        pContent3.textContent = 'Player wins the set';
        pContent3.style.color = 'Orange';
        container.appendChild(pContent3);
        computerwin = 0;
        playerwin = 0;
        }
        
    }
    //Draw
    else if(computerSelection.toLowerCase() == playerSelection.toLowerCase())
    {
        winner = playerSelection + " "+ computerSelection + " " +"No Winner It's a Draw";
        pContent.textContent = winner;
        pContent.style.color = 'red';
        container.appendChild(pContent);
        
    }
    // Anything else is a loss
    else{
        computerwin++;
        winner = playerSelection + " "+ computerSelection + " " +'You Lose!'
        pContent.textContent = winner;
        pContent.style.color = 'red';
        container.appendChild(pContent);
        pContent2.textContent = 'Player Wins # ' +playerwin + ' Computer Wins # ' + computerwin;
        pContent2.style.color = 'Blue';
        container.appendChild(pContent2);
        
        if(computerwin >= 5)
        {   pContent3.textContent = 'Computer wins the set';
            pContent3.style.color = 'Orange';
            container.appendChild(pContent3);
            computerwin = 0;
            playerwin = 0;
            
        }
        
    }
        
}
function game()
{   playerwin =0;
    computerwin =0;
    
        //Button Stuff
  // buttons is a node list. It looks and acts much like an array.
  const buttons = document.querySelectorAll('button');

  // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {
  
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        const ComputerSelection = computerPlay();
        if (button.id == 'rock_btn')
        {
            playerSelection = 'rock';
        }
        else if (button.id == 'paper_btn')
        {
            playerSelection = 'paper';
        }
        else if (button.id == 'scissor_btn')
        {
            playerSelection = 'Scissors';
        }
        playRound(playerSelection,ComputerSelection);
    });
  });
  
    
    
}

    
    
    
    
    

game();
