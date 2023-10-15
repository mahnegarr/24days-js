const inCartBtn = document.querySelectorAll(".add-btn");
const checkIcon = document.querySelector(".check-icon")

inCartBtn.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        btn.innerHTML ="In Cart";
        checkIcon.style.display ="block"
       
    })
})

