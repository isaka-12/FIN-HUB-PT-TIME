const mynum=2 //contant
var mynumber =67//can change


console.log(typeof true)
console.log(mynumber)
console.log(mynum)

mynumber ="Dr"
console.log(mynumber)

var arr =["name",1,true,3.56]
console.log(arr)

//object key value

var myObject ={"User1":2,"Arr":[12, true, "John"],"Object":{"key":"Value"}}
console.log(myObject)

var myUser = {
    "Name":"Joe",
    "Age":34,
    "Status":"Verified",
    "Paid":true
}

console.log(myUser.Name)
console.log(myUser.Age)
console.log(myUser.Status)
console.log(myUser.Paid)

//operation
//==checks value only
//===checks value and data type
//!= not equal to for value only
console.log(4*6)


//loops
//for-loop and while loop

//for loop
//for(start;stop;step)
// for (let index = 0; index < 40; index++) {
//     console.log(index) 
// }

//printing even numbers
// for(let i =1;i<101;i++){
//     if(i%2==0){
//         console.log(i +" is Even")
//     }
// }
//alternatively
// let i
// while (i<101) {
//     if(i%2==0){
//         console.log(i +" is Even")
//     }
//     i++
    
// }

//conditional statements
// var num = 12
// if(num>10){
//     console.log("it is greater")
// }
// else{
//     console.log("not greater")
// }

//fizzbuzz
for (let i = 1; i <= 100; i++) {
    if (i%3===0 && i%5===0) {
        console.log("FizzBuzz")
    } 
    else if(i%3 === 0){
        console.log("Fizz")
    }
    else if(i%5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
    
}