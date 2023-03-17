let popup_close=document.getElementById('popup_close')

let background=document.getElementsByClassName('top_div')[0]

let popup_submit=document.getElementById('popup_submit')

let popup=document.getElementsByClassName('popup')[0]
popup_close.addEventListener('click',()=>{
    popup.classList.toggle('popup_active')
    background.classList.toggle('popup_active')



})
popup_submit.addEventListener('click',()=>{
    popup.classList.toggle('popup_active')
    background.classList.toggle('popup_active')



})

setTimeout(()=>{
 
    popup.classList.toggle('popup_active')
    background.classList.toggle('popup_active')
},5000)