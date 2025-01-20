/* Find anagrams in an array   

- When two words have the exact same letters, they are anagrams. 

- Each item in the anagrams array is an anagram of a teacher's
first and last name, plus the phrase "Scrimba teacher". 

- Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = [
    "moz biblical torchbearers",  
    "it's razorbill beachcomber", 
    "och mcrobbie trailblazers", 
    "bib chorizo cellarmaster", 
    "thor scribble carbimazole", 
    "zilla borscht abercrombie", 
    "brazil scorcher batmobile", 
    "dame shelburne characterizing", 
    "uber englishman characterized", 
    "agnes rhumbline characterized", 
    "rehab scrutinized charlemagne", 
    "dreams zurich interchangeable", 
    "bam hamster technocratic", 
    "mechatronic masterbatch", 
    "bam ratchet mechatronics"
]

function sortPhrase(phrase){
    return phrase.toLowerCase().split('').sort().join('').trim();
    // to compare, each anagram in the anagrams array and the anagram we're passing in
    // first, make it to lowercase
    // split into array to grabbing each character
    // sorting character the alphabetic order
    // join back to string
    // trim the spaces
}

function isAnagramInArray(anagram, arr){
    return arr.filter(item => {
        // use sortPhrase() to sort both the input phrase and the current phrase in the array
        const word1 = sortPhrase(anagram);
        const word2 = sortPhrase(item);
        // compare the two words to return true or false
        return word1 === word2;
        // if it's true, the current array item will be included in the new array that filter returns to us. if it's false wont be included.
    })
}

//console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));
console.log(isAnagramInArray("treat", ["tater", "tree", "teart", "tetra", "heart", "hamster"]))
