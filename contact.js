let contact_page=document.getElementsByClassName('contact_page')[0]

let contact_close=document.getElementById('contact_close')

let contact_submit=document.getElementById('contact_submit')

let for_contact=document.getElementById('for_contact')

let for_about=document.getElementById('for_about')

let about_section=document.getElementsByClassName('about_me')[0]


let home_section=document.getElementsByClassName('bg')[0];
let home_btn=document.getElementById('for_home')


home_btn.addEventListener('click',()=>{
    nav.style.transform='translateX(-251px)'

    home_section.scrollIntoView({behavior:"smooth"})

})

for_about.addEventListener('click',()=>{
    nav.style.transform='translateX(-251px)'
    about_section.scrollIntoView({behavior:"smooth"})

})


// let popup=document.getElementsByClassName('popup')[0]
contact_close.addEventListener('click',()=>{
    contact_page.classList.toggle('contact_active')
    background.classList.toggle('popup_active')



})

for_contact.addEventListener('click',()=>{
    contact_page.classList.toggle('contact_active')
    nav.style.transform='translateX(-251px)'
    background.classList.toggle('popup_active')



})
contact_submit.addEventListener('click',()=>{
    contact_page.classList.toggle('contact_active')
    background.classList.toggle('popup_active')
    setTimeout(() => {
        alert('message Sended')
    }, 2000);



})

