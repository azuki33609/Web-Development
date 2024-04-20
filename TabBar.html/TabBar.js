const ulTag = document.querySelector("ul");

const sliderTag = document.querySelector(".slider");

const HomeTag = document.querySelector(".Home");
const CategoryTag = document.querySelector(".Category");
const FavoriateTag = document.querySelector(".Favoriate");
const SettingTag = document.querySelector(".Setting");


const tabs = ["Home", "Category", "Favoriate", "Setting"];


const handleTabChange = (event) =>{
    const clickTagid = event.target.id;
    const ckickLiTag = document.getElementById(clickTagid);
    const clickLiTagwidth = ckickLiTag.offsetWidth;
   const clickLiTagofsetleft = ckickLiTag.offsetLeft;
   sliderTag.style.width = clickLiTagwidth + "px";
   sliderTag.style.transform = `translateX(${clickLiTagofsetleft}px)`

};

for(let i = 0; i < tabs.length; i++){
    const liTag =  document.createElement("li");
    liTag.append(tabs[i].toUpperCase());
    liTag.id = i;
    liTag.addEventListener("click", handleTabChange);
    ulTag.append(liTag);
    if(i === 0){
        sliderTag.style.width = liTag.offsetWidth + "px";
    }
    
}
