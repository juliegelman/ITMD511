//variables to hold incremental numbers
let secs = 0;
let mins = 0;


//variables to hold numbers to display
let showSecs = 0;
let showMins = 0;
let showTimer = null;

//variable to keep track of timer status (going, stopped)
let timerStatus = "stop"

//timer function to allow users to start and stop timer
function timer(){
    secs++;

    //increment minutes at 60 seconds
    if(seconds / 60 === 1){
       
        minutes++;

    }
    showSecs=secs;
    showMins=mins;
    document.getElementById("display").innerHTML = displayMinutes + ":" + displaySeconds;


}