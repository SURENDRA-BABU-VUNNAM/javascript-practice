class user {
  constructor (user_name){
    this.user_name = user_name
  }
  log_me (){
    console.log(`user name is ${this.user_name}`)
  }
}

class teacher extends user {
  constructor (user_name, email, password){
    super(user_name)
    this.email = email;
    this.password = password;
  }
  add_courses () {
    console.log(`A new course is added by ${this.user_name}`)
  }
}

const chai = new teacher("chai", "chai@example.com", "chai_password")
// chai.add_courses()
// chai.log_me()

const masala_chai = new user("masala_chai")

// masala_chai.log_me()

console.log (chai instanceof user)
console.log (chai instanceof teacher)

