const imageWraper = document.querySelector(".images-wraper");
const loadMoreImages = document.querySelector(".load-more-images");

let count = 1;

function fetchRandomImages(getCount){
    for(let i =  getCount; i <= getCount + 4; i++){
        let imagElement = document.createElement("img");
        imagElement.src =   `https://picsum.photos/300?random=${i}`
        imageWraper.appendChild(imagElement);

    }
}

fetchRandomImages(count);
loadMoreImages.addEventListener("click", ()=>{
    fetchRandomImages(count+=5);
})