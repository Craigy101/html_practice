
//Arrow function syntax

//Anonymous functions, are functions with no name 
//eg when document is clicked, do the function task being say 'click' in console
document.addEventListener("click",function(){
    console.log("click")
})
//General functions in js are declared with the function keyword
//eg
function sum(a,b){
    return a+b
}

//Arrow function syntax 
// assumes function keyword and store function as variable

let sum2 = (a,b)=>{ return a+b }
// assumes everything after the arrow is to be returned 
//same as 
let sum2 = (a,b)=> a+b
// If one parameter in function, doesn't require brackets around the parameter. eg
let squared = a => a^2

//Anonymous functions, are functions with no name 
//in arrow format they look like
document.addEventListener("click",() => console.log("click"))

///big difference with the this object in => can use local this of objects
// in a normal function this keyword refers to global scope of object