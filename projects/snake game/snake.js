
let snake_game = document.getElementsByClassName('snake_game')[0];

let food_element = document.createElement('div')
setInterval(() => {
    food_element.classList.toggle('food_light')
}, 500);
food_element.classList.toggle('food_light')

let Direction = { x: 0, y: 0 }

let snake = [{ x: 10, y: 10 }]
let food = { x: 5, y: 5 }

// music for game 
let move = new Audio('move.mp3')
let music = new Audio('music.mp3')
let food_audio = new Audio('food.mp3')
let over = new Audio('gameover.mp3')


// score and high score 
let score = document.getElementsByClassName('score')[0];
let score_value = 0

let high_score = document.getElementsByClassName('high_score')[0];


let hscore = localStorage.getItem('hscore')
if (hscore == null) {
    var hscore_value = 0
    localStorage.setItem('hscore',JSON.stringify(hscore_value))
}
else {
    hscore_value = JSON.parse(hscore)
    high_score.innerHTML = `High-Score : ${hscore}`
}




const main = (time) => {

    music.play()



    setTimeout(() => {
        window.requestAnimationFrame(main)
        // console.log(time)
        snake_code();
    }, 200);


}


const ci = (snake) => {
    if (snake[0].x > 20 || snake[0].x <= 0 || snake[0].y > 20 || snake[0].y <= 0) {
        Direction = { x: 0, y: 0 }
        return true

    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true
        }
    }
}



const snake_code = () => {





    // define snake 

    snake_game.innerHTML = ''
    snake.map((e, index) => {
        // console.log(e)
        // console.log(index)

        let snake_element = document.createElement('div');
        snake_element.style.gridRowStart = e.y
        snake_element.style.gridColumnStart = e.x
        if (index == 0) {
            snake_element.classList.add('head')
            snake_element.style.borderRadius = '10%'
        }
        else {
            snake_element.classList.add('snake')
            snake_element.style.borderRadius = '50%'


        }
        snake_game.appendChild(snake_element)
    })




    // define food 
    food_element.classList.add('food')
    food_element.style.gridRowStart = food.y
    food_element.style.gridColumnStart = food.x
    snake_game.appendChild(food_element)



    // snake move 
    for (let i = (snake.length - 2); i >= 0; i--) {
        snake[i + 1] = { ...snake[i] }
    }
    snake[0].x += Direction.x
    snake[0].y += Direction.y


    // what happen if snake eat food 

    if (snake[0].x == food.x && snake[0].y == food.y) {
        snake.unshift({ x: snake[0].x + Direction.x, y: snake[0].y + Direction.y })
        let a = 2;
        let b = 18;

        score_value += 1;
        score.innerHTML = `Score : ${score_value}`

        if (score_value > hscore_value) {
            hscore_value = score_value
            localStorage.setItem('hscore', JSON.stringify(score_value))
            // var a = localStorage.getItem('hscore')
            high_score.innerHTML = ` New High-Score : ${score_value}`

        }


        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        food_audio.play()
    }


    // snake collide 


    if (ci(snake)) {
        console.log('snake collide with itself')
        snake = [{ x: 10, y: 10 }]
        food = { x: 5, y: 5 }

        over.play()
        music.pause()

        alert('GAME OVER')
        score_value = 0;
        score.innerHTML = `Score : ${score_value}`


    }





}


// snake Direction 
window.addEventListener('keydown', (e) => {
    move.play()
    // console.log(e)

    switch (e.key) {
        case "ArrowUp":

            Direction = { x: 0, y: -1 }
            console.log(e.key)
            break;

        case "ArrowDown":
            Direction = { x: 0, y: 1 }
            console.log(e.key)
            break;

        case "ArrowLeft":
            Direction = { x: -1, y: 0 }
            console.log(e.key)
            break;

        case "ArrowRight":
            Direction = { x: 1, y: 0 }
            console.log(e.key)
            break;


    }



})








// var Direction = { x: 0, y: 0 };


// let snakeArray = [{ x: 10, y: 10 }]

// let snake_food = { x: 2, y: 4 }



// const main = (time) => {

//     setTimeout(() => {
//         window.requestAnimationFrame(main);
//         // console.log(time)
//         gameEngin();

//     },300);


// }
// const collide = (snakeArray) => {
// collide with itself 
//     for (let i = 1; i < snakeArray.length; i++) {
//         if (snakeArray[0].x === snakeArray[i].x && snakeArray[0].y === snakeArray[i].y) {
//             console.log('error1')
//             return true
//         }
//     }

//     if (snakeArray[0].x >= 20 || snakeArray[0].x <= 0 || snakeArray[0].y >= 20 || snakeArray[0].y <= 0) {
//         console.log('error2')

//         return true
//     }


// }


// const gameEngin = () => {



//     // if snake eat food 
//     if (snakeArray[0].x === snake_food.x && snakeArray[0].y === snake_food.y) {
//         snakeArray.unshift({x:snakeArray[0].x+Direction.x,y:snakeArray[0].y +Direction.y})
//         // console.log(snakeArray)
//         let a = 2; let b = 18;
//         snake_food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }

//     }

//     // collide coditions for snake or game over 

//     if(collide(snakeArray)){

//         snakeArray = [{ x: 10, y: 10 }]
//         snake_food = { x: 2, y: 4 }
//         console.log('over')
//     }



//     // snake move 

//     for (let i = snakeArray.length - 2; i >= 0; i--) {
//         // const element=array[i]
//         snakeArray[i + 1] = { ...snakeArray[i] }
//     }

//     snakeArray[0].x += Direction.x
//     snakeArray[0].y += Direction.y



//     // creat snake 
//     snake_game.innerHTML = '';

//     snakeArray.forEach((e, index) => {
//         // console.log(e)
//         let snakeElement = document.createElement('div')
//         snakeElement.classList.add('snake')
//         snakeElement.style.gridRowStart = e.y
//         snakeElement.style.gridColumnStart = e.x
//         snake_game.appendChild(snakeElement)
//     })


//     // creat food 

//     let foodElement = document.createElement('div')
//     foodElement.classList.add('food')
//     foodElement.style.gridRowStart = snake_food.y
//     foodElement.style.gridColumnStart = snake_food.x
//     snake_game.appendChild(foodElement)
// }






// // key evnts 

// window.addEventListener('keydown', (e) => {

//     Direction = { x: 0, y: 0 }
//     switch (e.key) {
//         case 'ArrowUp':
//             Direction.x = 0;
//             Direction.y = -1;
//             // console.log('ArraowUP')
//             // console.log(Direction)


//             break;
//         case 'ArrowDown':
//             Direction.x = 0;
//             Direction.y = 1;
//             // console.log('ArraowDown')
//             // console.log(Direction)

//             break;
//         case 'ArrowLeft':
//             Direction.x = -1;
//             Direction.y = 0;
//             // console.log('ArraowLeft')
//             // console.log(Direction)

//             break;
//         case 'ArrowRight':
//             Direction.x = 1;
//             Direction.y = 0;
//             // console.log('ArraowRight')
//             // console.log(Direction)

//             break;
//     }
// })














window.requestAnimationFrame(main);
