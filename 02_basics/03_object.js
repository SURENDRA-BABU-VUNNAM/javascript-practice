//singleton

// Object.create
// object literal

let mySym = Symbol(`key1`)

const JS_user = {
    name: `Surendra`,
    "full name" : `Surendra Babu`,
    [mySym]: `mykey1`,
    age: 27,
    location: `Ballari`,
    email:`surendra@outlook.com`,
    last: [`monday`],
}

// it is to be noted that the key is taken as a string 

// console.log(JS_user.name);
// console.log(JS_user.full name); //gives error
// console.log(JS_user["full name"]);//better way to access object key value when space in keys

// console.log(typeof JS_user.mySym);//
// console.log(typeof JS_user[mySym]);// to when key is a symbol

JS_user.email = `surendra@gmail.com`

// console.log(JS_user[`email`]);

// Object.freeze(JS_user) // cannot change key value pair because freeze 

JS_user.email= `surendra@chatgpt`
// console.log(JS_user.email);

// console.log(JS_user);

JS_user.greeting = function () {
    console.log(`hello user js`);
}

JS_user.greeting_2 = function () {
    console.log(`hello ${this.name}`);
}
// this. is used to access values of object  'this' indepth later
// console.log(JS_user.greeting());
// console.log(JS_user.greeting);
console.log(JS_user.greeting_2());
    //43 ^
//you get function return back you get function refrence

