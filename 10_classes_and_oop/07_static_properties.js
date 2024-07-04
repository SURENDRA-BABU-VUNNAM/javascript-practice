class user {
  constructor (user_name){
    this.user_name = user_name
  }
  log_me (){
    console.log(`user name is ${this.user_name}`)
  }
  static create_id (){
    return `123`
  }
}

const surendra = new user("surendra")
// console.log(surendra.create_id())

class teacher extends user {
  constructor (user_name, email){
    super (user_name)
    this.email =email
  }
}

const iphone = new teacher( "iphone", "iphone@example.com")
iphone.log_me()
// console.log(iphone.create_id())