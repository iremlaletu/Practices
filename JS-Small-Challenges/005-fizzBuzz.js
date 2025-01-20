/* 5)
- Write a program to grant special bonuses to all employees based on their employee ID numbers!
- Let's say you have 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is:
    - Divisible by 3 - Vacation!
    - Divisible by 5 - $100,000 bonus!
    - Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
    - Not divisible by 3 or 5 - :(
- Write a program to loop through all the ID numbers and print their prize.
- Your function's output should look something like this:
    - 1 - :(
    - 2 - :(
    - 3 - Vacation!
    - 4 - :(
    - 5 - $100,000 bonus!
*/

// 1- NO LOOP / NOT RENDER ALL NUMBERS AT ONCE / JUST GIVEN BY USERS

let employeeIDInfo = Number(prompt("Please, provide an employee ID: ", "0 - 100"))

function awardBonuses(ID){
    if(isNaN(ID) || ID < 1 || ID > 100){
        console.log("Please provide valid ID number")
    }else if(ID % 15 === 0 ){
        console.log(`The employee ID number: ${ID} JACKPOT wins $1 Million and a Yacht!`)
    }else if (ID % 5 === 0 ){
        console.log(`The employee ID number: ${ID} wins $100.000 bonus`)
    }else if (ID % 3 === 0){
        console.log(`The employee ID number: ${ID} wins vacation`)
    }else{
        console.log(`The employee ID number: ${ID}: No prize :( `)
    }
}

awardBonuses(employeeIDInfo);//calling the function given argument

// 2- USING LOOP / NO PROMPT / RENDERS ALL NUMS & RESULT IN CONSOLE

function awardBonuses(){
    // loop through 1 - 100
    for(let i = 1; i <= 100; i++){
        // is divisible by 3 & 5? 
        if(i % 15 === 0){
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);
        } else if(i % 3 === 0){
            console.log(`${i} - Vacation!`);
        } else if(i % 5 === 0){
            console.log(`${i} - $100,000 bonus!`);
        } else {
            console.log(`${i} - :(`);
        }  
    }
}
awardBonuses();