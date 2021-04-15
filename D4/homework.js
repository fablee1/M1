/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
console.log('N1')
const area = function(l1, l2) {
    return 'The area of the rectangle is ' + l1*l2
}
console.log(area(12,12), '\n')

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log('N2')
const crazySum = function(i1, i2) {
    return i1===i2 ? (i1+i2)*3 : i1+i2
}
console.log(crazySum(10,9), '\n')

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
console.log('N3')
const crazyDiff = function(num) {
    return num>19 ? (num-19)*3 : num-19
}
console.log(crazyDiff(18), '\n')

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
console.log('N4')
const boundary = function(n) {
    return (20<n && n<=100 || n===400) ? true : false
}
console.log(boundary(400), '\n')

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log('N5')
const strivify = function(str) {
    return str.indexOf('Strive') === 0 ? str : 'Strive ' + str
}
console.log(strivify('Strive hello\n'))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
console.log('N6')
const check3and7 = function(num) {
    let is3 = num%3===0 ? true : false
    let is7 = num%7===0 ? true : false
    return `Number ${num} is a multiple of 3: ${is3}, is a multiple of 7: ${is7}`
}
console.log(check3and7(21), '\n')

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
console.log('N7')
const reverseString = function(string) {
    let reversed = ''
    for(let l=string.length-1; l>=0; l--) {
        reversed+=string[l]
    }
    return reversed
}
console.log(reverseString('Strive'), '\n')


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
console.log('N8')
const upperFirst = function(string) {
    let stringArray = []
    for(word of string.split(' ')) {
        stringArray.push(word[0].toUpperCase() + word.slice(1))
    }
    return stringArray.join(' ')
}
console.log(upperFirst('Hello how are you doing?'), '\n')


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
console.log('N9')
const cutString = function(string) {
    return string.slice(1, -1)
}
console.log(cutString('Hello'), '\n')


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
console.log('N10')
const giveMeRandom = function(n) {
    let randNums = []
    for(let x=0; x<n; x++) {
        randNums.push(Math.round(Math.random()*10))
    }
    return randNums
}
console.log(giveMeRandom(15))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/