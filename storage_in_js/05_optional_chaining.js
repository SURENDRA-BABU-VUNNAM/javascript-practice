const user = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  },
  phone_numbers: [
    {
      type: 'home',
      number: '555-1234'
    },
    {
      type: 'work',
      number: '555-5678'
    }
  ]
};

// with out optional chaining if you want to access zip property of user object

if(user.address){
  // console.log(user.address.zip)
}

// but with optional chaining you can access zip property directly 

// console.log(user?.address?.zip)

// can be used along with array indices 

console.log(user?.phone_numbers?.[0]?.number)

// here let's say if user is null or undefined or returns a null or in that mater for the phone_numbers property you get undefined 