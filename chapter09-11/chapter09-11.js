// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
document.write('<br>','-------------------', '<br>','<h2>1.Greeting in different cities</h2>');
var city = prompt("Enter your city name:");
if(city.toLowerCase() === "karachi") {
    document.write("Welcome to the city of lights!");
} else {
    document.write("Welcome to " + city);
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
document.write('<br>','-------------------', '<br>','<h2>2. Greeting</h2>');
var gender = prompt("Enter your gender (male/female):");
if(gender.toLowerCase() === "male") {
    document.write("Good Morning Sir.");
} else if(gender.toLowerCase() === "female") {
    document.write("Good Morning Ma'am.");
} else {
    document.write("Invalid input, please enter 'male' or 'female'.");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
document.write('<br>','-------------------', '<br>','<h2>3. Road Traffic Signal</h2>');
var signalColor = prompt("Enter the color of the traffic signal (red, yellow, green):").toLowerCase();
if(signalColor === "red") {
    document.write("Must Stop");
} else if(signalColor === "yellow") {
    document.write("Ready to Move");
} else if(signalColor === "green") {
    document.write("Move Now");
} else {
    document.write("Invalid color entered, please enter 'red', 'yellow', or 'green'.");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
document.write('<br>','-------------------', '<br>','<h2>4. Fuel Status</h2>');
var remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");
if(remainingFuel < 0.25) {
    document.write("Please refill the fuel in your car");
} else {
    document.write("You have enough fuel");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// Part (a)
var a = 4;
if (++a === 5) { // a is incremented first, so a becomes 5, and the condition is true.
    alert("given condition for variable a is true"); // Alert will be shown
}
// Part (b)
var b = 82;
if (b++ === 83) { // b is checked first (82 === 83 is false), then incremented.
    alert("given condition for variable b is true"); // Alert will NOT be shown
}
// Part (c)
var c = 12;
if (c++ === 13) { // c is checked first (12 === 13 is false), then incremented.
    alert("condition 1 is true"); // Alert will NOT be shown
}
if (c === 13) { // c is now 13 after the previous increment, so this is true.
    alert("condition 2 is true"); // Alert will be shown
}
if (++c < 14) { // c is incremented first (now 14), so 14 < 14 is false.
    alert("condition 3 is true"); // Alert will NOT be shown
}
if (c === 14) { // c is 14, so this condition is true.
    alert("condition 4 is true"); // Alert will be shown
}
// Part (d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { // Both sides are equal (22000 === 22000), so true.
    alert("The cost equals"); // Alert will be shown
}
// Part (e)
if (true) { // The condition is explicitly true.
    alert("True"); // Alert will be shown
}
if (false) { // The condition is explicitly false.
    alert("False"); // Alert will NOT be shown
}
// Part (f)
if ("car" < "cat") { // String comparison: 'car' is smaller than 'cat' because 'r' < 't'.
    alert("car is smaller than cat"); // Alert will be shown
}

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
document.write('<br>','-------------------', '<br>','<h2>6. Marks Sheet </h2>');
var marks1 = prompt("Enter marks obtained in Subject 1:");
var marks2 = prompt("Enter marks obtained in Subject 2:");
var marks3 = prompt("Enter marks obtained in Subject 3:");

marks1 = parseInt(marks1);
marks2 = parseInt(marks2);
marks3 = parseInt(marks3);
var totalMarks = 300;

var obtainedMarks = marks1 + marks2 + marks3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h4> Total Marks: " + totalMarks + "</h4>");
document.write("<h4> Marks Obtained: " + obtainedMarks + "</h4>");
document.write("<h4> Percentage: " + percentage + "%" + "</h4>");
document.write("<h4> Grade: " + grade + "</h4>");
document.write("<h4> Remarks: " + remarks + "</h4>");

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
document.write('<br>','-------------------', '<br>','<h2>7. Guess Game </h2>');
var secretNumber = 7; 
var userGuess = prompt("Guess the secret number (between 1 and 10):");
userGuess = parseInt(userGuess);
if (userGuess === secretNumber) {
    document.write("Bingo! Correct answer");
} 
else if (userGuess + 1 === secretNumber) {
    document.write("Close enough to the correct answer");
}
else {
    document.write("Wrong guess. Try again!");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
document.write('<br>','-------------------', '<br>','<h2>8. Divisible by 3 </h2>');
var number = prompt("Enter a number:");
number = parseInt(number);
if (number % 3 === 0) {
    document.write("The number " + number + " is divisible by 3.");
} else {
    document.write("The number " + number + " is not divisible by 3.");
}

// 9. Write a program that checks whether the given input is an even number or an odd number.
document.write('<br>','-------------------', '<br>','<h2>9. Even or Odd </h2>');
var number = prompt("Enter a number:");
number = parseInt(number);
if (number % 2 === 0) {
    document.write("The number " + number + " is even.");
} else {
    document.write("The number " + number + " is odd.");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
document.write('<br>','-------------------', '<br>','<h2>10. Temperature Checker</h2>');
var temperature = prompt("Enter the temperature in Celsius:");
temperature = parseFloat(temperature);
var message;
if (temperature > 40) {
    message = "It is too hot outside.";
} else if (temperature > 30) {
    message = "The Weather today is Normal.";
} else if (temperature > 20) {
    message = "Today's Weather is cool.";
} else if (temperature > 10) {
    message = "OMG! Today's weather is so Cool.";
} else {
    message = "It's quite cold outside.";
}
document.write("<h4>Temperature: " + temperature + "°C</h4>");
document.write("<h4>" + message + "</h4>");

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
document.write('<br>','-------------------', '<br>','<h2>11. Calculator</h2>'); 
var firstNumber = prompt("Enter the first number:");
firstNumber = parseFloat(firstNumber);
var secondNumber = prompt("Enter the second number:");
secondNumber = parseFloat(secondNumber);
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Error: Division by zero is not allowed.";
    }
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation! Please enter +, -, *, /, or %.";
}
document.write("<h4>First Number: " + firstNumber + "</h4>");
document.write("<h4>Second Number: " + secondNumber + "</h4>");
document.write("<h4>Operation: " + operation + "</h4>");
document.write("<h3>Result: " + result + "</h3>");
