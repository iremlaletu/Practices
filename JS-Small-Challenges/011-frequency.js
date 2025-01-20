/* 11)
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str){
    // initialize a new empty object to hold the letter counter
    const result = {} 
    //remove all spaces and lowercase all characters of the input str
    const newStr = str.toLowerCase().split(" ").join("")
   for(let i = 0; i < newStr.length; i++){
    // if the character is not the object "result", add it, give it a value of 1
        if(!result[newStr[i]]){
            result[newStr[i]] = 1
    // if the character is already in the object, increment that value    
        }else {
            result[newStr[i]] += 1
        }
    }
    return result
}

console.log(countChars("Missisipi meow"));