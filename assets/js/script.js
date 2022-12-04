let me;
let myScore = 0;
let computer;
let computerScore = 0;
let tie;
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

}
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
        //alert("The result is tie!")
        tieScore += 1;
        //myScore += 1;
        //computerScore += 1;
    }
    else {
        if (me == "rock") {
            if (computer == "scissors") {
                myScore += 1;
                //alert("I Win!");  
            }
            else if (computer == "paper") {
                computerScore += 1;
                //alert("Computer Wins!")
            }
        }
        else if (me == "paper") {
            if (computer == "rock") {
                myScore += 1;
                //alert("I Win!")
            }
            else if (computer == "scissors") {
                computerScore += 1;
                //alert("Computer Wins!")
            }
        }
        else if (me == "scissors") {
            if (computer == "paper") {
                myScore += 1;
                //alert("I Win!")
            }
            else if (computer == "rock") {
                //alert("Computer Wins!")
                computerScore += 1;
            }
        }
    }
   
    // update scroes
    document.getElementById("my-score").innerText = myScore;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("tie-score").innerText = tieScore;
}
let = reset;

function reset() {
    document.getElementById("my-score").innerText = 0;
    document.getElementById("computer-score").innerText= 0;
    document.getElementById("tie-score").innerText = 0;
}
