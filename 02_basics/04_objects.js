// single ton below and no diffrence in object created through other methods
// const tinder = new Object()

const tinder= {}

tinder.id = `123abc`
tinder.user=`sammy`
tinder.is_logged_in = true

// console.log(tinder)

const regular_user = {
    email : `surendra@gmail.com`,
    full_name : {
        user_name: {
            first_name: `surendra`,
            sur_name:`vunnam`
        }
    }
}

// console.log(regular_user.full_name.user_name.first_name)

const obj1 = {1:`a`,2:`b`}
const obj2 = {3:`c`,4:`d`}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)

// in real time scenario when you call database you get array of objects like

const users = [
    {
        id : 1
    },
    {
        id : 1
    },
    {
        id : 1
    },
    {
        id : 1
    },
    {
        id : 1
    },
]

// users[1].id

// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))
// console.log(tinder.hasOwnProperty(`is_logged_in`))

const course = {
    course_name : `js in hindi`,
    course_price: 999,
    course_instructor:`surendra`
}

// object de-sturcture 
const {course_instructor : instructor} = course

// console.log(instructor)

// json

// {
//   course_name : `js in hindi`,
//   course_price: 999,
//   course_instructor:`surendra`
// }

// keys are also in string in JSON just like values of the keys

// https://chaicode.com/blogs/64d4d7725db609df6bf2c2f5 for indepth in objects
