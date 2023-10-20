const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

closeBtn.addEventListener("click",(e)=>{
    console.log(e.target);
})

overlay.addEventListener("click",()=>{
    document.querySelector('.modal').style.display = 'none';
    overlay.style.display = "none"
})