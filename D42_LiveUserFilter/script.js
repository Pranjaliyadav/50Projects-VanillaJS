const result = document.getElementById('result')
const filter = document.getElementById('filter')

const listItems = []
filter.addEventListener('input', (e)=> filterData(e.target.value))
getData()
filter.addEventListener()
async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50')
    const {results} = await res.json()
    result.innerHTML = ''
    results.forEach(element => {
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
        <img src = "${element.picture.large}" alt = "${element.name.first}">
        <div class="user-info">
        <h4>${element.name.first} ${element.name.last}</h4>
        <p>${element.location.city}, ${element.location.country}</p>
        </div>
        `
        result.appendChild(li)
    });
}

function filterData(searchItem){
    listItems.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
            item.classList.remove('hide')
        }
        else{
            item.classList.add('hide')
        }
    })
}