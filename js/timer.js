let hour, minute,second, step;
const round = document.getElementById("round");
const start = document.getElementById("start");
const paus = document.getElementById("paus");
const reset = document.getElementById("reset");

start.addEventListener("click", () => {
    document.getElementById('hour').innerHTML = document.getElementById('sethour').value;
    document.getElementById('minute').innerHTML = document.getElementById('setminute').value;
    document.getElementById('second').innerHTML = document.getElementById('setsecond').value;
    document.getElementById('settimisdiv').style.display = "none";
    document.getElementById('divi').style.display = "block";  
    let hour = document.getElementById('hour').innerHTML;
    let minute = document.getElementById('minute').innerHTML;
    let second = document.getElementById('second').innerHTML;
    let step = 1000;

    hour  *= 1;
    minute  *= 1;
    second  *= 1;
    
    
    intervalId = setInterval(() => {
        second -1 ;

        if (second > 0) {
            second -= 1;
        }
        else if (second == 0 && minute > 0) {
            minute -= 1;
            second = 60;
        }
        else if (second == 0 && minute == 0 && hour > 0) {
            hour-= 1;
            minute = 60;
        }
        else if (second == 0 && minute == 0 && hour == 0) {
            clearInterval(intervalId);
            document.getElementById('settimisdiv').style.display = "block";
            document.getElementById('divi').style.display = "none";
        }
        document.getElementById("second").innerHTML = second;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("hour").innerHTML = hour;
        document.getElementById("start").style.display = "none";
        document.getElementById("round").style.display = "block";
    }, step);
});

round.addEventListener("click", () => {
    let roundebi = document.createElement('rounds');
    roundebi.innerHTML = document.getElementById("timer").innerHTML;
    document.getElementById("rounds").appendChild(roundebi);
});

paus.addEventListener("click", () => {
    clearInterval(intervalId)
    document.getElementById("start").style.display = "block";
    document.getElementById("round").style.display = "none";
});

reset.addEventListener("click", () => {
    clearInterval(intervalId)
    document.getElementById('settimisdiv').style.display = "block";
    document.getElementById('divi').style.display = "none";
    document.getElementById("start").style.display = "block";
    document.getElementById("round").style.display = "none";
    document.getElementById("rounds").innerHTML = "";
});