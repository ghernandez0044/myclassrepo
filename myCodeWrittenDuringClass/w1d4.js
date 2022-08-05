// // Remove LAst Vowel

// // Identify last vowel in word, remove that vowel, and return 
// // that vowel
// // how to approach
// // -- find a way to identify if some character is a vowel
// // -- aeiouAEIOU ->
// // how do we find the last vowel?

// function isVowel(char){
//     let vowels = "aeiouAEIOU";
//     return vowels.includes(char);
// }

// let removeLastVowel = (word) => {
//     let wordArr = word.split("");
//     // console.log("Word split into an array: ", wordArr);
//     for(let i = wordArr.length - 1; i >= 0; i--){
//         let currentChar = wordArr[i];
//         // console.log("current character: ", currentChar)
//         if(isVowel(currentChar)){
//             wordArr.splice(i, 1)
//             // console.log("Words array after splicing out last vowel: ", wordArr);
//             let joined = wordArr.join("");
//             // console.log("Joined word: ", joined);
//             return joined;
//         }
//         return word;
//     }
// }


// console.log(removeLastVowel("bootcamps"));

// HELPER FUNCTIONS

// function indexRemover(arr, index){
//     return arr.splice(index, 1);
// };

// ATM 
// Deposit? 


function deposit(balance, number){
    balance += number;
    return balance;
}

function withdraw(balance, number){
    if(number > balance){
        console.log("Balance not high enough");
        return balance;
    }
    balance -= number;
    return balance;
};

let showBalance = function(balance){
    console.log("Current balance is: ", balance)
}


let transaction = (balance, type, amount) => {
    if(type === "deposit"){
        let newBalance = deposit(balance, amount)
        showBalance(newBalance);
        return newBalance
    }
        else if(type === "withdraw") {
            let newBalance = withdraw(balance, amount)
            showBalance(newBalance)
            return newBalance
        }
        else if(type === "show balance"){
            showBalance(balance);

        }
     else {
        console.warn("ERROR: INVALID INPUT");
        return "bad";
    }
}


transaction(10, "deposit", 5);