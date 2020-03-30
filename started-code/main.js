"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        // - Display the given string without any modifications (use console.log to print)
        console.log(word);
        // - Display the given string in uppercase.
        console.log(word.toUpperCase());
        // - Display the given string in lowercase.
        console.log(word.toLowerCase());
        // - Display the character at a particular position in a given string.
        console.log("The character at postion 7 in '" + word + "' is " + word.charAt(7));
        // - Concatenate the given string with another string.
        console.log(word.concat(" How are u?"));
        // - Slice the given string and display.
        console.log(word.slice(6, -1));
        // - Find the length of the given string.
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split('').join(' '));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'e' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' || str[i].toLowerCase() == 'u') {
                count++;
            }
        }
        console.log(count);
    };
    return StringManipulations;
}());
var word = "Hello ProGrad!!!";
var stringManipulations = new StringManipulations;
stringManipulations.print(word);
stringManipulations.printWithSpace(word);
stringManipulations.findVowel(word);
var NumberManipulations = /** @class */ (function () {
    function NumberManipulations() {
    }
    NumberManipulations.prototype.findPrime = function (num) {
        var flag = true;
        var n = num;
        for (var i = 2; i < Math.ceil(num / 2); i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            console.log(n + " is a prime number");
        }
        else {
            console.log(n + " is not a prime number");
        }
    };
    NumberManipulations.prototype.findMagic = function (num) {
        var answer = 0, n = num;
        console.log(num);
        while (n > 0) {
            answer = answer + n % 10;
            n = Math.floor(n / 10);
            if (n == 0 && answer > 1) {
                n = answer;
                answer = 0;
            }
        }
        if (answer == 1) {
            console.log(num + " Magic Number");
        }
    };
    return NumberManipulations;
}());
var numbr = 199;
var numManipulations = new NumberManipulations();
numManipulations.findPrime(numbr);
numManipulations.findMagic(numbr);
