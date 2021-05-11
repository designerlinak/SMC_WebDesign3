const canvas = document.getElementById('myGame');
const ctx = canvas.getContext('2d');
const control = document.querySelector('.control');


let cWidth = canvas.width;
let cHeight = canvas.height;

let cPosX = cWidth/2; //horizontal center
let cPosY = cHeight/2; //vertical center

let cVelX = 2;
let cVelY = 1;

let cRadius = 50;

let score = 0;

let colorVal = 'yellow';

let colors = ['tan', 'lightcoral', 'palevioletred', 'orange', 'violet'];



function drawFrame (){
    ctx.clearRect(0, 0, cWidth, cHeight);

    ctx.fillStyle = colorVal;

    ctx.beginPath();
    ctx.arc(cPosX, cPosY, cRadius, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();


    if(cPosX + cRadius >= cWidth || cPosX - cRadius <= 0) {
        cVelX = cVelX * -1; //reverse the horizontal direction
    }

    if(cPosY + cRadius >= cHeight || cPosY - cRadius <= 0) {
        cVelY = cVelY * -1;
    }

    cPosX = cPosX + cVelX; //change position by velocity
    cPosY = cPosY + cVelY;

    window.requestAnimationFrame(drawFrame);
}

function drawScore() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.font = '25px Arial, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Score: ' + score, 60, 40);
    ctx.closePath();

    window.requestAnimationFrame(drawScore);
}

function setColor(event) {
    colorVal = event.target.getAttribute('data-color');
}


drawFrame();
drawScore();


canvas.addEventListener('click', function(event){
    console.log(event);
    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;
    console.log("Mouse X: " + mouseXp + "Mouse Y:" + mouseYp);

    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);

    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let canvasColor = document.querySelector('canvas');

    if(distX < cRadius && distY < cRadius){
        console.log("HIT!");
        cVelX = cVelX * 1.5;
        cVelY = cVelY * 1.5;
        canvasColor.style.backgroundColor = randomColor;
        score++
    }
})

control.addEventListener('click', setColor);