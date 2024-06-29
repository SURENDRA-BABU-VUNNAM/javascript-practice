// object literal

// const user = {
//   user_name :"surendra",
//   login: 8,
//   signed_in : true,
//   getUserDetails : function(){
//     console.log("Got user details from database");
//     console.log(`Username: ${this.username}`);  
//     console.log(this)
//   }
// }


// console.log(user.username)
// console.log(user.getUserDetails()) 
// console.log(this) 



// constructor method

// In that case, the transcript is accurate in the context of JavaScript.

// Here's a more detailed verification of the transcript:

// Step 1:

//     In JavaScript, when you use the new keyword, it creates a new object, which is an instance of the constructor function.

// Step 2:

//     The new keyword indeed calls the constructor function, which is a special function that initializes the object.
//     The constructor function can take in arguments, which are used to initialize the object's properties.

// Step 3:

//     When the constructor function is called, it sets the properties of the object using the arguments passed to it.
//     This can be thought of as "injecting" the arguments into the object.

// Step 4:

//     The resulting object, with its properties set, is returned by the constructor function.

function user (user_name, login_count, is_logged_in){
  this.user_name = user_name;
  this.login_count = login_count;
  this.is_logged_in = is_logged_in;
  this.greeting = function (){
    console.log(`${this.user_name}`)
  }
  return this
}

let user_1 = new user("surendra", 80, true)

// console.log(user_1)
// console.log(user_1.constructor)

// learn instance of by yourself




