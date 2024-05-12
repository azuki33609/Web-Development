const stopwatchTag = document.getElementsByClassName("stopwatch")[0];

const startbtnTag = document.getElementsByClassName("startbtn")[0];
const pausebtnTag = document.getElementsByClassName("pausebtn")[0];
const continuesbtnTag = document.getElementsByClassName("continuesbtn")[0];
const restetbtnTag = document.getElementsByClassName("restetbtn")[0];

let second = 0;
let minutes = 0;
let hour = 0;

const startTime = () =>{
    second += 1;
    if(second === 60){
        second = 0;
        minutes += 1;
        if(minutes === 60){
            minutes = 0;
            hour += 1;
        }
    }

    const secondtext = second < 10 ?  "0" + second.toString() : second;
    const minutestext = minutes < 10 ?  "0" + minutes.toString() : minutes;
    const hourtext = hour < 10 ?  "0" + hour.toString() : hour;
    stopwatchTag.textContent = hourtext + ":" + minutestext + ":" + secondtext;
}

let intervalid;
startbtnTag.addEventListener("click", ()=>{
   intervalid = setInterval(startTime, 1000);
});

pausebtnTag.addEventListener("click", () =>{
    clearInterval(intervalid);
});

continuesbtnTag.addEventListener("click", ()=>{
    clearInterval(intervalid);
    intervalid = setInterval(startTime , 1000);

});

restetbtnTag.addEventListener("click", ()=>{
    clearInterval(intervalid);
    second = 0 , minutes = 0; hour = 0;
    intervalid = setInterval(startTime , 1000);
});
