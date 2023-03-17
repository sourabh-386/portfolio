let btn1=document.getElementsByClassName('skills_btn')[0]
btn1.addEventListener('mouseover',(event)=>{

let x_pos=(event.pageX-btn1.offsetLeft)
let y_pos=(event.pageY-btn1.offsetTop)

btn1.style.setProperty('--x',x_pos+'px')
btn1.style.setProperty('--y',y_pos+'px')

})
let btn2=document.getElementsByClassName('skills_btn')[1]
btn2.addEventListener('mouseover',(event)=>{

let x_pos=(event.pageX-btn2.offsetLeft)
let y_pos=(event.pageY-btn2.offsetTop)

btn2.style.setProperty('--x',x_pos+'px')
btn2.style.setProperty('--y',y_pos+'px')

})
let btn3=document.getElementsByClassName('skills_btn')[2]
btn3.addEventListener('mouseover',(event)=>{

let x_pos=(event.pageX-btn3.offsetLeft)
let y_pos=(event.pageY-btn3.offsetTop)

btn3.style.setProperty('--x',x_pos+'px')
btn3.style.setProperty('--y',y_pos+'px')

})
