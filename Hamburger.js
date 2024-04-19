const hamburgermenuTag = document.querySelector(".hamburgermenu");

const hamburgerline1Tag = document.querySelector(".line1");
const hamburgerline2Tag = document.querySelector(".line2");
const hamburgerline3Tag = document.querySelector(".line3");
const overlaymenuTag = document.querySelector(".overlaymenu");
const liTag = document.getElementsByTagName("li");

hamburgermenuTag.addEventListener("click", ()=>{
    if(hamburgermenuTag.classList.contains("isopen")){
        hamburgerline2Tag.classList.remove("hideLine2");
        overlaymenuTag.classList.remove("showoverlaymenu");
        hamburgerline1Tag.classList.remove("plus45deg");
        hamburgerline3Tag.classList.remove("minus45deg");
        hamburgermenuTag.classList.remove("isopen");
        for(let i = 0; i < liTag.length; i++){
        liTag.classList.remove("liTagMoveUp");
        }

    }else{
    overlaymenuTag.classList.add("showoverlaymenu");
    hamburgerline2Tag.classList.add("hideLine2");
    hamburgerline1Tag.classList.add("plus45deg");
    hamburgerline3Tag.classList.add("minus45deg");
    hamburgermenuTag.classList.add("isopen");
    for(let i = 0; i < liTag.length; i++){
        liTag.classList.add("liTagMoveUp");
    }
    }
});
