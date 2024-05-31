// for of

// ["", "","",""]
// [{},{},{},{}]

const arr = [1,2,3,4,5]

// for (const value of arr) {
//     console.log(value);
// }

// const string = "hello world"

// for (const greeting of string) {
//     console.log(`each char is : ${string}`);
// }

// maps

const map = new Map()
map.set("IN","India")
map.set("SL","Sri Lanka")
map.set("FR", "France")

console.log(map);

for (const [key,value] of map) {
    console.log(`${key} + ${value}` );
}

const my_object = {
    game_1 : 'nfs',
    game_2 : 'spider_man',
    game_3 : 'gta',
}

for (const [key ,value] of my_object) {
    console.log(`${key} + ${value}` );
/*my_object is not iterable*/
}