let courses = document.querySelector(".nav-item2");
let option = document.querySelector(".option");

courses.addEventListener("mouseover", ()=>{
    option.classList.toggle("hide");
});

document.addEventListener("click", (e)=>{
    option.classList.remove("hide");
})