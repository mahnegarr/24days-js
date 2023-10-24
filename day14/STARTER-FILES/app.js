const allDay = document.querySelectorAll("day");


allDay.forEach(d=>{
    d.addEventListener("click",()=>{
        d.classList.add("today")
    })
})