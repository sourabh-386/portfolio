
let num1=(Math.floor(Math.random()*10) +1)
let num2=(Math.floor(Math.random()*10) +1)

let que=document.getElementById('sum')

que.innerHTML=`What is ${num1} multiply ${num2}`

let right_answer=num1*num2

let user_input=document.getElementById('input')





let submit=document.getElementById('form')



let value=JSON.parse(localStorage.getItem('value'));

let score = document.getElementById('score')
score.innerHTML=`score : ${value}`

if(!value){
score.innerHTML=`score : 0`

}

submit.addEventListener('submit',()=>{

let user_answer= +user_input.value


if(user_answer==right_answer){
    value+=1
    console.log(value)
    fun()
}
else{
    value-=1
    console.log(value)

    fun()

}

})

let fun=()=>{
    localStorage.setItem('value',JSON.stringify(value))
}

