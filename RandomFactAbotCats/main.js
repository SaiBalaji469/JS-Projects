let btn = document.querySelector("button");


btn.addEventListener("click", async ()=>{
    let fact = await getFact();
    console.log(fact)
    let para = document.createElement("p");
    para.innerHTML = fact;
    btn.insertAdjacentElement("afterend", para)
});
let url = "https://catfact.ninja/fact";

async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e){
        console.log("Error is - ", e);
        return "Nothing to show !!"
    }
};