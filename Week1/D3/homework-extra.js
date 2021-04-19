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
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let reverseArray = []
let array = [1, 3, 5, 2, 4, 10, 15]

for(let x=array.length-1; x>=0; x--) {
    reverseArray.push(array[x])
}
console.log(reverseArray)


/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

console.log(Math.max(...array))


/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log(Math.min(...array))


/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

console.log(array.filter(num => num % 2 === 0))

// OR

let evens = []
for(num of array) {
    if(num%2===0) {
        evens.push(num)
    }
}
console.log(evens)


/* EXERCISE 5
Write the code to delete even entries from an array.
*/

for(let i=0; i<array.length; i++) {
    if(array[i]%2===0) {
        array.splice(i, 1)
        i=0
    }
}
console.log(array)


/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let string = 'HELLO my dear friends'
const vowels = 'aeiou'
for(letter of string) {
    if(vowels.includes(letter.toLowerCase())) {
        string = string.replace(letter, '')
    }
}

console.log(string)


/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

for(let x=0; x<array.length; x++) {
    array[x]++
}
console.log(array)


/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let words = ["strive", "is", "great"]
for(let x=0; x<words.length; x++) {
    words[x] = words[x].length
}
console.log(words)


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/