// EX #1
// print
// Your function will be given an input parameter incoming. Please console.log this value.
// `print('test') // test`
let  print="test"; 
console.log(print)

// EX #2
// sayHello
// Create a function sayHello(). Within it, console.log string "Hello Seytech!"
// **sayHello()**

const sayHello = () =>{
    return "Hello World!"
}
sayHello()

// EX #3
// getFullName
// Write a function called "getFullName".
// Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.

// var output = getFullName('Joe', 'Smith');
// console.log(output); // --> 'Joe Smith'

const getFullName = (firstName, lastName) =>{
    return `${firstName} ${lastName}`;
}
getFullName('Joe','Smith')

// EX #4
// getLengthOfWord
// Write a function called "getLengthOfWord".
// Given a word, "getLengthOfWord" returns the length of the given word.

// var output = getLengthOfWord('some');
// console.log(output); // --> 4

const getLengthOfWord = word => {
    return word.length;
}
getLengthOfWord('some')

// EX #5
// isGreaterThanTen
// Write a function called "isGreaterThanTen".
// Given a number, "isGreaterThanTen" returns whether it is greater than 10.

// var output = isGreaterThanTen(11);
// console.log(output); // --> true
 
const isGreaterThanTen = num =>{
    let result = num >10 ? `true`:`false`;
    return result;
    
}
isGreaterThanTen(11)

// EX #6
