const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive  = 1;

next.addEventListener('click', ()=>{
    currentActive++;
    //console.log(currentActive);

    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    //console.log(currentActive);
   update()
})

prev.addEventListener('click', ()=>{
    currentActive--;
    //console.log(currentActive);

    if(currentActive < 1){
        currentActive = 1;
    }
    
    update()
   
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    //console.log(actives.length,circles.length)

    progress.style.width = (actives.length - 1)/(circles.length - 1) * 100 + '%'
//as its divided in 3 parts.so frst we get 1/3 then 2/3 then 3/3 and so its basically fed bak to css as percentge 
    if(currentActive === 1){
        prev.disabled = true;
        next.disabled = false;
    }
    else if(currentActive === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        prev.disabled = false;
    }

}