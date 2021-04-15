/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 
1. numbers - just a number datatype, it represents a regular number with what we count, the datatype can hold decimal numbers, negative numbers 0 1 -1 100 100.2039 and etc
2. strings - this datatype can hold a mix of any characters, it just a piece of text, or for example a message that you can send to someone, it can have characters numbers emojis special character and etc.
3. booleans - its basically a yes or a no, but in programming its true and false, just represents a 0 or 1
4. objects - for example lists of something or key value dictionaries
5. special ones - undefined, means there is nothing assigned to it and null, means that the variable or value was never initialized
*/

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* 
A variable is like a container that can hold anything you want to store in it, so basically a number or a boolean or a string, list and etc
*/

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* console.log(12+20) */

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* let x = 12 */

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

/* let name = 'John Doe' */

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

/*
let x = 12
console.log(12 - x)
*/

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* 
let name1 = 'john'
let name2 = 'John'
console.log('name1 is different from name2', name1 === name2)
console.log('name1 and name2 are equal if both lowercase', name1.toLowerCase()===name2.toLowerCase())
*/

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/*
let numberWords = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
}

let x = 5

console.log(x, 'is', numberWords[x])

OR with if statements

let x = 4
let numberName

if(x===0){
    numberName = 'zero'
}else if(x===1){
    numberName = 'one'
} else if(x===2){
    numberName = 'two'
} else if(x===3){
    numberName = 'three'
} else if(x===4){
    numberName = 'four'
} else if(x===5){
    numberName = 'five'
} else if(x===6){
    numberName = 'six'
} else if(x===7){
    numberName = 'seven'
} else if(x===8){
    numberName = 'eight'
} else{
    numberName = 'nine'
}
console.log('Number', x, 'is', numberName)
*/

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* 
let someBool = true
let number = 16
let variable
number > 15 ? variable = 10 : variable = 100
console.log(variable)
*/

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
