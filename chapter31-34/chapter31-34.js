// 1. Display the current date and time in the browser.
document.write("<h2>1. Current Date and Time</h2>");
var currentDate = new Date();
document.write("Current Date and Time: " + currentDate + "<br>");

// 2. Alert the current month in words.
var monthNames = ["January", "February", "March", "April", "May", "June", "July", 
                  "August", "September", "October", "November", "December"];
var currentMonth = monthNames[currentDate.getMonth()];
alert("Current Month: " + currentMonth);

// 3. Alert the first 3 letters of the current day.
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = dayNames[currentDate.getDay()];
alert("Today is: " + currentDay);

// 4. Display “It’s Fun day” if it’s Saturday or Sunday.
document.write("<h2>4. Fun Day Check</h2>");
if (currentDay === "Sat" || currentDay === "Sun") {
    document.write("It’s Fun day!<br>");
} else {
    document.write("It’s not a Fun day!<br>");
}

// 5. Show “First fifteen days of the month” or “Last days of the month”.
document.write("<h2>5. Days of the Month</h2>");
var currentDateNum = currentDate.getDate();
if (currentDateNum < 16) {
    document.write("First fifteen days of the month<br>");
} else {
    document.write("Last days of the month<br>");
}

// 6. Determine minutes since midnight, Jan. 1, 1970.
document.write("<h2>6. Minutes since Jan. 1, 1970</h2>");
var minutesSince1970 = Math.floor(Date.now() / (1000 * 60));
document.write("Minutes since Jan. 1, 1970: " + minutesSince1970 + "<br>");

// 7. Check whether it's AM or PM.
document.write("<h2>7. AM or PM Check</h2>");
var hours = currentDate.getHours();
var amOrPm = hours >= 12 ? "PM" : "AM";
alert("It's " + amOrPm);

// 8. Create a Date object for the last day of the last month of 2020.
document.write("<h2>8. Last Day of Last Month of 2020</h2>");
var lastDay2020 = new Date(2020, 11, 31);
document.write("Last Day of 2020: " + lastDay2020 + "<br>");

// 9. Alert the number of days since 1st Ramadan (June 18, 2015).
document.write("<h2>9. Days since 1st Ramadan</h2>");
var ramadanDate = new Date(2015, 5, 18);
var diffInTime = currentDate.getTime() - ramadanDate.getTime();
var daysSinceRamadan = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
document.write("Days since 1st Ramadan: " + daysSinceRamadan + " days<br>");

// 10. Display the seconds elapsed since the beginning of 2015.
document.write("<h2>10. Seconds since 2015</h2>");
var startOf2015 = new Date(2015, 0, 1);
var secondsSince2015 = Math.floor((currentDate - startOf2015) / 1000);
document.write("Seconds since the beginning of 2015: " + secondsSince2015 + "<br>");

// 11. Extract hours, reset the date object an hour ahead, and display it.
document.write("<h2>11. Reset Date an Hour Ahead</h2>");
var newDate = new Date();
newDate.setHours(newDate.getHours() + 1);
document.write("New Date (1 hour ahead): " + newDate + "<br>");

// 12. Show the date 100 years back in an alert box.
var pastDate = new Date();
pastDate.setFullYear(pastDate.getFullYear() - 100);
alert("Date 100 years back: " + pastDate);

// 13. Ask the user about their age and show their birth year.
document.write("<h2>13. Calculate Birth Year</h2>");
var userAge = parseInt(prompt("Enter your age:"));
var birthYear = currentDate.getFullYear() - userAge;
document.write("Your birth year is: " + birthYear + "<br>");

// 14. Generate K-Electric bill.
document.write("<h2>14. K-Electric Bill</h2>");
var customerName = "Jeiya Kumari";
var units = 350;
var chargePerUnit = 16;
var latePaymentSurcharge = 500;
var netAmount = (units * chargePerUnit).toFixed(2);
var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargePerUnit + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");
