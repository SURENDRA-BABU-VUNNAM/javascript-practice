// const email = `surendra@gmail.com`
// const email = ``
// const email =[]
const email ={}
// if (email) {
//     console.log(`email`);
// } else {
//     console.log(`no email`);
// }

// falsey values => false ,0, -0 bigint 0n , "" null ,undefined, NaN
// truthy value => "0", "false", " ", [], {}, function(){}

// if (email.length === 0) {
//     console.log(`is empty array`);
// }

if (Object.keys(email).length === 0) {
    console.log(`is empty object`);
}

// false == 0 => true, false == "" => true, 0 == "" => true

// nullish coalescing operator (??): null undefined

let val1 ;
// val1= 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1= null ?? 10 ?? 20

// console.log(val1);

// terniary operator

// condition ? true : false

const tea_price = 100

tea_price <= 80 ? console.log(`less than 80`): console.log(`more than 80`);