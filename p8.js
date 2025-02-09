let [seconds,minutes,hours,miliseconds] = [0,0,0,0];
let displaytime = document.getElementById("clock");
let timer = null;

function stopwatch(){
      miliseconds++;
      if(miliseconds==100){
        miliseconds=0;
        seconds++;
        if(seconds==60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
         }
        }
        let h = hours<10 ? "0"+hours:hours;
        let m = minutes<10 ? "0"+minutes:minutes;
        let s = seconds<10 ? "0"+seconds:seconds;
        let ms = miliseconds<10 ? "0"+miliseconds:miliseconds;
         const string = `${h}:${m}:${s}:${ms}`;

         displaytime.textContent = string ;
    // displaytime.innerHTML = hours +":"+minutes +":"+seconds;
    
}

function start(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,10);
}
function stop(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    [seconds,minutes,hours,miliseconds] = [0,0,0,0];
    displaytime.textContent = "00:00:00:00" ;
}
