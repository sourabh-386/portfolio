let show_nav=document.getElementById('show_nav')
let hide_nav=document.getElementById('hide_nav')

let nav=document.getElementsByClassName('nav')[0]

hide_nav.addEventListener('click',()=>{
    nav.style.transform='translateX(-251px)'
})

show_nav.addEventListener('click',()=>{
    nav.style.transform='translateX(0px)'
})

// nav.addEventListener('click',()=>{
//     nav.style.transform='translateX(0px)'
// })