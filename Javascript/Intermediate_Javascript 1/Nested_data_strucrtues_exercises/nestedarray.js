//  Given the following array, write a function called printEvens that console.logs all of the even numbers

let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

function printEvens() {
let emptyArr = []
for(let i = 0; i < nestedArr.length; i++){
    for(let j = 0; j < nestedArr[i].length; j++){
        if(nestedArr[i][j] % 2 == 0){
            emptyArr.push(nestedArr[i][j]);
        }
    }
}

return emptyArr;

}

// Given the following array, write a function called sumTotal returns the sum of all numbers in the array

let nestedArr1 = [[1, 2], [3, 4], [5, 6]];

function sumTotal() {
    let count = 0;
    for(let i = 0; i < nestedArr1.length; i++){
        for(let j = 0; j < nestedArr1[i].length; j++){
            console.log(nestedArr1[i][j]);
            count += nestedArr1[i][j];
        }
    }
    return count;
}


// Given the following array, write a function called countVowels, which returns the count of all of the vowels in each string regardless of case. To see if a value is an array, you can not use typeof since that will return 'object', so one way to do this is by using the Array.isArray function.

function countVowels(str) {
        let newStr = str.split("");
        let count = 0;
        var vowel_list = 'aeiouAEIOU';
        newStr.forEach(val => {
            if(vowel_list.indexOf(val) !== -1){
                count += 1;
            }
        }) 
        return count;  
}



// Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

function rotate(arr, num) {
    // let _arr = arr.splice();

    for(let i = 0; i < num; i++){
        let lastIndex = arr.pop();
        arr.unshift(lastIndex);
    }

    return arr;
}

// Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".