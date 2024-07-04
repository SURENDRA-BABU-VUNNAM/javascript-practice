// ES6

// class user {
//   constructor(user_name, email, password){
//     this.user_name = user_name;
//     this.email = email;
//     this.password = password;
//   }
//   encrypt_password(){
//     return `${this.password}abc`
//   }
//   capitalize_user_name (){
//     return `${this.user_name.toUpperCase()}`
//   }
// }

// const chai = new user("chai", "chai@example.com", "chai_password")

// console.log(chai.encrypt_password())
// console.log(chai.capitalize_user_name())

// behind the scenes

function user (user_name, email, password){
  this.user_name = user_name;
  this.email = email;
  this.password = password;
}

user.prototype.encrypt_password = function(){
  return `${this.password}abc`
}

user.prototype.capitalize_user_name = function () {
  return ` ${this.user_name.toUpperCase()}`
}

const tea = new user("tea", "tea@example.com", "tea_password")

console.log(tea.encrypt_password())
console.log(tea.capitalize_user_name())

