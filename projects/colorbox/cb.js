let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f']


const fun = () => {
    var color = ''
    for (let i = 0; i < 6; i++) {
        let value = Math.floor(Math.random() * arr.length)
        color = color + arr[value]

    }
    return `#${color}`
}

let box = document.getElementsByClassName('box')[0]

for (let j = 0; j < 30; j++) {
    // console.log(j)
    let final_color= fun()
    box.insertAdjacentHTML('afterbegin', `<div class="box_color" style="background-color:${final_color}">${final_color}<div>`)

}





