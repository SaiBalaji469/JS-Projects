const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const div = document.querySelector("div");

btn.addEventListener("click", function(){
    let randomColor = generateColor();
    h1.innerHTML = randomColor;
    div.style.backgroundColor = randomColor;

});
function generateColor(){
    let red = Math.floor(Math.random()* 255 );
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);

    let color = `rgb(${red} ${green} ${blue})`;
    return color;
}