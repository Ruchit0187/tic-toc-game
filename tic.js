let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
let winners = document.querySelector(".win");


const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
const rese= () => {
    turnO = true;
    enable();
    winners.classList.add("hidden");
};
const enable = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = true;
    }
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        console.log("box clicked");
        if (turnO) {
            box.innerText = "O";
             box.style.color = "black";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for (let pattern of winpattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner");
                win(pos1val);
                dis();
            }
        }
    }
};
const win = (showwin) => {
    winners.innerText = `winter is ${showwin}`;
    winners.classList.remove("hidden");
};
const dis = () => {
    for (box of boxes) {
        box.disabled = true;
  }  
};

reset.addEventListener("click", rese);