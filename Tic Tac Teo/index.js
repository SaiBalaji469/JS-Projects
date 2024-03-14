let boxes = document.querySelectorAll(".box");
let resetButton = document.getElementById("reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true; //playerX, playerO

const winPaterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetgame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
};

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("Button Clicked")
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true; 
        }
        box.disabled = true;
        checkWinner();
    })
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
   
};

const showWinner = (winner)=>{
    msg.textContent = `Congratulations !! winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPaterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

newgameBtn.addEventListener("click", resetgame);
resetButton.addEventListener("click", resetgame);