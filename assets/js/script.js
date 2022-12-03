let me;
let myScore = 0;
let computer;
let computerScore = 0;

let choices = ["rock", "paper", "scissors"];

// Populate 3 choices 
window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // create <img> tag
        // <img id ="rock" scr="rock.png"
        let choice = document.createElement("img");
        choice.id = choices[i];
        choices.scr = choices[i] + ".png";
        document.getElementById("choices").append(choice);
    }

}