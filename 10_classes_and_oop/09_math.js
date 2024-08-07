const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// console.log(descriptor)

const chai = {
  name: "ginger_chai",
  price: 250,
  is_available: true,
  order_chai : function(){
    console.log("no chai")
  }
};

// console.log(chai)
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name',{
//   Writable: false,
//   enumerable: false,
//   configurable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}