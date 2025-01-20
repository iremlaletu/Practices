import mediaData from "./data.js";

/* Find All Unique Tags 

- The first step is to collect all the tags from our data into a new array. Then we'll need to filter out the duplicate tags. 

- Write a function that takes in the media data and returns a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

// SOLUTION 1

function getUniqueTags(data){
    //use map to loop through the data and get a new array of tags
    //flatten the tags array with .flat()
    const tags = data.map(item => item.tags).flat() 
    //create a new array uniqueTags to hold the unique values
    const uniqueTags = []
    //loop through the tags array
    tags.forEach(tag => { //is the element already in the uniqueTags arr? 
        if(!uniqueTags.includes(tag)){ 
            uniqueTags.push(tag)// no: push into arr
        }
    });
    return uniqueTags
 
}

//console.log(getUniqueTags(mediaData));

// include method is not efficient if you thousand items in the array. cause include methods search whole array every time for check it is duplicate. There is a nested loop here that's why it is not optimized. imagine that you've thousands tags and thousand duplicate. so every time in tag arrays we are looping through the unique tag arrays for looking specific tag.

// Should be a new way to look up directly, object can do this for us.

// SOLUTION 2

function getUniqueTags(data){
    const tags = data.map(podcast => podcast.tags).flat();
    const uniqueTags = {};
    
    // filter tags arr
    return tags.filter(tag => {
         // look up the tag in the uniqueTags obj
         if(!uniqueTags[tag]){
            uniqueTags[tag] = true; //using [] notation
            // if it's not there, we have a unique item so far
            // put the item in our object with a value of true
            
            return true; // returning true because of the way the filter works
         }
         return false;
    });
}

console.log(getUniqueTags(mediaData));