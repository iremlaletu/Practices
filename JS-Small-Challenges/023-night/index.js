import podcasts from "./data.js";

/* Night at the Scrimbies 

- It's time for the Scrimbies, a prestigious award show for podcast hosts. We need to assemble a list of podcast hosts so we can start handing out awards. 

- Write a function that takes in the podcast data and returns a flat array of podcast hosts. There are quite a few ways to approach this, but try solving the problem using reduce(). 

- Once you have a flat array of hosts, write a second function to randomly assign each host a prize from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 

// data.map(items => items.hosts).flat() => normally that's the one, but challenge asks me to use with reduce

const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
    // reduce the podcasts data down to a list of hosts
    return data.reduce((acc, curr) =>{
        return acc.concat(curr.hosts) //you can use spread operator[...acc, ...curr.hosts]
    }, [])
}

function assignAwards(data){
    const hosts = getHosts(data);
    return hosts.map(host => {
        const randIndex =   Math.floor(Math.random() * awards.length)
        return `${awards[randIndex]} ${host}`
    })
}


console.log(getHosts(podcasts));
console.log(assignAwards(podcasts));

// in this challenge. reduce took 2 param. First is the callback function. Second is accumulator value which we're going to add to. (in our case acc value is the [] array. we're going to keep adding to empty array)