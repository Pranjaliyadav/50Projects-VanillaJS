const panels = document.querySelectorAll('.panel')
//get anything id class with querySelector but i'll only select the frst one so using querySelectorAll and all get selected and then put into nodelist just like array

//console.log(panels);

//forEach takes functions as arguements too
panels.forEach((panel) => {
    //add event listener for clicks
    panel.addEventListener('click',() =>{
        removeActiveClasses();
        panel.classList.add('active')
        //can access classes through classList
    })
})

function removeActiveClasses(){
    
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}