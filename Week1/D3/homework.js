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
Create an array containing the first 5 positive numbers.
*/

let array = [1, 2, 3, 4, 5]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let me = {
    name: 'Viljams',
    surname: 'Carevs',
    email: 'william.carevs@gmail.com',
    age: 21
}


/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

me.license = true


/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete me.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let me2 = {
    name: 'Viljams',
    surname: 'Carevs',
    email: 'fabler65@gmail.com',
    age: 21
}
if(me.email !== me2.email) {
    console.log('me1 and me2 have different emails')
} else {
    console.log('me1 and me2 are the same')
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 51
const shippingPrice = 10
let totalCost

if(totalShoppingCart > 50) {
    totalCost = totalShoppingCart
} else {
    totalCost = totalShoppingCart + shippingPrice
}
console.log(totalCost)


/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

const discount = 0.2
if(totalShoppingCart > 50) {
    totalCost = totalShoppingCart*(1-discount)
} else {
    totalCost = (totalShoppingCart*(1-discount)) + shippingPrice
}
console.log('Price with Black Friday discount is', totalCost)


/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
    brand: 'BMW',
    model: 'M5',
    licensePlate: 'A23TY6'
}

let licensePlates = ['B21POL', 'A23INM', 'BFI798', 'C89O0P', '12BMX3']

let car1 = Object.assign({}, car)
car1.licensePlate = licensePlates[0]
let car2 = Object.assign({}, car)
car2.licensePlate = licensePlates[1]
let car3 = Object.assign({}, car)
car3.licensePlate = licensePlates[2]
let car4 = Object.assign({}, car)
car4.licensePlate = licensePlates[3]
let car5 = Object.assign({}, car)
car5.licensePlate = licensePlates[4]
console.log(car1.licensePlate, car2.licensePlate, car3.licensePlate, car4.licensePlate, car5.licensePlate)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [car, car1, car2, car3, car4, car5]


/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent = carsForRent.slice(1,-1)
console.log(carsForRent)
// Or use shift and pop methods


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log(typeof(car.licensePlate), typeof(car.brand))


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [car2, car3, car5]

let totalCars = carsForRent.length + carsForSale.length
console.log(totalCars)


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

for(car of carsForSale) {
    console.log('Brand:', car.brand, 'Model:', car.model, 'Plate:', car.licensePlate)
}


/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
