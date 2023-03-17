let about_slide=document.getElementById('about_slide')

let about_personal=document.getElementById('about_personal')
let about_education=document.getElementById('about_education')

let about_personal_btn = document.getElementsByClassName('about_personal_btn')[0]
let about_education_btn = document.getElementsByClassName('about_education_btn')[0]

about_personal_btn.addEventListener('click',()=>{
    about_slide.style.transform='translateX(0%)'
    about_personal_btn.classList.add('about_active')
    about_education_btn.classList.remove('about_active')
})
about_education_btn.addEventListener('click',()=>{
    about_slide.style.transform='translateX(-100%)'
    about_personal_btn.classList.remove('about_active')
    about_education_btn.classList.add('about_active')
})





