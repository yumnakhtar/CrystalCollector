//allow html to run, then proceed with js
$(document).ready(function() {

    var randomNum, donut1, donut2, donut3, donut4;
    var userGuess = 0;
    var win = 0;
    var loses = 0;

    $(".win").text("0")
    $(".loss").text("0")

    numGenerater = function() {
        //requested number of sprinkles (19-120)
        randomNum = Math.floor((Math.random() * 120) + 19);
        //donuts 1-4 (values of 1-12)
        donut1 = Math.floor((Math.random() * 12) + 1);
        donut2 = Math.floor((Math.random() * 12) + 1);
        donut3 = Math.floor((Math.random() * 12) + 1);
        donut4 = Math.floor((Math.random() * 12) + 1);
        $(".requested").text(randomNum);
        $(".added").text("0")
        userGuess = 0;
    }

    //compare userGuess to randomNum
    function compare(){
        if (userGuess === randomNum){
            win++;
            $(".win").text(win)
            $(".instructions").text("You're doing great! You got exactly " + randomNum + " sprinkles! Carry on sprinkling..")
            numGenerater()
        }
        else if (userGuess >= randomNum){
            loses++;
            $(".loss").text(loses)
            $(".instructions").text("D'oh! You put too many sprinkles! Your hosts wanted " + randomNum + " and you gave them " + userGuess + ".. But they wanna give you another chance! Keep sprinkling to see if you can get it this time!")
            numGenerater()
        }
        else {
            return;
        } 
    }

    //donut 1 click
    $("#c1").on("click", function(){
        userGuess += donut1;
        $(".added").text(userGuess)
        compare();
    });

    //donut 2 click
    $("#c2").on("click", function(){
        userGuess+= donut2;
        $(".added").text(userGuess)
        compare();
    });

    //donut 3 click
    $("#c3").on("click", function(){

        userGuess+= donut3;
        $(".added").text(userGuess)
        compare();
    });
    
    //donut 4 click
    $("#c4").on("click", function(){
        userGuess+= donut4;
        $(".added").text(userGuess)
        compare();
    });

    numGenerater();
});