const stars = document.querySelectorAll(".star");
let rating = document.querySelector(".rating")

let count = null;
const show = (count)=>{
    rating.innerHTML = `Your rating is ${count}.`
}

stars.forEach((star) =>{

    star.addEventListener("click" , ()=>{
        if (star.classList.contains("rate")){
            star.classList.remove("rate");
            count -= 1;
            show(count);

        }else{
            star.classList.add("rate"); 
            count += 1;
            show(count);
        }
        
    })
})