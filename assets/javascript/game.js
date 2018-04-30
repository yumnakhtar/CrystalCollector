$(document).ready(function() {

//create variable in html. rest is in js
    //crystals 1-4 (1-12) need to be buttons
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    // generating num (1-12)->  Math.floor((Math.random() * 12) + 1);
    //randomly generated number (19-120)
    var randomNum = Math.floor((Math.random() * 12) + 1);
    // generating num(19-120)-> var x = Math.floor((Math.random() * 120) + 19);
    //players guess
    var userGuess = 0;
    //wins
    var win = 0;
    //loses
    var loses = 0;
//add on click for each crystal
//add that value to players guess
    //continuously compare users guess to computer generated number
    //if equal, win increment
    //if user guess is greater, losses increment

    console.log("Random number: " + randomNum);

    $("button").on("click", function () {

    });






});