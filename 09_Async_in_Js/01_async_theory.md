
JavaScript is a synchronous and single threaded programing language 

during execution context the program is executed one line at a time meaning each operation waits for the last operation to be completed

Blocking code vs non-blocking code

blocking code blocks the flow of the program
non-blocking code does not block the flow of execution

for example: let say you want to read a file if you do it in blocking format you can't do anything until the file is read 
if you read file non-blocking code you can do other tasks until other code is read

![alt text](image.png)


look at js engine it contains of memory heap and call stack but it is not enough so you get web API in browser environment which has DOM API and in node there is no DOM API

web api and task queue makes JS so fast and async 

here you can see promises queue which has high priority

as you can see there is function are being executed in call stack synchronously 

let us say that you want to to something async ly you use some functions such as set timeout and set interval and all these events are registered in regerster call back and then it is put back into the call stack via the task queue in first in first out way and call stack works in first in and first out way 

and even promiss que works in similar way
