/**
 1. Write a functiontion that reverses a number
 */

function reverseTheNumber(number) {

    return Number([...`${number}`].map(Number).reverse().join(""));
}

reverseTheNumber(45677)
reverseTheNumber(47890)


/**
 2. Write a function that checks whether a passed string is palindrom or not?
 A palindrom is a word, phrase, or sequence that reads the same backwords as forward
 */

function isPalindrom(word) {

    return word.split("").reverse().join("") === word
}

isPalindrom("madam")
isPalindrom("nurse")

/**
 3. Write a function that checks whether or not the input string is blank
 */
function isBlank(word) {
    return word === '' || ""
}

isBlank("")
isBlank("madam")

/**
 4. Write a function to split a string and covert it into an array of words
 */

function stringToArray(word) {

    return word === "" ? word.split("") : word.split(" ")
}


stringToArray("Web Development")
stringToArray("")

/**
 5. Write a function to convert a string (a person's first and last names) to
 abbreviated form. If there is only a first name listed, then return just that name
 */

function abbreviateName(word) {
    let wordArr = word.split(" ")

    return wordArr.length > 1 ? `${wordArr[0]} ${wordArr[1][0]}` : wordArr[0];

}

abbreviateName("Jon Doe")
abbreviateName("Jon")

/**
 6. Write a function to convert an input string to title case. Note that title case has
 the first letter of each word capitalized and every other word lowercase.
 */


function titleCase(word) {

    let arr = word.split(" ")
    let out = ''
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i][0].toUpperCase()
        let Leftovers = arr[i].substring(1, arr[i].length).toLowerCase()
        out += `${letter + Leftovers}` + ' '
    }

    return out.replace(/\s$/, '')
}


/**
 7. Write a function to create new string from a given string with the first
 character of the given string added at the front and back
 */
function appendChar(word) {
    let first = word.substring(0, 1).toLowerCase();
    return first + word + first;
}

console.log(appendChar("Swift"))

/**
 8. Write a function to check whether the last digits of the given positive integers is
 same
 */

function isLastDigitsSame(...number) {
    let lastNumber = number[0] % 10;
    number.forEach(function (val) {
        if (val % 10 !== lastNumber) {
            lastNumber = false
        }
    });

    return lastNumber === false ? false : true;
}

isLastDigitsSame(134, 34, 4564)
isLastDigitsSame(133, 343, 34, 343, 5666)


/**
 9. Write a JavaScript program to change the characters (lower case) in a string where
 a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z
 turns into a.
 */


let alphabet = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a"
};

function swapCharacters(alphabet, text) {
    let result = ""
    for (const item of text) {
        if (item === " ") {
            result += " ";
            continue;
        }
        result += alphabet[item];
    }
   return result.toString()
}

swapCharacters(alphabet,"web development")


/**
 9.Write a JavaScript function to apply Bubble Sort algorithm.
 */

function bubbleSort(number, operate) {
    for (let i = 0; i < number.length; i++) {
        for (let f = 0; f < number.length; f++) {
            if (operate === '<') {
                if (number[f] < number[f + 1]) {
                    let val = number[f];
                    number[f] = number[f + 1];
                    number[f + 1] = val
                }
            } else if (operate === ">") {
                if (number[f] > number[f + 1]) {
                    let val = number[f];
                    number[f] = number[f + 1];
                    number[f + 1] = val
                }
            } else {
                return "throw new Error (\"not a valid order type\")"
            }
        }
    }
    return number
}

//
console.log(bubbleSort([4, 2, 3, 1, 8, 9, 10, 11, 99, 5, 6], "<"))
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], ">"))
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], " "))


module.exports = {
    reverseTheNumber,
    isPalindrom,
    isBlank,
    stringToArray,
    abbreviateName,
    titleCase,
    appendChar,
    isLastDigitsSame,
    swapCharacters,
}


