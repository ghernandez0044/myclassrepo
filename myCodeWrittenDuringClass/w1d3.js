// Function called logBetweenStepper
// Takes 3 param
//min, max, step
// start at min and move closer to max by incrementing in step many numbers

// function logBetweenStepper(min, max, step){
//     for(let i = min; i <= max; i += step){
//         console.log(i);
//     }
// };

// logBetweenStepper(5, 9, 1);
// logBetweenStepper(2, 12, 3);


//Function Expression Syntax!

// ****Function Declarartion Syntax****
// function greeter(name){
//     return "Hello " + name + "!";
// }


// ****Function Expression Syntax****
// let greeter = function(name){
//     return "Hello " + name + "!";
// };

// console.log(greeter("Guillermo"));

//typeof, +, -, *, ; not first-class object

//Write a function that accepts an array of numbers and return the sum of all numbers in that array

// 1. Lok at each number n the array, add them all together and give a sum total of all those numbers

// -- iterate through the array somehow, likely with a loop
// -- want to create a new variable that can increase with each iteration
// -- return outside of the loop, return the new sum variable

// let arr = [10, 1, 2, 42, 77, 94]

// let sumArray = function(array){
//     console.log("List of nums: ", array)
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         console.log("Sum at start of loop iteration  ", sum)
//         let num = array[i];
//         console.log("Value of current element in array: ", num)
//         sum += num;
//         console.log("Total sum at the end of loop iteration  ", sum)
//     }
//     return sum;
// }

// console.log(sumArray(arr));


// let sumArray = (array) => {
//     console.log("List of nums: ", array)
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         console.log("Sum at start of loop iteration  ", sum)
//         let num = array[i];
//         console.log("Value of current element in array: ", num)
//         sum += num;
//         console.log("Total sum at the end of loop iteration  ", sum)
//     }
//     return sum;
// }

// console.log(sumArray);

// (ele) => ele + 1

// let greeter = (name) => "Hello " + name + "!"

//Mutability

// let name = "Biff"

// name[2] = "l"
// name[3] = "l"
// console.log(name);

// // Reassign our variables
// name = "Bill"
// console.log(name);

// let nameArr = ["B", "i", "f", "f"]
// console.log(nameArr)
// nameArr[2] = "l"
// nameArr[3] = "l"
// console.log(nameArr)

// let instructors = ["Bill", "Jojo", "Jesse", "Braxton", "Peter", "Charlie"]
// write a function that will remove elements from the end of an array until it is no onger above the maximum length

// let popped = instructors.pop()
// let shifted = instructors.shift()

// console.log(shifted)
// console.log(instructors)

// let culling = function(arr, maxLength){
//     while(arr.length > maxLength){
//         arr.pop()
//     }
// }

// let culling = function(arr, maxLength){
//     for(let i = maxLength - arr + 1; i < maxLength; i++){

//     }
// }

// culling(instructors, 1)
// console.log(instructors)

//NESTED LOOPS

//outer loop
// for(let i = 0; i < 4; i++){  // enter outer loop, i = 0
//     for(let j = 0; j < 3, j++) { //enter inner loop, j= 0, 1 ..
//         console.log(i, j)
//     }
// }

// let nestedArray = [
//     [1, 2, 3, 4],
//     [5, 6, 7],
//     [8, 9, 10],
//     [11, 12, 13]
// ]

// for(let i = 0; i < nestedArray.length; i++){
//     let subArray = nestedArray[i];
//     console.log("Current subarray; ", subArray)
//     for(let j = 0; j < subArray.length; j++){

//         console.log(subArray[j])
//     }
// }

// twoSum
// Write a function that will accept an array and a target number as param
// The function will return true if any two numbers in that array can add up
// to the target number

// [1, 3, 4, 5, 6, 2] => 3?

// examine each combination of two values in the array an calculate if they match
// our target
// -- write a function that can look every possible combo in our array
//-- if that target is found, return true. If we check every combo and 
// there is no match, return false



// let twoSum = (nums, target) => {
//     for(let i = 0; i < nums.length; i++){
//         let num1 = nums[i]
//         for(let j = i + 1; j < nums.length; j++){
//             let num2 = nums[j];
//             let result = num1 + num2 === target
//             console.log(num1, " + ", num2, " === ", target, "?", result)
//             if(num1 + num2 === target){
//                 return true 
//             }
//         }
//     }
//     return false;
// }

// console.log(twoSum([1, 3, 4, 5, 6, 2], 3))
// console.log(twoSum([1, 2], 4))

