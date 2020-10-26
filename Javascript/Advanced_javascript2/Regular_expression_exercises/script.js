// Write a function called countNumbers which accepts a string of numbers and returns the count of numbers between 0 and 9.

function countNumbers(nums) {
    let regex = new RegExp(/[0-9]/, 'g')
    let matches = nums.match(regex)
    if (matches){
        return matches.length;
    }
    return 0;

}

// Write a function called capitalSentence which accepts a string and returns another string with all the capital letters joined together.

function capitalSentence(str) {
    let capSentence = [];
    let regex = new RegExp(/[A-Z]/, 'g')
    let matches = str.match(regex);
    if(matches){
        return matches.join("");
    }

    return 0;
}

// Write a function caled isValidPassword, which accepts a string. If the string is longer than 7 characters and includes at least one special character (!,@,#, or $) , the function should return true. Otherwise, return false

function isValidPassword(str) {
    let regex1 = new RegExp(/!/, 'g');
    let regex2 = new RegExp(/@/, 'g');
    let regex3 = new RegExp(/#/, 'g');
    let regex4 = new RegExp(/$/, 'g');
    let matches = str.match(regex1 || regex2 || regex3 || regex4);
    if(matches && str.length >= 7){
        return true;
    }

    return false;
}

// The notorious Captain Schneider has given you a very straight forward mission. Any data that comes through the system make sure that only non-special characters see the light of day.

// Create a function that given a string, retains only the letters A-Z. Also, returns "Not a string!" if the entry type is not a string.

function nonSpecial(str){
    let regex = new RegExp(/^[A-Z]/, 'g')
    let matches = str.match(regex);
    if (matches){
        return matches.join("");
    }

    return "Not a string!";
}
