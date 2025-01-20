/* 13)
- Your teacher wants the know how many new students have attended the event
- She has an array of first-time attendees for each month of the year. 
- Help her find the total number of attendees!
- Your function should take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

// Solution 1 loop

const studentCount1 = [ 50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110 ];

function sumArray(arr){
    let result = 0
    for(let i = 0; i < arr.length; i ++){
        result += arr[i]
    }
    return result

}
console.log(sumArray(studentCount1))

// Solution 2 forEach

const studentCount2 = [ 50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110 ];
function sumArray(arr){
    let result = 0
    arr.forEach(element => result += element);
    return result
}
console.log(sumArray(studentCount2))


// Solution 3 reduce
const studentCount3 = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

function reductor (num, num1){
    return num + num1
}
let result = studentCount3.reduce(reductor)
console.log(result)

// Solution 4 rest parameter

let studentCount4 = sum(50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110)

function sum(...args){
    let total = 0;
    for ( let num of args) total += num
    return total
}

console.log(studentCount4)