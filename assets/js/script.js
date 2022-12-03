let me;
let myScore = 0;
let computer;
let computerScore = 0;

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

    // randome choices for computer
    computer = choices[Math.floor(Math.random() * 3)]; 
    document.getElementById("computer-choice").src = computer + ".png";
}