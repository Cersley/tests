"use strict";

const canvasField = _id("canvas");
const blindRigth = _id("blindRigth");
const blindLeft = _id("blindLeft");
const blindLogo = _id("blindLogo");
const tryField = _id("tryField");
const mainCarShape = _id("car");

document.addEventListener("DOMContentLoaded", () => {

    tryField.addEventListener("click", gameCanvasAnimate);
    startGame();

});

let gameCanvasAnimate = () => {
    blindLeft.style.left = "-50%"
    blindRigth.style.right = "-50%";
    blindLogo.classList.add("bind-logo-animate");
    tryField.classList.remove("try-wrapper-animation", "hover");
    tryField.classList.add("try-animation");
    setTimeout(() => {
        canvasField.classList.add("canvas")
    }, 800);
    document.removeEventListener("click", gameCanvasAnimate);
}

let startGame = () => {
    let mainCar;
    myGameArea.start();
    mainCar = new car();
}

let myGameArea = {
    canvas: _id("canvas"),
    context: canvas.getContext("2d"),
    start: () => {
        canvas.width = 500;
        canvas.height = 400;
    }
}

function car() {
    this.x = canvas.width / 2;
    this.y = canvas.height;

    let ctx = myGameArea.context;
    let img = mainCarShape.
    ctx.drawImage(mainCarShape, this.x, this.y);
}




/*<summary>
    _id
</summary>*/
function _id(id) {
    return document.getElementById(id);
}