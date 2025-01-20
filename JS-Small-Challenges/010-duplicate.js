/* 10)
- Create a function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/

const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";
 
function removeDupeChars(chars){
    let removedDup = "";
    for(let i = 0; i < chars.length; i ++){
        // for every character in the string, check: is it in "removedDup"
        // if no => add it
        // if yes => keep going the loop
        if(!removedDup.includes(chars[i])){
            removedDup += chars[i]
        } 
    }
    return removedDup
}

console.log(removeDupeChars(password));