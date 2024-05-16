// arrays

const array = [1, 22, 33, 44, true, "surendra"] 
const myheros = new Array(1, 2, 3, 4, 5,) 
// console.log(myheros[0]);

// array methods

// myheros.push(33) // add values at end
// myheros.push(77) // add values at end
// myheros.pop() //removes last values

// myheros.unshift(99) // adds values at the start or 0th index 
// myheros.shift() // removes values at the start or 0th index


// console.log(myheros.includes(3));
// console.log(myheros.indexOf(5));

// const newarr = myheros.join()

// console.log(newarr);
// console.log(myheros);

console.log("a ", myheros);

const myn1 = myheros.slice(1,3) //includes start excludes end in paranthisis
const myn2 = myheros.splice(1,3) // includes both start and end in paranthisis

// the diffrence between slice and splice, splice modifies the original array

console.log(myn1);
console.log(myn2); 
console.log(myheros);