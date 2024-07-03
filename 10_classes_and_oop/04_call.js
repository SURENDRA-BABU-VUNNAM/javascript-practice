function set_user_name (user_name){
  // complex DB call
  this.user_name = user_name
  console.log("called")
}

function create_user_name(user_name,email,password){
  set_user_name.call(this,user_name)
  this.email = email
  this.password = password
}

const chai = new create_user_name("chai", "chai@example.com", "chai_password")

console.log(chai)