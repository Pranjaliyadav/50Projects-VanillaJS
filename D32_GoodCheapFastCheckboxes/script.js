const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')

const cheap = document.querySelector('#cheap')

const fast = document.querySelector('#fast')

toggles.forEach(toggles=> toggles.addEventListener('change', (e)=> doTheTrick(e.target)))

function doTheTrick(theClickedOne){
    if(good.checked && fast.checked && cheap.checked){
        if(good === theClickedOne){
            fast.checked = false
        }

        if(cheap === theClickedOne){
            good.checked = false
        }

        if(fast === theClickedOne){
            cheap.checked = false
        }
    }
}
