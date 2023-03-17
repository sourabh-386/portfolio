let joke=document.getElementsByClassName('jok')[0]






let arr = [`Why did the tomato turn red?
Because it saw the salad dressing!`,

   `Why did the scarecrow win an award?
Because he was outstanding in his field!`,

   `Why don't scientists trust atoms?
Because they make up everything!`,

   `Why did the coffee file a police report?
It got mugged!`,

   `Why did the hipster burn his tongue?
He drank his coffee before it was cool.`,

   `Why did the bicycle fall over?
Because it was two-tired.`,

   `Why did the computer go to the doctor?
Because it had a virus!`,

   `Why did the cookie go to the hospital?
Because it felt crumbly.`,

   `Why did the math book look so mad?
Because it had too many problems.`,

   `Why did the chicken cross the playground?
To get to the other slide!`,

   `Why did the airplane land?
Because it ran out of sky.`,

   `Why did the man put his money in the freezer?
He wanted cold hard cash!`,

   `Why did the penguin cross the road?
To get to the other slide!`,

   `Why did the frog call his insurance company?
He had a jump in his car.`,

   `Why did the bear go over the mountain?
To see what was on the other side!`,

   `Why did the man put his money in the blender?
He wanted to make liquid assets!`,

   `Why did the elephant cross the road?
To get to the party!`,

   `Why did the bird go to the seance?
To get in touch with its other side!`,

   `Why did the man put his money in the vacuum cleaner?
He wanted to make a clean sweep!`,

   `Why did the man put his money in the toaster?
He wanted to see his savings get toast-ed!`,

   `Why did the man put his money in the oven?
He wanted to make some bakery-savings!`,

   `Why did the man put his money in the dishwasher?
He wanted to clean up his finances!`,

   `Why did the man put his money in the washing machine?
He wanted to have a spin-cycle of savings!`,

   `Why did the man put his money in the microwave?
He wanted to heat up his savings!`,

   `Why did the man put his money in the refrigerator?
He wanted to cool off his finances!`,

   `Why did the man put his money in the garbage disposal?
He wanted to get rid of his savings!`,

   `Why did the man put his money in the tree?
He wanted to see his savings grow!`,

   `Why did the man put his money in the river?
He wanted to see if it would float!`,

   `Why did the man put his money in the ocean?
He wanted to see if it would sink or swim!`,

   `Why did the man put his money in the fire?
He wanted to see if it was fireproof!`,

   `Why did the man put his money in the air?
He wanted to see if it would fly!`,

   `Why did the man put his money in the sky?
He wanted to see if it would reach for the stars`]



let time=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },1000)
    })
}


let btn=document.getElementsByTagName('button')[0]
btn.addEventListener('click',async ()=>{
joke.innerHTML='Loading...'
await time();
// let num=Math.floor(Math.random() * arr.lenght)
let value = Math.floor(Math.random() * arr.length-1)


joke.innerHTML=arr[value]
    
})