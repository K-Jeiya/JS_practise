// 1. Declare an empty array using JS literal notation to store student names in future.
var studentNames = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var studentNames = new Array();

// 3. Declare and initialize a strings array.
var stringArray = ["Jeiya", "Sara", "Ahmed", "Fatima"];

// 4. Declare and initialize a numbers array.
var numberArray = [12, 45, 78, 23, 90];

// 5. Declare and initialize a boolean array.
var booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.
var mixedArray = ["John", 25, true, "Karachi"];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2> 7. Qualifications:</h2>");
for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
var studentNames = ["John", "Jane", "David"];
var studentScores = [420, 380, 450]; 
var totalMarks = 500; 
document.write("<h2> 8. Student Scores and Percentages:</h2>");
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write("Student Name: " + studentNames[i] + "<br>");
    document.write("Score: " + studentScores[i] + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>");
}

// 9. Initialize an array with color names. Display the array elements in your browser.
// Initial array of colors
var colors = ["Red", "Blue", "Green", "Yellow"];
document.write("<h2>Original Color Array:</h2>");
document.write(colors.join(", ") + "<br><br>");
// a. Add color to the beginning
var colorAtBeginning = prompt("What color do you want to add at the beginning?");
colors.unshift(colorAtBeginning);
document.write("<h3>After adding color to the beginning:</h3>");
document.write(colors.join(", ") + "<br><br>");
// b. Add color to the end
var colorAtEnd = prompt("What color do you want to add at the end?");
colors.push(colorAtEnd);
document.write("<h3>After adding color to the end:</h3>");
document.write(colors.join(", ") + "<br><br>");
// c. Add two more colors to the beginning
colors.unshift("Purple", "Orange");
document.write("<h3>After adding two more colors to the beginning:</h3>");
document.write(colors.join(", ") + "<br><br>");
// d. Delete the first color
colors.shift();
document.write("<h3>After deleting the first color:</h3>");
document.write(colors.join(", ") + "<br><br>");
// e. Delete the last color
colors.pop();
document.write("<h3>After deleting the last color:</h3>");
document.write(colors.join(", ") + "<br><br>");
// f. Add color at a specific index
var indexToAdd = prompt("At which index do you want to add a color?");
var colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("<h3>After adding color at index " + indexToAdd + ":</h3>");
document.write(colors.join(", ") + "<br><br>");
// g. Delete color(s) from a specific index
var indexToDelete = prompt("At which index do you want to delete color(s)?");
var numberOfColorsToDelete = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h3>After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ":</h3>");
document.write(colors.join(", "));

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var studentScores = [320, 230, 480, 120];
document.write("<h2>Original Student Scores:</h2>");
document.write(studentScores.join(", ") + "<br><br>");
studentScores.sort(function(a, b) {
    return a - b;
});
document.write("<h2>Sorted Student Scores in Ascending Order:</h2>");
document.write(studentScores.join(", "));

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h2>Original Cities List:</h2>");
document.write(cities.join(", ") + "<br><br>");
var selectedCities = cities.slice(1, 4); 
document.write("<h2>Selected Cities List:</h2>");
document.write(selectedCities.join(", "));

// 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
var arr = ["This", " is", " my", " cat"];
var singleString = arr.join("");
document.write("<h2>Single String:</h2>");
document.write(singleString);

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var fifoArray = [];
fifoArray.push("First Value");
fifoArray.push("Second Value");
fifoArray.push("Third Value");
document.write("<h2>Original Array:</h2>");
document.write(fifoArray + "<br><br>");
document.write("<h2>Accessing values in FIFO order:</h2>");
document.write(fifoArray.shift() + "<br>"); 
document.write(fifoArray.shift() + "<br>"); 
document.write(fifoArray.shift() + "<br>"); 
document.write("<br><h2>Array after accessing all elements:</h2>");
document.write(fifoArray);

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)
var lifoArray = [];
lifoArray.push("First Value");
lifoArray.push("Second Value");
lifoArray.push("Third Value");
document.write("<h2>Original Array:</h2>");
document.write(lifoArray + "<br><br>");
document.write("<h2>Accessing values in LIFO order:</h2>");
document.write(lifoArray.pop() + "<br>"); 
document.write(lifoArray.pop() + "<br>"); 
document.write(lifoArray.pop() + "<br>"); 
document.write("<br><h2>Array after accessing all elements:</h2>");
document.write(lifoArray); 

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:\
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h2>Select Phone Manufacturer:</h2>");
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");