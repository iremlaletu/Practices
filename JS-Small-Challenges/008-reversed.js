/* 8)
- Write a function that takes in a string and returns the reverse of that string. An interviewer may want to check if you know your string methods, or may want to know if you can reverse a string manually.
- Practice both ways!

- Example input: !htrae ot emocleW
- output: Welcome to earth!

PS: reverse ⇒ is an array methods. you can’t use on ‘string’, gives you an error “is not a function”
*/

const title = ":htraE no od ot ffutS";

const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

//REVERSE A STRING USING THE METHOD
	function reverseString(str){
    return str.split('').reverse().join(""); 
 // title is string, first, we got to change to array using "split" method for this.
}
	console.log(reverseString(title))

//REVERSE A STRING MANUALLY
function reverseString(str){
    // initialize a new empty string
    let reversedStr = ""
     // loop through original string backwards, adding each character to the new string
    for(let i = str.length -1; i >= 0; i --){
        reversedStr += str[i]
    }
    return reversedStr
}
	console.log(reverseString(title))
	console.log(reverseString("irem"))

//Now we'll reverse all strings in an array. Write a function that takes in an array of strings and returns a new array with all strings reversed.

function reverseStringsInArray(arr){
    return arr.map(item => reverseString(item));
}
	console.log(reverseStringsInArray(messages))

// The last part you can do with forEach method as well.
function reverseStringsInArray(arr){
    let newArr =  []
    arr.forEach( txt => newArr.push(reverseString(txt)));
    return newArr
}