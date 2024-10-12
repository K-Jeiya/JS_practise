// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
var matrix = [];

// 2. Declare and initialize a multidimensional array representing the following matrix:
document.write('<br>','-------------------', '<br>','<h2>2. Matrix</h2>'); 
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
for (var i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br>");
}

// 3. Write a program to print numeric counting from 1 to 10.
document.write('<br>','-------------------', '<br>','<h2>3. Numeric Counting</h2>'); 
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
document.write('<br>','-------------------', '<br>','<h2>4. Multiplication Table</h2>');
var tableNumber = parseInt(prompt("Enter the table number:"));
var tableLength = parseInt(prompt("Enter the length of the table:"));
document.write("<h4>Multiplication Table of " + tableNumber + "</h4>");
for (var i = 1; i <= tableLength; i++) {
  document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
document.write('<br>','-------------------', '<br>','<h2>5. Fruits</h2>');
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h4>Fruits List:</h4>");
for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}

// 6. Generate the following series in your browser. See example output.
document.write('<br>','-------------------', '<br>','<h2>6. Series</h2>');
// a. Counting
document.write("<h4>Counting:</h4>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
// b. Reverse Counting
document.write("<h4>Reverse Counting:</h4>");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
// c. Even Numbers
document.write("<h4>Even:</h4>");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
// d. Odd Numbers
document.write("<h4>Odd:</h4>");
for (var i = 1; i < 20; i += 2) {
  document.write(i + ", ");
}
// e. Series
document.write("<h4>Series:</h4>");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}

// 7. You have an array Write a program to enable “search by user input” in anarray.
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to Jeiya Bakery. What do you want to order sir/ma'am?");
userInput = userInput.toLowerCase();
var itemIndex = bakeryItems.indexOf(userInput);
if (itemIndex !== -1) {
  alert(`${userInput} is available at index ${itemIndex} in our bakery`);
} else {
  alert(`We are sorry, ${userInput} is not available in our bakery`);
}

// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
document.write('<br>','-------------------', '<br>','<h2>8. Largest Number</h2>');
var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i]; 
  }
}
document.write("The largest number is: " + largest);

// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
document.write('<br>','-------------------', '<br>','<h2>9. Smallest Number</h2>');
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (var i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i]; 
  }
}
document.write("The smallest number is: " + smallest);

//  10. Write a program to print multiples of 5 ranging 1 to 100.
document.write('<br>','-------------------', '<br>','<h2>10. Multiples of 5</h2>');
document.write("Multiples of 5 from 1 to 100:<br>");
for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + "<br>"); 
  }
}
