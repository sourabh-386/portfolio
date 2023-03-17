let data = ['I am a Frontend Developer', "I am a Web Designer", 'I am a Youtuber']

let value = 1
let index = 0


let text = document.getElementById('typing_text')


let fun = () => {


    if (value <= (data[index].length)) {
        text.innerHTML = `${data[index].slice(0, value)}`
        value++
        setTimeout(() => {
            fun()
        }, 100)
    }

    else {


        if (index == data.length - 1) {

            index = -1

        }
        setTimeout(() => {
            index++
            value = 1
            fun()
        }, 2000);


    }

}
fun()