

const account_id = 123456
let account_email ="surendrababu@gmail"
var account_password ="78910"
account_city = "bellary"

// account_id = 2 // not allowed

account_email = "vunnam@gmail.com"
account_password = "654789"
account_city = "hyderabad"
let account_state

/*
Prefer not to use var
because of issue in block scope and functional scope
*/



/*

Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])

*/

// console.log(account_id);

console.table([account_id, account_email, account_password, account_city, account_state ])



