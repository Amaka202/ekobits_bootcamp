export const todos = [
    "wash plate", "bicycle", "eat food", "get healthy", "brush mouth", "code", "learn driving"
]

const numList = [422, 136, 524, 85, 96, 719, 85, 92, 10, 17, 312, 542, 87, 23, 86, 191, 116, 35, 173, 45, 149, 59, 84, 69, 113, 166]

// initialize an empty array
let sortedList = []
// initialize a variable and set to zero
let addedOddNum = 0

// loop through the origina list to sort the odd numbers

for(let i = 0; i < numList.length; i++){
    // add an if else stement to monitor the lenth of the sortedList
    if (sortedList.length === 5){
        break;
    
    // use else statement to select the numbers that are odd numbers
    }else if(numList[i] % 2 === 1){

        // push those number to the emtpty list you created
        sortedList.push(numList[i] )
    }
}

// loop through the new list you created and add them up
console.log(sortedList)
sortedList.forEach(val => {
    addedOddNum += val;
})

console.log(addedOddNum)