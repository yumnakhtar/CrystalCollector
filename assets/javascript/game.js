//allow html to run, then proceed with js
$(document).ready(function() {

    //crystals 1-4 (1-12) need to be buttons, values not shown
    var crystal1 = Math.floor((Math.random() * 12) + 1);
    var crystal2 = Math.floor((Math.random() * 12) + 1);
    var crystal3 = Math.floor((Math.random() * 12) + 1);
    var crystal4 = Math.floor((Math.random() * 12) + 1);
    //randomly generated number that displays
    var randomNum = Math.floor((Math.random() * 120) + 19);
    var userGuess = 0;
    var win = 0;
    var loses = 0;

    //show random num, and 4 crystal values in console.
    console.log("Random number: " + randomNum);
    console.log("Crystal 1: " + crystal1);
    console.log("Crystal 2: " + crystal2);
    console.log("Crystal 3: " + crystal3);
    console.log("Crystal 4: " + crystal4);


//////////how do i give crystals a rndom value here and portray it to html. how do I connect random to button???///////////////////////////

    function compare(){
        //compare userGUess to randomNum
        if (userGuess === randomNum){
            win++;
            console.log("wins: " + wins);
            alert("You won!")
        }
        if (userGuess >= randomNum){
            loses++;
            console.log("loses: " + loses);
            alert("You lost!");
        }
}
    //reads the buttons being clicked
    $("#c1").on("click", function(){
        //catch value of the certain crystal
        //add crystal value to userGuess
        //print user guess onto DOM
        $("#c1").val(crystal1);
        alert("the value of this is: " + crystal1);
        userGUess+=;
    });
    $("#c2").on("click", function(){
        //catch value of the certain crystal
        //add crystal value to userGuess
        //print user guess onto DOM
        $("#c1").val(crystal2);
        alert("the value of this is: " + crystal2);
        userGUess+=;
    });
    $("#c3").on("click", function(){
        //catch value of the certain crystal
        //add crystal value to userGuess
        //print user guess onto DOM
        $("#c1").val(crystal3);
        alert("the value of this is: " + crystal3);
        userGUess+=;
    });
    $("#c4").on("click", function(){
        //catch value of the certain crystal
        //add crystal value to userGuess
        //print user guess onto DOM
        $("#c1").val(crystal4);
        alert("the value of this is: " + crystal4);
        userGUess+=;
    });




});