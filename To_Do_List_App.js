const inputBox = document.getElementById("input-box");
const listcontainter = document.getElementById("list-containter");

function AddTask(){
    if(inputBox.value === ""){
        alert("Your must wirte something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainter.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }

    inputBox.value = "";
    saveData();
}



listcontainter.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData (){
    localStorage.setItem("data", listcontainter.innerHTML);
}

function showTask(){
    listcontainter.innerHTML = localStorage.getItem("data");
}

showTask();

