
let allusers = [
    {
        name: 'jatin',
        age: 20,
        skill: 'web developer',
        id: 1,
        img: 'https://w0.peakpx.com/wallpaper/686/520/HD-wallpaper-shizuka-girl-anime.jpg'
    },
    {
        name: 'ashish',
        age: 26,
        skill: 'front-end developer',
        id: 2,
        img: 'https://thumbs.dreamstime.com/b/doraemon-doraemon-stickers-walln-106523668.jpg'
    },
    {
        name: 'dhruvin',
        age: 20,
        skill: 'react developer',
        id: 3,
        img: 'https://cdn.dribbble.com/users/5216574/screenshots/14624611/media/0549e1cd02ba286d49ab8e5be72e1b85.jpg?compress=1&resize=400x300&vertical=top'
    },
    {
        name: 'sandip',
        age: 21,
        skill: 'backend developer',
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGFmRX01e2T8EzeSQrpPSAOiVzxX9AClSKSjiizqIVOkKITHAVNjme0XCInMpmr2-xcE&usqp=CAU'
    },
    {
        name: 'bhavik',
        age: 22,
        skill: 'Ui designer',
        id: 5,
        img: 'https://i.pinimg.com/736x/9e/ba/1d/9eba1da13de893e89f06fb9fb36c97ac.jpg'
    }

]
let Selectedusers = []
let userscontainer = document.getElementById('users')
let userselected = document.getElementById('userselected')
userscontainer.innerHTML = allusers.map((user) => {
    return `<div class="card  user col-2">
    <img src="${user.img}" alt="" class="card-img-top user-img">
    <div class="cardbody">
        <h5>${user.name}</h5>
        <p>${user.age}</p>
        <p>${user.skill}</p>
        <button onclick='SelectHandler(${user.id})'>select</button>
    </div>
</div>`
}).join('')

const userselect = () => {
    if (userselected.style.left == '-1000px') {
        userselected.style.left = '0'
    } else {
        userselected.style.left = '-1000px'
    }
}

const SelectHandler = (id) => {
    let user = allusers.find((x) => x.id == id)
    Selectedusers.push(user)

    userselected.innerHTML = Selectedusers.map((y) => {
return  `<div class="card  user ">
<img src="${y.img}" alt="" class="card-img-top user-img">
<div class="cardbody">
    <h5>${y.name}</h5>
    <p>${y.age}</p>
    <p>${y.skill}</p>
    <button onclick='SelectHandler(${y.id})'>select</button>
</div>
</div>`
    })

}