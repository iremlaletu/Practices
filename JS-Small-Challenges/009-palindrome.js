/* 9)
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

//1- Using built-in methods
function isPalindrome(str){
    let reversedStr = str.split('').reverse().join("");
    return str === reversedStr
}
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));

// 2- Manually, using loop

function isPalindrome1(str){
    // reverse the word using a backward for loop to create a new string
    let reversedStr = ""
    for(let i = str.length -1; i >= 0; i --){
        reversedStr += str[i]
    }
    // compare the new string to the original word
    if(str === reversedStr){
        return true
   }else{
       return false
   }
}
console.log(isPalindrome1("octopus"))
console.log(isPalindrome1("madam"));