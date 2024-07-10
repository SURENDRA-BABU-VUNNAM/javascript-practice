class user {
  constructor (email,password){
    this.email = email
    this.password =password
  }

  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email = value
  }
  get password(){
    return this._password.toUpperCase() 
  }
  set password(value){
    this._password  = value
  }
}
const surendra = new user ("example@example.com","example_two")
// console.log(surendra.password)
// console.log(surendra.email)

// old way property way

function user_old (email,password){
  this.password =password
  this.email = email
  Object.defineProperty(this,"email",{
    get: function(){
      this_email = this.email.toUpperCase()
    },
    set: function(value){
      this.email = value
    }
  })
  Object.defineProperty(this, "password",{
    get: function(){
      this._password = this.password.toUpperCase()
    },
    set : function(value){
      this._password = value
    }
  })
}

const surendra_2 = new user_old ("example@example.com","example_two")
// console.log(surendra.password)
// console.log(surendra.email)

// object way 

const user_object = {
  _email: "example@example.com",
  _password: "example_object",

  get email(){
    return this._email.toUpperCase()
  },
  set email (value){
    this._email = value
  }
  
}

const tea = Object.create(user_object)
console.log(tea.email)


