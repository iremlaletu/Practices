/* 1)
- Write a function that should take in a sentence and return the same sentence in all caps with an exclamation point (!) at the end. Use JavaScript's built in string methods.
- If the string is a phrase or sentence, add a 😱 emoji in between each word.
- Example input: "Hello"
- Example output: "HELLO!"
- Example input: "I'm almost out of coffee"
- Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

function panic(str){
    return str.toUpperCase().split(' ').join(" 😱 ") + "!"
}
console.log(panic("I'm almost out of coffee"))
console.log(panic("Winter is coming"))
console.log(panic("hello"))

/* 2)
- Write a function that takes in a sentence and returns a new sentence in all lowercase letters with "shh..." at the beginning.
- The function should also remove an exclamation point at the end of the sentence, if there is one.
- Example input: "The KITTENS ARE SLEEPING!"
- Example output: "shh... the kittens are sleeping"
*/

function whisper (str){
    if(str.endsWith("!")){
       return "shh... " + str.slice(0, -1).toLowerCase()
    } 
    return "shh..." + str.toLowerCase()
}

console.log(whisper("PLEASE STOP SHOUTING!"))
console.log(whisper("MA'AM, this is a Irem!"))

