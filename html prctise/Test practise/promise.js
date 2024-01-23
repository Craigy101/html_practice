//Tutorial on promise obejcts in js. Also covers arrow syntax 
//Promises are great when you want to do something to take a 
//while and get back to it when complete and know if it works

let p = new Promise((resolve,reject) => {
    let a = 1+2
    if (a==2){
        resolve("success")
    }
    else{
        reject("failed")
    }
})
//then called uf the promise is resolved
p.then((message) => {
    console.log("This is in the then: " + message)
    //catch called if the promise if rejected
}).catch((message) => {
    console.log("this in in the catch: " + message)
})