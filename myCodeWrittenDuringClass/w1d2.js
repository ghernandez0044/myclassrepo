// let string = "hello";
// console.log(string.length);
// console.log(string[5]);
// console.log(string[string.length - 1]);

// let playoffs = "playoffs"

// console.log(playoffs.indexOf("a"));
// console.log(playoffs.indexOf("f, 6"));


// function blankFunc() {
//     console.log("Hi");
//     return "there";
// };

// console.log(blankFunc());


// function helloWorld(){
//     console.log("Hello world!");
// };

// console.log(helloWorld());


// function greetPerson(name){
//     let sentence = "Hello " + name;
//     return sentence;
// }

// console.log(greetPerson("Guillermo"));


// function sum(num1, num2){
//  return num1 + num2;

// }

// let three = sum(1, 2);

// console.log(3 === three);


//Conditionals; 

// function isFive(number){
//     if(number === 5){
//         return "Number is five";
//     } else if(number > 5){
//         return "Number is greater than 5";
//     } else if(number < 5){
//         return "Number is less than 5";
//     }
// }

// console.log(isFive(5));
// console.log(isFive(6));
// console.log(isFive(4));



// function looper(numberOfLoops){
//     let i = 0;
//     while(i < numberOfLoops){
//         console.log("Loop running");
//         i++;
//     }
//     return "function completed";
// };

// function looper(numberOfLoops){
//     for(let i = 0; i < numberOfLoops; i++){
//         console.log("Loop running");
//     }
//     return "function completed";
// };

// looper(5);



// function charsInAString(string){
//     for(let i = 0; i < string.length; i++){
//         let letter = string[i];
//         console.log(letter);
//     }
//     return "function is complete";
// };


// function charsInAString(string){
//     let i = 0;
//     while(i < string.length){
//         let letter = string[i];
//         console.log(letter);
//         i++;
//     }
//     return "function is complete";
// };

// charsInAString("Journey Before Destination")

// Arrays

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// let banana = ["this", "array", "holds" "strings"];
// console.log(banana.indexOf("array"));

// let papaya = [
//     42,
//     false,
//     "Let's go Pens!",
//     undefined,
//     null,
//     [1, 2, 3]
// ];

// console.log(papaya);
// console.table(papaya);

// function arrayJoiner(arr1, arr2){
//     let newArr = arr1.concat(arr2);
//     return newArr;
// }

// console.log(arrayJoiner([1, 2, 3], [4, 5, 6]));

// function elementFinder(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         return arr.indexOf(target);
//     }
// };

function elementFinder(arr, target){
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(element === target){
            return i;
        }
    }
    return -1;
}


console.log(elementFinder([1,2, 3, 4, 5], 3));