const addBtn = document.getElementById('add')

const notesFetched = JSON.parse(localStorage.getItem('notes'))

if(notesFetched){
    notesFetched.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', (e) => { addNewNote() })

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML =
        `<div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class = ${text ? "hidden" : ""}></textarea>`


    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text //textvaue has a value prop so we just edit that
    main.innerHTML = `<span>${text}</span>` //whereas main is a div, so we edit its innerHTML


    deleteBtn.addEventListener('click', (e) => {note.remove()
    updateLS()}
    )


    editBtn.addEventListener('click', (e) => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    }
    )

    textArea.addEventListener('input', (e)=>{
        const {value} = e.target

        main.innerHTML = `<span>${value}</span>`
        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS(){
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))

}

// localStorage.setItem('name','Brad') //localstorage can only store strings. so if you got object to store, stringigy it using JSON.stringfy()
// // localStorage.setItem('name', JSON.stringify())
// // JSON.parse(localStorage.getItem('name'))
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear('name')

