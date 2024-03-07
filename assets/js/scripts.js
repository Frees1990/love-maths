// Wait for the DOM to finish landing before running the game
// Get the button elements and add event listeners to them

document.addEvenetListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert('You clicked ${gameType}');
            }
        });
    }
});

/**
 * The main game "loop", called when the scripts is first loaded
 * and after the user's amswer has been processed. 
 */

function runGame(){
    // Creates two randome numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 + 1);
    let num2 = Math.floor(Math.random() * 25 + 1);

}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}
function displayDivisionQuestion(){

}