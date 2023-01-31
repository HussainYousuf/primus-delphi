// In a language of your choice write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

const isMultipleOf3 = i => i % 3 == 0
const isMultipleOf5 = i => i % 5 == 0
for (let i = 1; i <= 100; i++) {
    if (isMultipleOf3(i) && isMultipleOf5(i)) console.log("FizzBuzz")
    else if (isMultipleOf3(i)) console.log("Fizz")
    else if (isMultipleOf5(i)) console.log("Buzz")
    else console.log(i)
}