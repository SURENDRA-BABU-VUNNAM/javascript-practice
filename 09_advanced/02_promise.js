// const promise_1 = new Promise(function(resolve,reject){
//     // do an async task
//     // DB calls, cryptography
//     setTimeout(function(){
//         console.log("async task is compleated");
//         resolve()
//     },1000)
// })

// promise_1.then(function(){
//     console.log("promise si compleated");
// })

// another method for creating promise

// new Promise(function(resolve,reject){
//         setTimeout(function(){
//         console.log("async task is compleated");
//         resolve()
//     },1000)
// }).then(function(){
//             console.log("promise si compleated");
// })

// const promise_3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"apple",email:"apple@raja.com"})
//     },1000)
// })

// promise_3.then(function(data){
//     console.log(data);
// })

// const promise_4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (error === false) {
//             resolve({name:"orange",email:"orange@rani.com"})
//         } else {
//             reject("error:something went wrong")
//         }
//     },1000)
// })

// promise_4.then((user)=>{
//     console.log(user);
//     return user.name
// })
// .then((user_name)=>{console.log(user_name);})
// .catch((error)=>{console.log(error);})
// .finally(()=>{console.log("the promise is either resolved or rejected");})

const promise_5 = new Promise(function (resolve, reject) {

        setTimeout(function () {
            let error = true
            if (error === true) {
                resolve({ name: "lemon", email: "lemon@mantri.com" })
            } else {
                reject("error:js went wrong")
            }
        }, 1000)
    })


async function consume_promise_5 (){
try {
    const response = await promise_5
    console.log(response);
} catch (error) {
    console.log(error);
}
}
consume_promise_5()

async function get_all_users() {
try {
    const response =await fetch ("https://jsonplaceholder.typicode.com/users")
    let data = await response.json()
    console.log(data);
} catch (error) {
    console.log(error);
}
}

get_all_users()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error);})

