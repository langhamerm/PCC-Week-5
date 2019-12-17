//initialize FizzBuzz funtion
function fizzBuzz(){
//for loop that loops 100 times from 1 
 for (var i = 1; i <= 100; i++){
     //i divisible by 3 and 5 print fizzbuzz
    if (i % 3 === 0 && i % 5 === 0){
    console.log(FizzBuzz)}
// if divisible by 3
    else if (i % 3 === 0){
     console.log(Fizz);}
// if divisible by 5
    else if (i % 5 ===0){
     console.log(Buzz);}
// everthing else
    else {
    console.log(i);}
}}