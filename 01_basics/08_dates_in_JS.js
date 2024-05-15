// Date

let my_date = new Date()
// console.log(my_date.toString());
// console.log(my_date.toDateString());
// console.log(my_date.toLocaleString());

let Create_date = new Date(1997, 2, 4)
// Create_date = new Date(1997, 2, 4, 22, 45)
// Create_date = new Date("2024-03-04")
// Create_date = new Date("04-03-1997")
// console.log(Create_date.toDateString());
// console.log(Create_date.toLocaleString());
// console.log(Create_date.getTime());

// let time_stamp = Date.now()
// console.log(Math.floor(Date.now()/1000))

let new_date = new Date()

// console.log(new_date.getMonth()+1);
// console.log(new_date.getDate());
// console.log(new_date.getTime());
// console.log(new_date.getDay());

console.log(new_date.toLocaleString("default" ,{
    weekday :"long"
}));

// visit again go in depth 