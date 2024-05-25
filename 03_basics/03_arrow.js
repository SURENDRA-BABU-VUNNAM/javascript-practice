const user = {
    user_name: `surendra`,
    price: 999,

    welcome_message: function(){
        console.log(`welcome ${this.user_name}`);
        console.log(this);
    }
}

// user.welcome_message()
// user.user_name= `babu`
// user.welcome_message()

// console.log(this);

// function one() {
//     let user_name= `surendra`
//     console.log(this.user_name);
// }

// const one = function one() {
//     let user_name = `surendra`
//     console.log(this.user_name);
// }

// const one = function() {
//     let user_name = `surendra`
//     console.log(this.user_name);
// }

// const one = () => {
//     let user_name = `surendra`
//     console.log(this);
// }

// one()

// const arrow = (num1,num2) => {
//     return num1+num2
// }

// const arrow = (num1,num2) =>  num1+num2

// const arrow = (num1,num2) =>  (num1+num2)

const arrow = (num1,num2) =>  ({user : `surendra`}) 
/*to return function wrap in parenthis  */


console.log(arrow(5,9));  



