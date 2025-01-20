import shoppingCart from "./data.js";

// CHALLENGE - 1

/*  
- Use reduce() to total the groceries. 
- Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr){
    // calling the reduce on my "arr"`
    const total = arr.reduce((acc, curr) => { // creating the anonymous function
        return acc + curr.price
        //reduce can take function which I created anonymous and starting value which is 0
    }, 0)
    return total.toFixed(2)
}

console.log(total(shoppingCart));

// And function can take 4 parameter but I only need 2 (acc is the running total, thing that we are going to built upon, curr is the my value element which is price in the object)

// The idea with reduce is that I'll use callback to loop through the values in the array "arr", add them to our initial value until I'll reduced the array down to single value.


// CHALLENGE 2

/*
Use reduce() and only reduce() to calculate and return the total cost of only the savory items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    return arr
    .filter(item => item.type === "savory")
    .reduce((acc, curr) => {
        return acc + curr.price
    }, 0)
}

console.log(totalSavory(shoppingCart));