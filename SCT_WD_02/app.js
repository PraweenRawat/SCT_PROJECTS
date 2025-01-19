var ms = 0, s = 0, m = 0, h = 0
var timer;

var display = document.querySelector(".timer-display");
var laps = document.querySelector(".laps");


// START FXN BEGINS THE STOP-WATCH BY SETTING AN INTERVAL 
function start(){
    if(!timer){
        timer = setInterval(run, 10)
    }
}

function run(){
    display.innerHTML = getTimer()
    ms++              
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
    
    if(h == 13){
        h = 1
    } 
}

function getTimer(){
    return (h<10 ? "0" + h: h) + " : " + (m<10 ? "0" + m : m) + " : " + (s<10 ? "0" + s : s) + " : " + (ms<10 ? "0" + ms : ms); 
}

// TO PAUSE THE TIMER
function pause(){
    stopTimer()  
}

function stopTimer(){
    clearInterval(timer)
    timer = false 
}

// TO RESE5T THE STOP-WATCH
function reset(){
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    display.innerHTML = getTimer()
}

// TO RESTART THE STOP WATCH
function restart(){
    if(timer){ 
        reset()
        start()
    }
    
}

//  TO TAKE THE SS OF CURRENT TIME 
function lap() {
    if(timer) {   
        var Li = document.createElement("li")   
        Li.innerHTML = getTimer() 
        laps.appendChild(Li) 
    }
}

// TO RESET THE LAP 
function resetLap(){
    laps.innerHTML = ""
}
