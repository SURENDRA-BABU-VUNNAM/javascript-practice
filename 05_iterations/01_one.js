// for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    // if (element === 5) {
    //     console.log(`this is 5`);
    // }
    // console.log(element);
    

}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 0; j <=10 ; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`);
        // console.log(`${i} *${j} = ${i*j}  `);
    }
    
}

let my_array = [`flash`,`iron man`,`captain america`,`thor`]

for (let index = 0; index < my_array.length; index++) {
    const element = my_array[index];
    // console.log(element);
}

// break and continue

// for (let i = 1; i <=20; i++) {
//     if (i === 5) {
//         console.log(`detected ${i}`);
//         break;
//     }
//     console.log(`value of i is ${i}`); 
// }

for (let i = 1; i <=20; i++) {
    if (i === 5) {
        console.log(`detected ${i}`);
        continue;
    }
    console.log(`value of i is ${i}`); 
}