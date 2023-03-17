let area = document.getElementsByTagName('body')[0]

area.addEventListener('mousemove', (e) => {


    let xpos = e.offsetX
    let ypos = e.offsetY


    area.insertAdjacentHTML('afterbegin', `<div><div>`)

    let heart = document.getElementsByTagName('div')[0]

    let num =Math.random()*50
    console.log(num)
    heart.style.width = num + 'px'
    heart.style.height = num + 'px'


    heart.style.left = xpos + 'px'
    heart.style.top = ypos + 'px'
    // console.log('move')

    setTimeout(() => {
        heart.remove()
    }, 4000);


})