// GROCERIES PROBLEM

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

/* 1. Understand
  
-- func + helper func
        1. helper func takes n an array that returns
        total cost
        2. main func takes in 2D array, returns the
        index of subarray with highest cost
            we're sending each array inside the 2D
            array up to the helper func
            returning the index of whixh one comes 
            back with highest value

   2. Plan
    costOfGroceries(helper){
        need totalCost holding variable, loop array,
        if-item-then add amount to cost variable,
        return cost after loop

    mostExpensiveGroceries(main){
        loop the 2D array, pass each array up to 
        the helper func
    }
    }

*/


function costOfGroceries(groceries){
    let totalCost = 0
    for(let i = 0; i < groceries.length; i++){
        let item = groceries[i]
        if(item === "butter"){
            totalCost += 1
        }
        if(item === "eggs"){
            totalCost += 2
        }
        if(item === "milk"){
            totalCost += 3
        }
        if(item === "bread"){
            totalCost += 4
        }
        if(item === "cheese"){
            totalCost += 5
        }
    }
    return totalCost
};

// console.log(costOfGroceries(groceriesA))
// console.log(costOfGroceries(groceriesB))


// function mostExpensiveGroceries(groceriesList){
//     for(let i = 0; i < groceriesList.length; i++){
//         for(let j = 0; j < groceriesList[i].length; j++){
            
//         }
//     }
// }

function mostExpensiveGroceries(groceriesList){
    let highCost = 0
    let highestCostIndex = 0

    for(let i = 0; i < groceriesList.length; i++){
        let cost = costOfGroceries(groceriesList[i])
            if(cost > highCost){
                highCost = cost
                highestCostIndex = i
            }
    }
    return highestCostIndex
}


// console.log(mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]));

