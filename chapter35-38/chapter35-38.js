// 1. Function to display current date & time
document.write('<h2>1. Current Date & Time</h2>');
function displayDateTime() {
    document.write(new Date());
}
displayDateTime();

// 2. Function to greet user with first and last name
document.write('<br><br><h2>2. Greeting User</h2>');
function greetUser(firstName, lastName) {
    document.write("Hello, " + firstName + " " + lastName + "!");
}
greetUser("Ruhama", "Malik");

// 3. Function to add two numbers
document.write('<br><br><h2>3. Sum of Two Numbers</h2>');
function addNumbers(num1, num2) {
    return num1 + num2;
}
document.write("Sum: " + addNumbers(3, 5));

// 4. Calculator function with operator
document.write('<br><br><h2>4. Calculator</h2>');
function calculator(num1, num2, operator) {
    if (operator === "+") return num1 + num2;
    else if (operator === "-") return num1 - num2;
    else if (operator === "*") return num1 * num2;
    else if (operator === "/") return num1 / num2;
    else return "Invalid operator";
}
document.write("Result: " + calculator(10, 5, "*"));

// 5. Function to square a number
document.write('<br><br><h2>5. Square of a Number</h2>');
function square(number) {
    return number * number;
}
document.write("Square: " + square(4));

// 6. Function to compute factorial
document.write('<br><br><h2>6. Factorial of a Number</h2>');
function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
document.write("Factorial: " + factorial(5));

// 7. Function to display counting from start to end number
document.write('<br><br><h2>7. Display Counting</h2>');
function displayCounting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + " ");
    }
}
displayCounting(1, 10);

// 8. Nested function to compute hypotenuse
document.write('<br><br><h2>8. Hypotenuse of Right Angle Triangle</h2>');
function calculateHypotenuse(base, perpendicular) {
    function square(x) {
        return x * x;
    }
    return Math.sqrt(square(base) + square(perpendicular));
}
document.write("Hypotenuse: " + calculateHypotenuse(3, 4));

// 9. Function to calculate area of a rectangle
document.write('<br><br><h2>9. Area of Rectangle</h2>');
function rectangleArea(width, height) {
    return width * height;
}
document.write("Area (values): " + rectangleArea(5, 10));
var w = 6, h = 7;
document.write("<br>Area (variables): " + rectangleArea(w, h));

// 10. Function to check if a string is palindrome
document.write('<br><br><h2>10. Palindrome Checker</h2>');
function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}
document.write("Is 'madam' a palindrome? " + isPalindrome("madam"));

// 11. Function to capitalize first letter of each word
document.write('<br><br><h2>11. Title Case</h2>');
function toTitleCase(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
document.write(toTitleCase("the quick brown fox"));

// 12. Function to find the longest word in a string
document.write('<br><br><h2>12. Longest Word in String</h2>');
function longestWord(str) {
    var words = str.split(" ");
    var longest = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
document.write("Longest word: " + longestWord("Web Development Tutorial"));

// 13. Function to count occurrences of a specified letter
document.write('<br><br><h2>13. Count Letter Occurrences</h2>');
function countLetter(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
document.write("Occurrences of 'o': " + countLetter("JSResourceS.com", "o"));

// 14. Geometrizer: Calculate circle properties
document.write('<br><br><h2>14. Circle Properties</h2>');
function calcCircumference(radius) {
    return 2 * Math.PI * radius;
}
function calcArea(radius) {
    return Math.PI * radius * radius;
}
document.write("Circumference: " + calcCircumference(5));
document.write("<br>Area: " + calcArea(5));
