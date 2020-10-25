// three ways

// .split(), .reverse(), join()
const reverseString = (string) => string.split("").reverse().join("");

// incrementally & decrementally
function reverseString(string) {
    let newStr = "";
    for (i = 1; i <= string.length; i++) {
        newStr += string.charAt(string.length - [i]);
    }
    return newStr;
}

function reverseString(string) {
    let newStr = "";
    for (i = string.length - 1; i >= 0; i--) {
        newStr += string[i];
    }
    return newStr;
}

// recursive method
const reverseString = (string) =>
    string === "" ? "" : reverseString(string.substring(1)) + string.charAt(0);

module.exports = reverseString;