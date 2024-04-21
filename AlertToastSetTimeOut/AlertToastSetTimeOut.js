const btnTag = document.querySelector(".btn");

const ToastAlertTag = document.querySelector(".ToastAlert");



const AlertToast = () =>{
    ToastAlertTag.innerHTML = "";
    const toastAlert = document.createElement("div");
    toastAlert.append("Your Video Is Update Success");
    toastAlert.classList.add("ToastAlertFont");
    ToastAlertTag.append(toastAlert);
    toastAlert.style.bottom = `-${toastAlert.offsetHeight}px`;
    setTimeout(()=>{
    toastAlert.style.bottom =  `0px`;
   },100);

   setTimeout(()=>{
    toastAlert.style.bottom = `-${toastAlert.offsetHeight}px`;
   },2000);
};

btnTag.addEventListener("click", ()=>{
    AlertToast();

});
