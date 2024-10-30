 console.log("Priyanshi Gupta"); 
 myname="priyanshi"
 
console.log(myname);
x=null;
u=undefined;
console.log(x,u);
isfollow=true;
islike=false;
console.log(islike);
myname=25;
console.log(myname);
let fullName="priyanshi";
fullName="pg"
console.log(fullName);

// to making objects
const student = {
    fullName:"Priyanshi Gupta",
    age:20,
    branch: "Electrical",
    rollNo:2302125,
    cgpa:9.8,
Ispass:true,

}
student["age"]=student["age"]+1;
console.log(student.age);
//arithmetic operators
a=5;
b=8;
console.log(a+b);
console.log("a**b=",a**b);
console.log("a=",a);
console.log("a++=", a++);
console.log("a=",a);
console.log("a--=", a--);
console.log("++a=", ++a);
console.log("--a=", --a);
// assignment operator

a+=5;
console.log(a);
a**=2;
console.log(a);
//conditional statements

let age=24;
if(age>18){
    console.log("can vote");
}
if(age<18){
    console.log("cannot vote");
}
let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
if(mode==="light"){
    color="white";
}
console.log(color);
//ternary operator
age=23;
age>=18?console.log("adult"):console.log("not adult");


// let name=prompt("enter a name");
// console.log(name);

// let num=prompt("enter a number");
// if(num%5==0){
//     console.log(num,"is multiple of 5");
// }else{
//     console.log(num,"is not multiple of 5");
// }

for(let count= 1;count<= 5;count++){
    console.log("hello");
}655
//for loop
let i,sum=0;
for(i=1;i<=5;i++){
    sum+=i;
}
console.log(sum);

//while loop
let p=1;
while(p<=6){
    let sum=1;
    
    p++;
    sum+=p;
}console.log(sum);

// for-of loop

//game

// let gameNo=25;
//  let k = prompt("guess game no.");

// while(k != gameNo){
//   k = prompt("your guess is wrong enter game no. again");
// }
//  console.log("congratulations!you enterd correct game no.");

//strings

let str="Priyanshi";
console.log("length is :",str.length);
console.log(str[0],str[5]);
//template literals
let specialstr=`this is a template literal`;
console.log(specialstr);

let obj={
    item:"pen",
    price:20,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of",obj.item,"is",obj.price,"rupees");

// let str = "  priyanshi";
// let str2 = "Gupta";
// console.log(str.slice(4,8));
// console.log(str.concat(str2));
// console.log(str+str2);
// console.log(str.replace("shi","ka"));
// console.log(str2.charAt(3))

//homework
// let username = prompt("Enter username");
// let str1 = username;
// let str2 = "@";
// console.log(str2.concat(str1)+str1.length);

// arrays
let marks=[98,90,76,94,92];
console.log(marks);
console.log(marks.length);
console.log(marks[3],marks[1]);

let stmarks=[85,97,44,37,76,60];
let sumofmarks=0;
for(let i =0;i<stmarks.length;i++){
    console.log(stmarks[i]);
    sumofmarks=sumofmarks+stmarks[i];
}
console.log(sumofmarks);
let avg=sumofmarks/stmarks.length;
console.log(`average is =${avg}`);

let items=["chips","apple","banana","lichi","potato"];
items.push("strawberry");
console.log(items);
let deleted =items.pop();
console.log(deleted);
console.log(items.toString());
let markitem=stmarks.concat(items);
console.log(markitem);
console.log(items.slice(2,4));
console.log(stmarks.splice(2,3,101,236,66));

function myFunction(){
    console .log("I am Priyanshi Gupta");
    console.log("I am learning JS");
}
myFunction();
myFunction();
function myFunctions(msg){
    console .log(msg);
    //console.log("I am learning JS");
}
myFunctions("I LOVE RAAZ");
// function sum(a,b){
//     s=a+b;
//     return s;
// }
// let val =sum(3,6);
// console .log(val);

//arrow functions
const arrowsum=(a,b)=> {
  console.log(a+b)  ;
};
//multiply arrow
const arrowmul=(a,b)=> {
    return a*b;
  };

  function countvowels(str){
    let count=0;
    for(const char of str){

        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
        
    }
    console.log(count);
  }
//   countvowels("PRIYANSHI");

//forEach function
let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val*val);
})
//map method
let array=[1,2,3,4,5];
let newarray=array.map((val)=>{
    return val;
});
console.log(newarray);

//filter
let array1=[12,25,39,42,53];
let newarray1=array1.filter((val)=>{
    return val%2===0;
});
console.log(newarray1);

//reduce
let ar=[1,3,5,8];
const result=ar.reduce((res,current)=>{
    return res+current;
});
console.log(result);
//to find maximum using reduce
let ar1=[1,3,5,8];
const result1=ar1.reduce((res,current)=>{
    return res>current? res:current;
});
console.log(result1);

//practice

let mark1=[12,95,99,82,93];
let newmark1=mark1.filter((val)=>{
    return val>90;
});
console.log(newmark1);

alert("hello!");
let head=document.getElementById("heading")
console.dir(head);
let para=document.getElementsByTagName("p");
console.dir(para);

let heading=document.querySelector("H2");
heading.innerText=heading.innerText + "from apna college";
console.dir(heading.innerText);

let div= document.querySelector("div");
console.log(div);
let id= div.getAttribute("id");
console.log(id);
let cls= div.getAttribute("class");
console.log(cls);

// let newdiv=document.querySelector("div");
// console.log(par.setattribute("id","newpara"));

let div1=document.querySelector("div");
div.style.backgroundColor="pink";
div.innerText="hello"

let button=document.createElement("button");
button.innerText="click me";
button.style.backgroundColor="red";
button.style.color="white";


console.log(button);
let bdy=document.querySelector("body");
bdy.prepend(button);
// div.append(button);
// body.prepend(button);
// div.before(button);

// dv.remove();
let paragraph=document.querySelector("p");
paragraph.classList.add("newclass");