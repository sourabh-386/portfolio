let hour = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let am=document.getElementById('am')


setInterval(() => {
    let date = new Date()
    if (date.getHours() % 12 == 0) {
        hour.innerHTML = 12
    }
    else {
        if((date.getHours() % 12)<10){
        hour.innerHTML = `0${(date.getHours() % 12)}`

        }
        else{
        hour.innerHTML = (date.getHours() % 12)
        }
    }

    
    if (date.getMinutes() < 10) {
        min.innerHTML = `0${date.getMinutes()}`

    }
    else {
        min.innerHTML = date.getMinutes()
    }


    if (date.getSeconds() < 10) {
        sec.innerHTML = `0${date.getSeconds()}`

    }
    else {
        sec.innerHTML = date.getSeconds()
    }


    if(date.getHours()<=12){
        am.innerHTML='AM'
    }
    else{
        am.innerHTML='PM'

    }

}, 1000);