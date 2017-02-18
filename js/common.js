"use strict";

let _id = (id) => document.getElementById(id);

const canvasField = _id("canvas");
const blindRigth = _id("blindRigth");
const blindLeft = _id("blindLeft");
const blindLogo = _id("blindLogo");
const tryField = _id("tryField");

document.addEventListener("DOMContentLoaded", () => {

    tryField.addEventListener("click", gameCanvasAnimate);

});

let gameCanvasAnimate = () => {    
    blindLeft.style.left = "-50%"
    blindRigth.style.right = "-50%";
    blindLogo.classList.add("bind-logo-animate");
    tryField.classList.remove("try-wrapper-animation", "hover");
    tryField.classList.add("try-animation");
    setTimeout(() => {canvasField.classList.add("canvas")}, 400);    
    document.removeEventListener("click", gameCanvasAnimate);
};




