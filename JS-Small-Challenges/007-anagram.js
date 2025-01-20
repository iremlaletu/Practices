/* 7)
- Anagrams are groups of words that can be spelled with the same letters.
- For example, the letters in "pea" can be rearrange to spell "ape", and the letters in "allergy" can be rearranged to spell "gallery."
- Write a function to check if two strings of lowercase letters are anagrams.
- Return true if the word is an anagram. Return false if it isn't.

- Example input: "allergy", "gallery"
- output: true

- Example input: "rainbow", "crossbow"
- output: false
*/

function isAnagram(str1, str2){
    if(str1.length !== str2.length) return "Not even same length";
    const newStr1 = str1.split('').sort().join('')
    const newStr2 = str2.split('').sort().join('')
    if ( newStr1 === newStr2 ){
        return "It's Anagram"
    }else {
        return "It is NOT Anagram"
    }

}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("inch", "chit"));
console.log(isAnagram("night", "thing"));
console.log(isAnagram("treasure", "measure"));