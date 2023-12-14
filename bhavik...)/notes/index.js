let jsnote = document.getElementById('jsnote')
let input = document.getElementById('input')
let notes = []

const addnote = () => {
    notes.push(input.value)

    jsnote.innerHTML = notes.map((note, index) => {
        return `<div class= 'note' ><p>${note}</p> <i onClick='RemoveNote(${index})' class='fa-solid fa-x'></i></div>`
    }).join('')


    input.value = ''
}
const RemoveNote = (i) => {
    notes = notes.filter((value, index) => index != i)
    jsnote.innerHTML = notes.map((note, index) => {
        return `<div class= 'note' ><p>${note}</p> <i onClick='RemoveNote(${index})' class='fa-solid fa-x'></i></div>`
    }).join('')
}
let nav = document.getElementById('nav')
const navbar = () => {
    console.log(nav.style.left)
    if (nav.style.left == '-100%') {
        nav.style.left = '0'
    }
    else { nav.style.left = '-100%' }
}