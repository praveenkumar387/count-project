let number = document.querySelector(".num")
let increment = document.querySelector(".incr")
let decrement = document.querySelector(".decr")

let count = 0
increment.addEventListener("click",()=>{
    count = count+1
    number.innerHTML = count
    
    
})
decrement.addEventListener("click",function(){
    count = count-1
    number.innerHTML = count

})