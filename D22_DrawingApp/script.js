const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext("2d");
//this ctx is canvas screen 2d

let size = 10;
let isPressed = false;
let color = 'black'
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX; //exact point where we press
  y = e.offsetY;

//   console.log(isPressed, x, y);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
if(isPressed){
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2,y2) //we drawing circle on each impact but if we movve fast there will be spaces
    drawLine(x,y,x2,y2) // so using line for those spaces
    x = x2 //and then updating the starting or every line to where we left off so its continues.
    y=y2
}
});

function drawCircle(x, y) {
    //this way we draw circle-refer canvas documentation
  ctx.beginPath(); 
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  //move to, line to
  ctx.beginPath();
  ctx.moveTo(x1, y1); 
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size*2; // so the lines be same size as circles
  ctx.stroke();
}

// drawLine(300,300,300,500)
// drawCircle(100,200)

colorEl.addEventListener('change',(e)=>{
    color = e.target.value
})

function updateSizeOnScreen(){
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click',()=>{
    size += 5
    if(size > 50){
        size = 50
    }
    updateSizeOnScreen()
})

increaseBtn.addEventListener('click',()=>{
    size += 5
    if(size > 50){
        size = 50
    }
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click',()=>{
    size -= 5
    if(size < 5){
        size = 5
    }
    updateSizeOnScreen()
})

clearEl.addEventListener('click',()=> ctx.clearRect(0,0,canvas.width, canvas.height)) //now we just clear it off
