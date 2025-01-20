import podcasts from "./data.js";

/* 🌴 Save the Weekend 🌴

- Your best friend is a copywriter who writes product descriptions for a living. You want to use your hacking skills to help them automate their job so you both can spend the weekend on a tropical island. 

- Use array methods and the existing podcast data to write a function that can generate a description for each podcast. 
- Add the description as a new property on each podcast object, and return a new podcast array where each podcast has a description. 

- Each description should look like this: 
[
    {
        id: 1,
        title: "Irem's Podcast", 
        ...
        description: "Irem's Podcast is a 50 minute education podcast hosted 
        by Irem Turan
        ."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/ 

function createDescriptionsFor(data){
    // map through the data
   return data.map(podcasts => {
    return { //Add the description as a new property on each podcast object
        ...podcasts,//using the spread method to add existing objects
        description: `${podcasts.title} is a ${podcasts.duration} minute ${podcasts.genre} podcast hosted by ${podcasts.hosts[0]}.`//adding the new property "description"
        // use title, duration, genre and host data to make description
    };
   });
}

console.log(createDescriptionsFor(podcasts))

// using map because we are returning a new array of objects containing our new property