// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var number1 = 5;
var number2 = 7;
var sum = number1 + number2;
document.write("<h4>Sum of " + number1 + " and " + number2 + " is " + sum + "</h4>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus
var number1 = 10;
var number2 = 3

var sum = number1 + number2;
var subtraction = number1 - number2;
var multiplication = number1 * number2;
var division = number1 / number2;
var modulus = number1 % number2

document.write("<h1>Results of Basic Math Operations</h1>");
document.write("<p>Sum of " + number1 + " and " + number2 + " is: " + sum + "</p>");
document.write("<p>Subtraction of " + number2 + " from " + number1 + " is: " + subtraction + "</p>");
document.write("<p>Multiplication of " + number1 + " and " + number2 + " is: " + multiplication + "</p>");
document.write("<p>Division of " + number1 + " by " + number2 + " is: " + division.toFixed(2) + "</p>"); // rounding to 2 decimal places
document.write("<p>Modulus of " + number1 + " and " + number2 + " is: " + modulus + "</p>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable
var num;
// b. Show value after variable declaration
document.write("Value after variable declaration is: " + num + "<br>");
// c. Initialize the variable with some number
num = 5;
// d. Show the initial value
document.write("Initial value: " + num + "<br>");
// e. Increment the variable
num++;
// f. Show the value after increment
document.write("Value after increment is: " + num + "<br>");
// g. Add 7 to the variable
num += 7;
// h. Show the value after addition
document.write("Value after addition is: " + num + "<br>");
// i. Decrement the variable
num--;
// j. Show the value after decrement
document.write("Value after decrement is: " + num + "<br>");
// k. Show the remainder after dividing the variable's value by 3
var remainder = num % 3;
// l. Output the remainder
document.write("The remainder is: " + remainder);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write('<br>','-------------------', '<br>',"Total Cost to buy 5 tickets to a movie is: " + totalCost + " PKR");

// 5. Write a script to display multiplication table of any number in your browser. 
var number = 8;
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
        document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
    document.write('-----------------',"<h2>Temperature Converter</h2>");
    // a. Store a Celsius temperature into a variable.
    var celsius = 25;
    // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
    var fahrenheitFromCelsius = (celsius * 9/5) + 32;
    document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F.<br>");
    // c. Now store a Fahrenheit temperature into a variable.
    var fahrenheit = 77;
    // d. Convert it to Celsius & output “NNoF is NNoC”.
    var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
    document.write(fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C.");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
document.write('<br>','-------------------', '<br>','<h2>Shopping Cart</h2>');
        // a. Price of item 1
        var priceItem1 = 500;
        // b. Price of item 2
        var priceItem2 = 1000;
        // c. Ordered quantity of item 1
        var quantityItem1 = 3;
        // d. Ordered quantity of item 2
        var quantityItem2 = 2;
        // e. Shipping charges
        var shippingCharges = 100;
        // Calculate the total cost
        var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
        // Show the receipt in the browser
        document.write("<p>Price of item 1: " + priceItem1 + " PKR</p>");
        document.write("<p>Quantity of item 1: " + quantityItem1 + "</p>");
        document.write("<p>Price of item 2: " + priceItem2 + " PKR</p>");
        document.write("<p>Quantity of item 2: " + quantityItem2 + "</p>");
        document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
        document.write("<h4>Total Cost: " + totalCost + " PKR</h4>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write('<br>','-------------------', '<br>','<h2>Marks Sheet</h2>');
var totalMarks = 500;
var marksObtained = 375;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write('<br>','-------------------', '<br>','<h2>Currency in PKR</h2>');
var usd = 10;
var riyal = 25;
var usdToPkr = 104.80;
var riyalToPkr = 28;
var totalPkr = (usd * usdToPkr) + (riyal * riyalToPkr);
document.write("<p>Total Currency in Pakistani Rupees: " + totalPkr + " PKR</p>");

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
document.write('<br>','-------------------', '<br>','<h2>Arithmetic Operations</h2>');
var number = 10; 
var result = ((number + 5) * 10) / 2;
document.write("<p>The result of the arithmetic sequence is: " + result + "</p>");

// 11. The Age Calculator: Forgot how old someone is?
document.write('<br>','-------------------', '<br>','<h2>Age Calculator</h2>');
    // a. Store the current year in a variable
    var currentYear = 2024; 
    // b. Store their birth year in a variable
    var birthYear = 2003; 
    // c. Calculate their possible ages
    var age1 = currentYear - birthYear; 
    var age2 = age1 - 1;
    // Output the ages to the screen
    document.write("<p>They are either " + age1 + " or " + age2 + " years old.</p>");
    
// 12. The Geometrizer: Calculate properties of a circle.
document.write('<br>','-------------------', '<br>','<h2>Geometrizer</h2>');
// a. Store a radius into a variable
var radius = 5; 
var pi = 3.142;
// b. Calculate the circumference based on the radius
var circumference = 2 * pi * radius;
document.write("<p>The circumference is: " + circumference + "</p>");
var area = pi * radius * radius;
document.write("<p>The area is: " + area + "</p>");

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
document.write('<br>','-------------------', '<br>','<h2>Lifetime Supply Calculator</h2>');
    // a. Store your favorite snack into a variable
    var favoriteSnack = "Chips"; 
    // b. Store your current age into a variable
    var currentAge = 21; 
    // c. Store a maximum age into a variable
    var maxAge = 80; 
    // d. Store an estimated amount per day (as a number)
    var estimatedAmountPerDay = 2;
    // e. Calculate how many would you eat total for the rest of your life
    var yearsLeft = maxAge - currentAge; 
    var totalSupply = yearsLeft * 365 * estimatedAmountPerDay; 
    // Output the result
    document.write("<p>Favorite Snack: " + favoriteSnack + "</p>");
    document.write("<p>Current Age: " + currentAge + "</p>");
    document.write("<p>Estimated Maximum Age: " + maxAge + "</p>");
    document.write("<p>Amount of snacks per day: " + estimatedAmountPerDay + "</p>");
    document.write("<p>You will need " + totalSupply + " " + favoriteSnack + "to last you until the ripe old age of " + maxAge + ".</p>");



