const programming = ["js","cpp","rb","swift"]

// programming.forEach( function (val) {
//     console.log(val);
// } )

// programming.forEach( (val)=>(
//     console.log(val)
// ) )

// function print_me(item) {
//     console.log(item);
// }

// programming.forEach(print_me)

// programming.forEach( (val,index,arr)=>(
//     console.log(val,index,arr)
// ) )

const my_coding = [
    {
        language:'javascript',
        file_name:'js'
    },
    {
        language:'java',
        file_name:'jv'
    },
    {
        language:'python',
        file_name:'py'
    }
]

my_coding.forEach( (item)=>(
    console.log(item.language)
))