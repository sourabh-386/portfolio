let slide = document.getElementById('slide')

let image = 1







const slider = () => {
if(image>=4){
image=0
}

slide.style.transform=`translateX(-${100*image}%) `
// main.style.transform = `translateX(-${(value-1) * 100}%)`

}

setInterval(()=>{
    slider()
    // console.log(image)
    image++
},4000)