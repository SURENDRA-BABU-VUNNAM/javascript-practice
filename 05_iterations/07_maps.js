const number = [1, 2, 3,4, 5, 6, 7, 8, 9, 10]

// const add_num = number.map( (num)=> (
//     num+10
// ))

const new_number = number
    .map((num) => (num * 10))
    .map((num)=>(num+1))
    .filter((num)=>(num>=40))
 
// console.log(add_num);
console.log(new_number);