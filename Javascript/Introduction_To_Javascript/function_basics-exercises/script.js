// function exercises


// this function takes in two parameters and returns the difference of the two;

function difference(a, b) {
   return a-b;
}

// this function takes in two parameters and returns the product of the two;

function product(a, b) {
  return a*b;
}

//this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

function printDay(num) {
    switch(num){
      case 1:
        return "Sunday"
        break;
      case 2:
        return "Monday"
        break;

      case 3:
          return "Tuesday"
          break;
          
      case 4:
        return "Wednesday"
        break;
        
      case 5:
        return "Thursday"
        break;
        
      case 6:
        return "Friday"
        break;
        
      case 7:
        return "Saturday"
        break; 
        
      default:
        return undefined;  
    }

    // OR

    let daysNumbers = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday"
    }

    return daysNumbers[num] || "Undefined";
}

// this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

function lastElement(arr) {
    return arr[arr.length - 1] || undefined;
}


// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

function numberCompare(num1, num2) {
    if (num1 > num2){
      return "First is greater" 
    }

    else if (num1 < num2){
      return "Second is greater" 
    }

    else{
      return "Numbers are equal"
    }
}

// this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount(str,letter) {
  let pattern = new RegExp(letter, "gi");
  let counted = (str.match(pattern)||[]).length;
  
  return counted;
  }

// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

function multipleLetterCount(str) {
  let obj = {};
  str.split('').forEach(i => {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  });

  return obj;

}

// this function should take in at most four parameters (an array, command, location, and value).
// If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
// If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

function arrayManipulation(arr, command, loc, value) {
  if(command == "remove" && loc == "end"){
    let removedEnd = arr.pop();
    return removedEnd;
  }
  
  else if(command == "remove" && loc == "beginning"){
    let removedBeginning = arr.shift();
    return removedBeginning;
  }
  
  else if(command == "add" && loc == "beginning"){
    arr.unshift(value);
    return arr;
  }
  
  else if(command == "add" && loc == "end"){
    arr.push(value);
    return arr;
  }

  return undefined;
}

function isPalindrome(str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}




