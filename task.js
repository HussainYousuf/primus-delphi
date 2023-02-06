// In a language of your choice write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".


const doFizz = () => {
    // alarm code here, or any other custom code
    return "Fizz";
};

const doNothing = () => {
    // alarm code here, or any other custom code
    return "";
};

const doBuzz = () => {
    // alarm code here, or any other custom code
    return "Buss";
};

const print = (i) => {
    console.log(i);
};


const isMultipleOf3 = i => i % 3 == 0 ? doFizz() : doNothing();
const isMultipleOf5 = i => i % 5 == 0 ? doBuzz() : doNothing();

for (let i = 1; i <= 100; i++) {
    let res = isMultipleOf3(i);
    res += isMultipleOf5(i);
    res ? print(res) : print(i);
}