function say_my_name (){
    console.log(`s`)
    console.log(`u`)
    console.log(`r`)
    console.log(`e`)
    console.log(`n`)
    console.log(`d`)
    console.log(`r`)
    console.log(`a`)
}


// say_my_name()

// function without parenthisis is refrence with parenthisis is execution

function add_two_number (number1 , number2 /*paramaters */) {
    console.log(number1+number2)
}

// add_two_number(2 , 4 /* arguments or values */) 

function add_two_number (number1 , number2 ) {
    // let result = number1+ number2
    // return result /*function stops exicution after returning */ 

    return number1+number2
}

const result = add_two_number(2,10)

// console.log(`result is ${result}`)

// function login_message (user_name){
//     if(user_name === undefine){
//         console.log(`please enter user name`)
//         return
//     }
//     return `${user_name} is logged in`
// }

// function login_message (user_name){
//     if(!user_name){
//         console.log(`please enter user name`)
//         return
//     }
//     return `${user_name} is logged in`
// }


function login_message (user_name = "sam"){
    if(!user_name){
        console.log(`please enter user name`)
        return
    }
    return `${user_name} is logged in`
}


console.log(login_message())  