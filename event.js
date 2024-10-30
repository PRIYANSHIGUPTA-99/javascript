let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("button was clicked");
//     let a=0;
//     a++;
//     console.log(a);
// }
// let box=document.querySelector("div");
// box.onmouseover=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }
// let btn2=document.querySelector("#btn2");
// btn2.ondblclick=(e)=>{
//     console.log(e);
// }

// eventlistner
// btn1.addEventListener("click",()=>{
//     console.log("button one was clicked");
// });
// btn1.addEventListener("click",(evt)=>{
//     console.log("hello");
//     console.log(evt);
//     console.log(evt.type);
// });
// let handler=()=>{
//     console.log("button one was clicked -handler 1");
// };
// btn1.addEventListener("click",handler);

// //remove event listner 
// btn1.removeEventListener("click",handler);

//practice problem toggle button
let modebutton=document.querySelector("#toggle");
let body=document.querySelector("body")
let currmode="light";
modebutton.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
else{
    currmode="light";
    // body.classList.add("light");
    //body.classList.remove("dark");
    document.querySelector("body").style.backgroundColor="white";
}

console.log(currmode);

});