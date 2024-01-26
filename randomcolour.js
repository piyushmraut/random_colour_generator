
let btn = document.querySelector("button");

btn.addEventListener("click",function(){

let h3 = document.querySelector("h3");
let mycolor = setRandomColour();
h3.innerText = mycolor;


let mydiv = document.querySelector(".mydiv");
mydiv.style.backgroundColor = mycolor;


});

function setRandomColour(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let rgbcolour = `rgb(${red},${green},${blue})`;

    return rgbcolour;
}