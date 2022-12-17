const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
    load++;

    if(load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //opacity goes ffrom 0 to 1 only
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;


    // console.log(load)
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

//load = num, no. going from 0 to 100 but we decreasing the blurriness so we start with 1 opacity and ends at 0 hence out_min 1 out_max 0
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }