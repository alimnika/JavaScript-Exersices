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
// getLengthOfTwoWords
// Write a function called "getLengthOfTwoWords".
// Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

// var output = getLengthOfTwoWords('some', 'words');
// console.log(output); // --> 9

function getLengthOfTwoWords(word1, word2){
    return word1.length+word2.length;
}
getLengthOfTwoWords('some', 'words')
// Second Option
const  getLengthOfTwoWords =(word1, word2) =>{
    let count=0;
      for (let i=0; i<word1.length; i++){
        count+=1
      }
      for(let x=0; x<word2.length; x++){
        count +=1
      }
      return count
  }
  getLengthOfTwoWords('some', 'words')

 
// EX #7
// isLessThan30
// Write a function called "isLessThan30".
// Given a number, "isLessThan30" returns whether the given number is less than 30.

// var output = isLessThan30(9);
// console.log(output); // --> true

function isLessThan30(num){
    if(num < 30){
      return true;
    }else{
      return false;
    }
  }
  isLessThan30(9)
//   Using ES6
const isLessThan30 = num =>{
    let result = num < 30 ? true : false
    return result;
}
isLessThan30(9)

// Ex #8
// equalsTen
// Write a function called "equalsTen".
// Given a number, "equalsTen" returns whether or not the given number is 10.

// var output = equalsTen(9);
// console.log(output); // --> false

function equalsTen(num){
    if(num >10){
        return true;
    }else{
        return false;
    }
}
equalsTen(9)
//  Using ES6
const equalsTen = num =>{
    let result = num >10 ? true : false;
    return result
  }
  equalsTen(9)

//   EX #9
// isLessThan
// Write a function called "isLessThan".
// Given 2 numbers, "isLessThan" returns whether num2 is less than num1.

// var output = isLessThan(9, 4);
// console.log(output); // --> true

function isLessThan(num1, num2){
    if(num2 < num1){
        return true;
    }else{
        return false;
    }
}
isLessThan(9, 4);

// Using ES 6
const isLessThan = (num1, num2) => {
  let result = num2<num1 ? true : false;
  return result
}
isLessThan(9, 4);

// EX #10
// isGreaterThan
// Write a function called "isGreaterThan".
// Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

// var output = isGreaterThan(11, 10);
// console.log(output); // --> false

function isGreaterThan (num1, num2){
    if(num2 > num1){
        return true;
    }else{
        return false;
    }
}
isGreaterThan(11, 10);
// Using ES6
const isGreaterThan = (num1, num2) =>{
  let result = num2 > num1 ? true : false;
  return result;
}
isGreaterThan(11, 10)

//  EX #11
// isEqualTo
// Write a function called "isEqualTo".
// Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.
// var output = isEqualTo(11, 10);
// console.log(output); // --> false

const isEqualTo = (num1, num2) => {
  let result = num2 = num1 ? true : false;
  return result;
}
isEqualTo(11, 10);

// Ex #12
// setting-and-swapping
// Set num to 50. Set name to "seytech". Now swap num into name.

function settingAndSwapping( num, name){
  let swap = num;
   num = name
  console.log(swap, num)
}
 settingAndSwapping(50, "seytech");

//  EX #13
 //  EX #13
//  sOldEnoughToDrink
// Write a function called "isOldEnoughToDrink".
// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
// Notes:* The legal drinking age in the United States is 21.
// var output = isOldEnoughToDrink(22);
// console.log(output); // --> true;

const isOldEnoughToDrink = age =>{
  let result = age > 21 ? true : false;
  return result;
}
isOldEnoughToDrink(22);

// EX #14
// isOldEnoughToDrive
// Write a function called "isOldEnoughToDrive".
// Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.
// Notes:* The legal driving age in the United States is 16.
// var output = isOldEnoughToDrive(22);
// console.log(output); // --> true

const isOldEnoughToDrive = age =>{
  return age >  16 ? true : false;
}
isOldEnoughToDrive(22)

// EX #15
// isOldEnoughToVote
// Write a function called "isOldEnoughToVote".
// Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.
// Notes:* The legal voting age in the United States is 18.
// var output = isOldEnoughToVote(22);
// console.log(output); // --> true;

const isOldEnoughToVote = age => {
  return age  > 18 ? true : false;
}
isOldEnoughToVote(22);