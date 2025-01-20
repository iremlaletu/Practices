/* 3)
- Write a function that takes in a string of letters and returns a sentence in which every other letter is capitalized.
- Example input: "I'm so happy it's Monday"
- output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    // assemble each char back inti newStr
    let newStr = ""
    for(let i = 0; i < str.length; i++){ // loop through the string
        if(i % 2 === 0){ // upper case every char with an even index
            newStr += str[i].toUpperCase()
        }else{
            newStr += str[i]
        }
    }
    
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
// call whenever you need it and give argument

/* 4)
- Write a function that will capitalize every word in a sentence.
- Example Input: "everything, everywhere, all at once"
- Output: "Everything, Everywhere, All At Once"
*/

// Capitalized the first letter of the word .

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);
}

// reusing the function for capitalized every word in a sentences.

function toTitleCase(str){
    //split sentences into an array of words
    const sentencedArr = str.split(" ") // initilize the new array (split methods str => array)
    
		//loop through the arrays of words and capitalizedWord func on each word
		const capitalizedArr = sentencedArr.map(word => capitalizeWord(word))
    
		// use join built in methods to back in string
		return capitalizedArr.join(" ")
}

console.log(capitalizeWord("pumpkin"))
console.log(toTitleCase("pumpkin pranced purposefully across the pond"))