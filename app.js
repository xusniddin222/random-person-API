const api = "https://randomuser.me/api/?results=1"
const container = document.querySelector('.container')
const email = document.querySelector('.e-mail')
const phone = document.querySelector('.phone')
const age1 = document.querySelector('.age')
const location1 = document.querySelector('.location')
const icons = document.querySelector('.icons')
// console.log(phone);


fetch(api)
    .then(res => res.json())
    .then(data => getDate(data))
    function getDate(data) {
    let persons = data.results
    console.log(persons);
persons.forEach(person => {
    const {title, first, last,} = person.name
    container.innerHTML += `
    <div class="wrapper">
    <h2  class="element">${title} ${first} ${last}</h2>
    <p class="element p">Hello everyone!</p>
    <img class="element img" src=${person.picture.large} alt=${first}>
    </div>
    `

    email.addEventListener ('click', ()=>{
        const p = document.querySelector('p')
        console.log(1);
        p.innerHTML = `
        <p class="element p">My e-mail is (${person.email})</p>
        `
        location1.classList.remove('click-btn')
        phone.classList.remove('click-btn')
        age1.classList.remove('click-btn')

        email.classList.toggle("click-btn")
    })

    location1.addEventListener ('click', ()=>{
        const {city, state} = person.location
        const p = document.querySelector('p')
        p.innerHTML = `
        <p class="element p">I live in ${city} city, in ${state}</p>
        `
        email.classList.remove('click-btn')
        phone.classList.remove('click-btn')
        age1.classList.remove('click-btn')

        location1.classList.toggle("click-btn")
    })
    phone.addEventListener ('click', ()=>{
        const p = document.querySelector('p')
        p.innerHTML = `
        <p class="element p">My phone number is ${person.phone}</p>
        `
        email.classList.remove('click-btn')
        location1.classList.remove('click-btn')
        age1.classList.remove('click-btn')
        
        phone.classList.toggle("click-btn")
    })
    age1.addEventListener ('click', ()=>{
        const {age} = person.dob
        const p = document.querySelector('p')
        p.innerHTML = `
        <p class="element p">I am ${age} years old</p>
        `
        email.classList.remove('click-btn')
        phone.classList.remove('click-btn')
        location1.classList.remove('click-btn')

        age1.classList.toggle("click-btn")
    })

})
}
