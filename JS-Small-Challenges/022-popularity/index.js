import postData from "./data.js";

/* 22- Popularity Contest 

- Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 
- Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 
- In data.js you'll find a list of Iggy's recent posts. 

Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

function calcAverageLikes(data){
  const total = data.reduce((acc, curr) => {
    return acc + curr.likes
  }, 0);
  return (total / data.length).toFixed(2)
} 

console.log(calcAverageLikes(postData)) // returning here where the function called.
                                        // giving the argument "postData" from data.js
/*
REDUCE
- The plan is to reduce to a single total.
- Calling the reduce on data which is "postData" imported from data.js
- Reduce takes two parameters callback "function" and "accumulator" which I will initialize to zero.
- Let's open the function, the accumulator and the current item in the array. (acc, curr)
- We use reduced to Loop through the array it will return to us the "current value" which is what accumulator represents. in other words, it's going to keep adding to the value that we give it as the second argument and will return that current value as this accumulator element every time and then current represents each item in our array as we are looping through it, so What value do we want to add to our accumulator each time? we're looking at these objects as our current values then we know we want to Target the "likes property". So inside of reduce, I'm going to want to add "curr.likes" to my accumulator. 
- I have my running total and for each item in the array I want to add curr.likes to that running total.
- Running total we start at zero, we add 348 which we take a look at data.js that is the first total of likes that we have and then the next accumulator value is $348 + 102 until we've gone all the way through the list and we end up with our total which is 2,426
*/