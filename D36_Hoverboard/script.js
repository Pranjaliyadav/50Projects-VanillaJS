const container = document.getElementById('container')
const colors = ["#FF5733", // Vivid Orange
    "#66FFFF", // Turquoise Blue
    "#FF33FF", // Electric Pink
    "#66FF66", // Lime Green
    "#FFD700", // Gold
    "#9933FF", // Purple
    "#FF6347", // Tomato Red
    "#00FF7F", // Spring Green
    "#FF4500", // Orange Red
    "#4B0082"  // Indigo
]

const SQUARES = 500 //constant in capitals

for(let i = 0 ;i < SQUARES;i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>setColor(square))
    square.addEventListener('mouseout',()=>{removeColor(square)})
    container.appendChild(square)

}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}


function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}