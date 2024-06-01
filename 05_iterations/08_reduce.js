const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const my_sum = number.reduce( function (acc,curr_val) {
//     console.log(`acc: ${acc} curr_val:${curr_val} `);
//     return acc+curr_val
// },0)

const my_sum = number.reduce((acc, curr_val) => (acc + curr_val), 0)

// console.log(my_sum);

const shoping_cart = [
    {
        item_name:"JS",
        price:299
    },
    {
        item_name:"mobile developer",
        price:2999
    },
    {
        item_name:"pyth",
        price:199
    },
    {
        item_name:"Java",
        price:300
    },
]

const total =shoping_cart.reduce((acc, item)=>(acc +item.price),0)

console.log(total);

