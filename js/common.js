"use strict";

const canvasField = _id("canvas");
const blindRigth = _id("blindRigth");
const blindLeft = _id("blindLeft");
const blindLogo = _id("blindLogo");
const tryField = _id("tryField");
const mainShapeOfCar = _id("car");

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
    canvas: canvasField,
    context: canvas.getContext("2d"),
    start: () => {
        canvas.width = 500;
        canvas.height = 400;
    }
}

function car() {
    let ctx = myGameArea.context;
    let svgCar = mainShapeOfCar.outerHTML;

    setTimeout(() => {
        drawInlineSVG(ctx, svgCar);
    }, 2200);
}


/*<summary>
    drawMySvgIntoCanvas
</summary>*/
function drawInlineSVG(ctx, rawSVG) {

    var svg = new Blob([rawSVG], {type:"image/svg+xml;charset=utf-8"}),
        domURL = self.URL || self.webkitURL || self,
        url = domURL.createObjectURL(svg),
        img = new Image;
    
    img.onload = function () {
        ctx.drawImage(this, 225, 325);
        domURL.revokeObjectURL(url);
    };
    
    img.src = url;
}


/*<summary>
    _id
</summary>*/
function _id(id) {
    return document.getElementById(id);
}