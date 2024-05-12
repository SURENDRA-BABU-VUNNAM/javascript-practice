//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// all primitive datatypes are call by value i,e when you require it a copy is 
// given not the original from memory location

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

// refrence (non primitive)
// in this type when datatype is called from the memory from refrence

// to master javascript master objects and browser events 

// array objects and functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++

// stack (used for primitive datatype) heap (non-primitive)

// when ever stack memory is used whatever variable is used it's copy is given

// when ever heap memory is used it is given to you directly and what ever 
// changes you make it will effect/change original