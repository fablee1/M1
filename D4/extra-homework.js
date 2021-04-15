/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
console.log('N11')
const checkArray = function(array) {
    let sum = 0
    for(num of array) {
        num>5 ? (console.log(`${num} is bigger than 5.`), sum+= num) : console.log(`${num} is less than or equal to 5`) 
    }
    return sum
}
console.log(checkArray([2, 5, 7, 8, 14, 5, 90, 1, 0]), '\n')


/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/
console.log('N12')
let shoppingCart = [
    {
        id: 1,
        name: 'apple',
        price: 0.20,
        quantity: 10
    },
    {
        id: 2,
        name: 'pear',
        price: 0.35,
        quantity: 5
    },
    {
        id: 3,
        name: 'banana',
        price: 0.50,
        quantity: 15
    }
]
const shippingCartTotal = function(cart) {
    let due = 0
    for(obj of shoppingCart) {
        due+=obj.quantity
    }
    return due
}
console.log(`${shippingCartTotal(shoppingCart)} items to be shipped.`, '\n')


/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/
console.log('N13')
const addToShoppingCart = function(obj) {
    shoppingCart.push(obj)
    return shoppingCart.length
}
console.log(addToShoppingCart({ id: 4, name: 'grapes', price: 1, quantity: 3}), '\n')


/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/
console.log('N14')
const maxShoppingCart = function(cart) {
    let mostExpensive = cart[0]
    for(item of cart.slice(1)){
        if(item.price>mostExpensive.price) {
            mostExpensive = item
        }
    }
    return mostExpensive
}
console.log(`Item ${maxShoppingCart(shoppingCart).name} is the most expensive item, with a price of ${maxShoppingCart(shoppingCart).price}$`, '\n')


/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/
console.log('N15')
const latestShoppingCart = function(cart) {
    return cart[cart.length-1]
}
console.log(`The last item is ${latestShoppingCart(shoppingCart).name}, with a price of ${latestShoppingCart(shoppingCart).price}$`, '\n')

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/
console.log('N16')
const loopUntil = function(x) {
    let count = 0
    while(count<3) {
        let rnum = Math.random()*9
        if(rnum>x) {
            count++
        } else {
            count = 0
        }
        console.log(Math.round(rnum))
    }
    return 'Finished loop'
}
console.log(loopUntil(3), '\n')


/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/
console.log('N17')
const average = function(array) {
    let sum = 0
    let count = 0
    for(num of array) {
        if(typeof num == 'number') {
            sum+=num
            count++
        }
    }
    return sum/count
}
console.log(`Average value is ${average([1, 5, 'hello', 7, 2])}`, '\n')


/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */
