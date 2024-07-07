// Store references to player's choice buttons
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

// Add event listeners to player's choice buttons
rockButton.addEventListener('click', function() { playRound('rock'); });
paperButton.addEventListener('click', function() { playRound('paper'); });
scissorsButton.addEventListener('click', function() { playRound('scissors'); });

function startGame() {
    document.getElementById('initialScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
}

function playRound(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const aiSelection = choices[Math.floor(Math.random() * choices.length)];

    // Determine the winner
    let result;
    if (playerSelection === aiSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && aiSelection === 'scissors') ||
        (playerSelection === 'paper' && aiSelection === 'rock') ||
        (playerSelection === 'scissors' && aiSelection === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "AI wins!";
    }

    document.getElementById('result').innerHTML = `You played: ${playerSelection}.<br>AI played: ${aiSelection}.<br>${result}`;
}

function goBack() {
    document.getElementById('result').innerText = "";
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('initialScreen').style.display = 'block';
}