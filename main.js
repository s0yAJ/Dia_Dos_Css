const menu = document.querySelector(".menu");

let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");

menu.addEventListener('click', ()=>{
    line1.classList.toggle("top");
    line2.classList.toggle("centro");
    line3.classList.toggle("buttom");
})