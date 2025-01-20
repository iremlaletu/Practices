const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

//solution 1 - with forEach - include method

function removeDupesFromArray0(arr){
    const newArr0 =[]

    arr.forEach(element => {
        if(!newArr0.includes(element)){
            newArr0.push(element)
        }
    });
    return newArr0
}

// include method is not efficient if you have more items in the array. cause include methods search whole array every time for check it is duplicate


//Solution 2 - with filter method initilize empty object

// We can use object to keep track of the items in the array that we've already seen. Cause If you look up the item in the object by name, there is no looping involved.

function removeDupesFromArray(arr){
    // create a new object to keep track of duplicates 
    const newArr = {}
    // use filter to loop thorugh each item in the arr
    return arr.filter(item => {
       if(!newArr[item]){ 
           newArr[item] = true //using [] notation
           return true
       }
       return false
    })
}
// bacon will place in the newArr, first index is beacon again. it will check the object then it'll see there is a bacon in newArr object and its value true, so wont be added.

console.log(removeDupesFromArray(eggScrambleRecipe));

// Solution 3 - Using Spread operator
function removeDupesFromArray(arr){
    return [...new Set(arr)];
}

console.log(removeDupesFromArray(eggScrambleRecipe));