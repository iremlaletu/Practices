/* 6)
- Write a function so that detect when a word in a sentence begins and ends with a colon (:) and automatically replace that word with an emoji.
- These shortcodes allow users to add an emoji to their messages by typing a code rather than searching for an emoji from a list.
- For example, typing :smile: will replace that text with 😊
*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    if(!word.startsWith(":") && !word.endsWith(":")) return word;
    const slice = word.slice(1, -1)
    if(emojis[slice]){
        return emojis[slice]
    } else {
        return slice
    }
}
console.log(emojifyWord(":heart:"))
console.log(emojifyWord(":flower:"));

function emojifyPhrase(phrase){
    const splitedArr = phrase.split(" ")
    const searchedArr = splitedArr.map(word => emojifyWord(word))
    return searchedArr.join(" ")
}

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"))
console.log(emojifyPhrase("I :heart: :party:"))