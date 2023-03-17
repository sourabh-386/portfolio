let text=document.getElementById('text')

let total=document.getElementById('total')

let remaning=document.getElementById('remaning')

let user_text=0;

var remaning_text=100;

setInterval(() => {

let text_value=text.value

user_text=text_value.length

total.innerHTML=`Total : ${user_text}`

remaning_text=(100 - +user_text)

remaning.innerHTML=`Remaining : ${remaning_text}`




  
 }, 10);
 