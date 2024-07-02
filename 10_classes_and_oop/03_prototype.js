let my_name = "surendra   "

// console.log(my_name.true_length)

let my_heros = ["thor", "ironman", "spiderman"]

let hero_power ={
  thor : "hammer",
  ironman : "suit",
  spiderman : "web",
  get_spider_power : function(){
    console.log(`spiderman power is ${this.spiderman}`)
  }
}

Object.prototype.surendra = function (){
  console.log("surendra is present in all objects")
}

// hero_power.surendra()

// my_heros.surendra()

Array.prototype.hey_surendra = function (){
  console.log("hey surendra")
}
// hero_power.hey_surendra()

// my_heros.hey_surendra()

const user = {
  user_name: "chai",
  mail: "chai@example.com",
}

const teacher = {
  make_video : true
}

const teaching_support = {
  is_available : false 
}

const TA_support = {
  make_assignment : true,
  full_time : true,
  __proto__ : teaching_support,
}

teacher.__proto__ = user

// the above approach is out dated approach

// modern syntax 

Object.setPrototypeOf(teacher, user)

// here in the user properties are inherited to teacher

let another_user = "apple     "

String.prototype.true_length = function (){
  console.log(`${this}`)
  console.log(`true length of the string ${this.trim().length}`)
}

another_user.true_length()

"surendra".true_length();
"tea".true_length()