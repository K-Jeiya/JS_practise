// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
document.write('<br>','-------------------', '<br>','<h2>1. Result</h2>');
        // Declare a variable and assign it a value
        var a = 10;
        document.write("The value of a is: " + a + "<br>..........................................<br>");
        // Increment a using ++a
        document.write("The value of ++a is: " + (++a) + "<br>");
        document.write("Now the value of a is: " + a + "<br><br>");
        // Increment a using a++
        document.write("The value of a++ is: " + (a++) + "<br>");
        document.write("Now the value of a is: " + a + "<br><br>");
        // Decrement a using --a
        document.write("The value of --a is: " + (--a) + "<br>");
        document.write("Now the value of a is: " + a + "<br><br>");
        // Decrement a using a--
        document.write("The value of a-- is: " + (a--) + "<br>");
        document.write("Now the value of a is: " + a + "<br>");

// 2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--;
document.write('<br>','-------------------', '<br>','<h2>2. Output</h2>');
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//             1 - 0 + 2 + 1 = 3
document.write("<p>Value of a is: " + a + "<br>Value of b is: " + b + "<br>Value of result is: " + result + "</p>");

// 3. Write a program that takes input a name from user & greet the user
document.write('<br>','-------------------', '<br>','<h2>3. Greeting</h2>');
var userName = prompt("Enter your name: ");
document.write("<p>Hello " + userName + "! Nice to meet you!😊</p>");

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
 var number = prompt("Enter a number to display its multiplication table (leave blank for default 5):");
 if (number === "") {
     number = 5;
 } else {
     number = Number(number);
 }
 document.write("<h2>5. Multiplication Table of " + number + ":</h2>");
 for (var i = 1; i <= 10; i++) {
     document.write(number + " x " + i + " = " + (number * i) + "<br>");
 }

//  6. Take
//  a) Take three subjects name from user and store them in 3 different variables.
 var subject1 = prompt("Enter the name of the first subject:");
 var subject2 = prompt("Enter the name of the second subject:");
 var subject3 = prompt("Enter the name of the third subject:");
 // Total marks for each subject
 var totalMarksPerSubject = 100;
 // Take obtained marks from user
 var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
 var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
 var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
 // Calculate total obtained marks
 var totalMarksObtained = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
 // Calculate total marks
 var totalMarks = totalMarksPerSubject * 3; 
 // Calculate percentage
 var percentage = (totalMarksObtained / totalMarks) * 100;
 // Display results in a table format
 document.write("<h2>6. Marks and Percentage Report</h2>");
 document.write("<table>");
 document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
 document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td><td>" + ((obtainedMarks1 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
 document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td><td>" + ((obtainedMarks2 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
 document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td><td>" + ((obtainedMarks3 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
 document.write("<tr><td><strong>Total</strong></td><td><strong>" + totalMarks + "</strong></td><td><strong>" + totalMarksObtained + "</strong></td><td><strong>" + percentage.toFixed(2) + "%</strong></td></tr>");
 document.write("</table>");









