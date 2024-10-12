// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
document.write('<br>','-------------------', '<br>','<h2>1. Character Checker</h2>'); 
var input = prompt("Enter a character (number or letter):");
if (input.length === 1) {
    var asciiCode = input.charCodeAt(0);
    if (asciiCode >= 48 && asciiCode <= 57) {
        document.write("<h5>The input is a number.</h5>");
    } 
    else if (asciiCode >= 65 && asciiCode <= 90) {
        document.write("<h5>The input is an uppercase letter.</h5>");
    } 
    else if (asciiCode >= 97 && asciiCode <= 122) {
        document.write("<h5>The input is a lowercase letter.</h5>");
    } 
    else {
        document.write("<h5>The input is neither a number nor a letter.</h5>");
    }
} else {
    document.write("<h5>Please enter only one character.</h5>");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
document.write('<br>','-------------------', '<br>','<h2>2. Compare Two Integers</h2>'); 
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));
if (isNaN(num1) || isNaN(num2)) {
    document.write("<h5>Please enter valid integers.</h5>");
} else {
    if (num1 > num2) {
        document.write("<h5>The larger integer is: " + num1 + "</h5>");
    } else if (num2 > num1) {
        document.write("<h5>The larger integer is: " + num2 + "</h5>");
    } else {
        document.write("<h5>Both integers are equal.</h5>");
    }
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
document.write('<br>','-------------------', '<br>','<h2>3. Check Number Sign</h2>'); 
var number = parseFloat(prompt("Enter a number:"));

// Check if the input is a valid number
if (isNaN(number)) {
    document.write("<h5>Please enter a valid number.</h5>");
} else {
    if (number > 0) {
        document.write("<h5>The number " + number + " is positive.</h5>");
    } else if (number < 0) {
        document.write("<h5>The number " + number + " is negative.</h5>");
    } else {
        document.write("<h5>The number is zero.</h5>");
    }
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
document.write('<br>','-------------------', '<br>','<h2>4. Vowel Checker</h2>'); 
var char = prompt("Enter a single character:").toLowerCase();
if (char.length === 1) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        document.write("<h5>True: '" + char + "' is a vowel.</h5>");
    } else {
        document.write("<h5>False: '" + char + "' is not a vowel.</h5>");
    }
} else {
    document.write("<h5>Please enter a single character.</h5>");
}

// 5. Write a program that
document.write('<br>','-------------------', '<br>','<h2>5. Password Validation</h2>'); 
    // a. Store correct password in a JS variable.
    var correctPassword = "12345"; 
    // b. Ask the user to enter their password
    var userPassword = prompt("Enter your password:");
    // c. Check if the user has entered the password
    if (userPassword === "" || userPassword === null) {
        document.write("<h5>Please enter your password.</h5>");
    } 
        // i. Validate if the entered password matches the original password
        else if (userPassword === correctPassword) {
            document.write("<h5>Correct! The password you entered matches the original password.</h5>");
        } 
        // ii. If the password does not match
        else {
            document.write("<h5>Incorrect password.</h5>");
            }

// 6. This if/else statement does not work. Try to fix it:
document.write('<br>','-------------------', '<br>','<h2>6. Fixed Greeting Message</h2>'); 
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.write("<h5>" + greeting + "</h5>"); 

// 7. Write a program that takes time as input from user in 24 hours clock format like: 19:00 = 7pm. Implement the following case using if, else & else if statements
document.write('<br>','-------------------', '<br>','<h2>7. 24-Hour to 12-Hour Time Conversion</h2>'); 
var time = prompt("Enter time in 24-hour clock format (e.g., 1900 for 7 PM):");
time = parseInt(time);
if (time >= 0 && time < 1200) {
    document.write("<h5>Good Morning! It's " + (time === 0 ? 12 : time / 100) + " AM</h5>");
} else if (time >= 1200 && time < 1700) {
    document.write("<h5>Good Afternoon! It's " + ((time - 1200) / 100) + " PM</h5>");
} else if (time >= 1700 && time < 2200) {
    document.write("<h5>Good Evening! It's " + ((time - 1200) / 100) + " PM</h5>");
}else if (time >= 2200 && time < 2400) {
    document.write("<h5>Good Night! It's" + ((time - 1200) / 100) + "PM</h5>")
} 
else {
    document.write("<h5>Invalid time entered! Please enter a time between 0000 and 2359.</h5>");
}






