let me;
let myScore = 0;
let computer;
let computerScore = 0;
let tieScore = 0;

let choices = ["rock", "paper", "scissors"];

// Populate 3 choices 
window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // create <img> tag
        // <img id ="rock" scr="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }

};

// My choice of rock, papter, scissors
function selectChoice() {
    me = this.id;
    document.getElementById("my-choice").src = me + ".png";

    // random choices for computer
    // from array ["rock", "paper", "scissors"], 
    // Math.random gives random number between 0 - 0.9999(not including [1]) * 3 = 0 - 2.9999(with Math.floor gets rid of decimal)
    computer = choices[Math.floor(Math.random() * 3)]; 
    document.getElementById("computer-choice").src = computer + ".png";

    // chcecking for winner
    // when the result is tie : no scores for both
    if (me == computer) {
        //alert("The result is tie!");
        tieScore += 1;
        //myScore += 1;
        //computerScore += 1;
    }
    else {
        if (me == "rock") {
            if (computer == "scissors") {
                
                //alert("I Win!"); 
                myScore += 1; 

            }
            else if (computer == "paper") {  
                //alert("Computer Wins!");
                computerScore += 1;
            }
        }
        else if (me == "paper") {
            if (computer == "rock") {
                //alert("I Win!");
                myScore += 1;
            }
            else if (computer == "scissors") {
                //alert("Computer Wins!");
                computerScore += 1;
            }
        }
        else if (me == "scissors") {
            if (computer == "paper") {
                //alert("I Win!");
                myScore += 1;
            }
            else if (computer == "rock") {
                //alert("Computer Wins!");
                computerScore += 1;
            }
        // 5 times winning and scores are back to 0 and a new game starts!
        } if (myScore >= 5) {
            alert("I won the game! Start a new match!!");
            window.location.reload();
            
        } else if (computerScore >= 5) {
            alert("The computer won! Start a new match!!");
            window.location.reload();
        } 
   
    // update scroes
    document.getElementById("my-score").innerText = myScore;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("tie-score").innerText = tieScore;
}
// Afterh 5 winnings, both scores are back to 0, click 'REPLAY" for refresh the match from beginning.
function game() {
    for (i = 1; myScore < 5 && computerScore < 5; i++) {
        round();
    }
document.getElementById("my-score").innerText = 0;
document.getElementById("computer-score").innerText= 0;
document.getElementById("tie-score").innerText = 0;
}

game();

// Reset the game -- regardless who is winning, the game can be rest and starts from both score 0s. 
function reset() {
    document.getElementById("my-score").innerText = 0;
    document.getElementById("computer-score").innerText= 0;
    document.getElementById("tie-score").innerText = 0;
}
}
