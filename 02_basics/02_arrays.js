const marvel_heros = [`thor`, `iron man`, `captain america`] 
const dc = [`batman`, `wonder woman`, `aquaman`]

// marvel_heros.push(dc) 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); not a good method

// let all_heroes = marvel_heros.concat(dc)
// console.log(all_heroes);

let all_heroes = [...marvel_heros,...dc]

// console.log(all_heroes);

// let number_array = [1, 2, 3, 4, [11, 12, 13], 5 ,6, 7, [13, 14, 15,[16, 17, 18]]]
// let usable_array = number_array.flat(Infinity)
// console.log(usable_array);

console.log(Array.isArray(`surendra`));// important 
console.log(Array.from(`surendra`)); // important
console.log(Array.from({name:`surendra`}));//interesting  
console.log(Array.isArray({name:`surendra`})); 

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3));
