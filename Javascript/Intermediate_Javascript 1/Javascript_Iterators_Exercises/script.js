//  Write a function called double which accepts an array. The function should return a new array with all of the values doubled.

function double(arr) {
    let newArr = []
    arr.forEach((val) => {
        let multVal= val * 2;
        newArr.push(multVal);
    });
    return newArr;
}

// Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.

function printFirstAndLast(arr) {
    let firstAndLast = [];
    arr.forEach((val)=>{
        let valArr = val.split("");
        firstAndLast.push(valArr[0] + valArr[valArr.length-1]);
    })
    return firstAndLast;
}

// Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.

function addKeyAndValue(arr, key, value) {
    let newArr = [];
     arr.forEach(val => {
         val[key] = value;
         newArr.push(val);
     });
     return newArr;
}

// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:


function valTimesIndex(arr) {
    return arr.map((val, index) => {
        return val * index;
    });
}

// Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

function extractKey(arr, key) {
    return arr.map((val) => {
        return val[key];
    })
}

//Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

function filterLetters(arr, letter) {
    let count = 0;
    return arr.filter((val) => {
        if (val.toLowerCase() == letter.toLowerCase()){
            count = count + 1
        }
        
    })
    return count;
}

// Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key:

function filterKey(arr, key) {
    return arr.filter((val) => {
        return val[key];
    })
    
}

// with Reduce Method
// Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

function extracts(arr, key) {
    return arr.reduce((acc, val) => {
        return 
    }, []);
}

// write a function that checks if theres a value greater than 8 in an array

function doIt(arr) {
    return arr.filter((val)=>{
        return val % 2 !== 0;
    }).map((val)=>{
        return val * 2
    }).reduce((acc, next)=>{
        return acc + next;
    })
}


// iterators Excerices
// Use the following object for this set of questions:

let users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];

// Write a function called printEmails which console.log's each email for the users.
function printEmails(arr) {
    arr.map(val => {
        console.log(val.email);
    })
}

// Write a function called printHobbies which console.log's each hobby for each user.

function printHobbies(arr) {
    arr.map(val => {
        for(i = 0; i < val.hobbies.length; i++)
        console.log(val.hobbies[i]);
    })
}

// Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in

function findHometownByState(myState) {
    return users.find(function (val) {
        return val.hometown.state == myState;
    })
}

// Write a function called allLanguages which returns an array of all of the unique values

function allLanguages() {
    let allLang = [];

    users.forEach(function (val) {
        let langs = val.favoriteLanguages;
        console.log(langs);
        langs.forEach(val1 => {
            if(allLang.includes(val1) == false)
            allLang.push(val1)
        })
    })

    return allLang;
}

// Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in

function hasFavoriteEditor(editor) {
    return users.some((val) => {
        return val.favoriteEditor == editor;
    }
)};

// Write a function called findByUsername which takes in a string and returns an object in the users array that has that username

function findByUsername(name) {
     return users.filter(val => {
        return val.username == name;
    })
}

// Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).

function vowelCount(str) {
    let newStr = str.split("");
    let count = 0;
    var vowel_list = 'aeiouAEIOU';
    let emptyObj = {};
    newStr.forEach(val => {
        if(vowel_list.indexOf(val) !== -1){
            count += 1;
            emptyObj[val] = count;
        }
    })

    return emptyObj;

    
}

// Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).

function removeVowels(str) {
    let newStr = str.split("");
    var vowel_list = 'aeiouAEIOU';
    return newStr.filter(val => {
        if(vowel_list.indexOf(val) === -1){
            return val;
        }
    }) 
}
