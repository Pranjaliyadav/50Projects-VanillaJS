const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("litres");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highLightCups(idx));
});

function highLightCups(idx) {
  //toggling filled cups if clicked on again. checking if current one is filled and making sure next one is not filled, then we just remove the full from current one
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    //check till idx, and fill them all
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length

//console.log(fullcups)

const totalCups = smallCups.length
//hide percentage if no full cups
if(fullCups === 0){
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
}
else{
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
}

if(fullCups === totalCups){
    remained.style.visibility = 'hidden'
    remained.style.height = 0
}
else{
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250*fullCups/1000)}L`
}
}