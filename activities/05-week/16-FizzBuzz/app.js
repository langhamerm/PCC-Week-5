// Initialize FizzBuzz function
function fizzBuzz() {
    // for loop that loops 100 times starting from the number one
    for (var i = 1; i <= 100; i++) {
        // if divisible by 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            // Print FizzBuzz
            console.log("FizzBuzz");
        }
        // else if divisible by 3 
        else if (i % 3 === 0) {
            // Print Fizz
            console.log("Fizz");
        } else if (i % 5 === 0) {
            // Print Buzz
            console.log("Buzz");
        } else {
            // else 
            console.log(i);
            // Print the number
        }
    }
}