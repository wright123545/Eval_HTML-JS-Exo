let title = document.getElementById("sigma"); 
let body = document.body;
let divs = document.querySelectorAll("div");
title.addEventListener("click", function() {
    body.classList.toggle("lightmode")
    divs.classList.toggle("lightmode")
    console.log("élément cliqué");
});



let bmp5 = document.getElementById("BMP5")

let mp5 = document.getElementById("arme2")

let button1911 = document.getElementById("button1911")

let zbeub = document.getElementById("arme3")

let Beder22 = document.getElementById("butonio")

let eder22 = document.getElementById("arme1")


    Beder22.addEventListener("click", function(){
    eder22.classList.add("active")
    mp5.classList.remove("active")
    zbeub.classList.remove("active")
    
});
    bmp5.addEventListener("click", function(){
    mp5.classList.add("active")
    eder22.classList.remove("active")
    zbeub.classList.remove("active")
});
button1911.addEventListener("click", function () {
    zbeub.classList.add("active");
    mp5.classList.remove("active");
    eder22.classList.remove("active");
});

