let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let messcontainer= document.querySelector(".messcontainer");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn");

let turnO=true;
const winpatterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetgame= ()=>{
    turnO=true;
    enablebtn();
    messcontainer.classList.add("hide");
};

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
    console.log("clicked");
   if(turnO === true){
    box.innerText="O";
    turnO=false;
   }
   else{
    box.innerText="X";
    turnO=true;
   }
   box.disabled=true;
   checkwinner();
    });
    
});
const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText= `Congratulations,Winner is ${winner}`;
    messcontainer.classList.remove("hide");
    disablebtn();
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if( pos1 != ""&& pos2 !="" && pos3 != ""){
            if(pos1=== pos2 && pos2 ===  pos3){
                // console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);