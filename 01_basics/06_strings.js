const name = "surendra"
const repocount = 3

// console.log(name + repocount + " value"); out of date 

// console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// the above way of using backticks and place holders is known as string
// interpolation

const game_name = new String ("surendra")

// console.log(typeof game_name);

// console.log(game_name.__proto__);

// console.log(game_name.length);

// console.log(game_name.length);
// console.log(game_name.charAt(3));
// console.log(game_name.indexOf("u"));

const new_string = game_name.substring(0,4)

// console.log(new_string);

const another_string = game_name.slice(-3, 6)
// console.log(another_string);

const new_string_one = "  surendra  "
// console.log(new_string_one);
// console.log(new_string_one.trim());

const url = "https://surendrababu/surendra%20babu"

// console.log(url.replace("%20", "-"));

// console.log(url.includes("surendra"));

console.log(game_name.split("e"));

// read about more sting methods