// 1. Custom function to calculate power
document.write('<h2>1. Power Calculation</h2>');
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
document.write("3^4 = " + power(3, 4));

// 2. Function to check for leap year
document.write('<br><br><h2>2. Leap Year Checker</h2>');
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
document.write("2024 is a leap year: " + isLeapYear(2024));

// 3. Calculate area of a triangle
document.write('<br><br><h2>3. Area of Triangle</h2>');
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}
function calculateTriangleArea(a, b, c) {
    var s = calculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
document.write("Area: " + calculateTriangleArea(5, 6, 7));

// 4. Average and percentage calculation
document.write('<br><br><h2>4. Average and Percentage</h2>');
function average(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}
function percentage(totalMarks, marksObtained) {
    return (marksObtained / totalMarks) * 100;
}
function mainFunction(marks1, marks2, marks3) {
    var avg = average(marks1, marks2, marks3);
    var percent = percentage(300, marks1 + marks2 + marks3);
    document.write("Average: " + avg + "<br>Percentage: " + percent + "%");
}
mainFunction(75, 85, 90);

// 5. Custom indexOf function
document.write('<br><br><h2>5. Custom indexOf</h2>');
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}
document.write("Index of 'e' in 'JavaScript': " + customIndexOf("JavaScript", "e"));

// 6. Remove vowels from a sentence
document.write('<br><br><h2>6. Remove Vowels</h2>');
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}
document.write("Without vowels: " + removeVowels("This is a test sentence"));

// 7. Count successive vowels
document.write('<br><br><h2>7. Successive Vowel Count</h2>');
function countSuccessiveVowels(text) {
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
        var pair = text[i] + text[i + 1];
        if (/[aeiouAEIOU]{2}/.test(pair)) {
            count++;
        }
    }
    return count;
}
document.write("Successive vowels count: " + countSuccessiveVowels("Please read this application and give me gratuity"));

// 8. Distance conversion functions
document.write('<br><br><h2>8. Distance Conversions</h2>');
function toMeters(km) { return km * 1000; }
function toFeet(km) { return km * 3280.84; }
function toInches(km) { return km * 39370.1; }
function toCentimeters(km) { return km * 100000; }
var distance = 5;
document.write("Distance in meters: " + toMeters(distance) + "<br>");
document.write("Distance in feet: " + toFeet(distance) + "<br>");
document.write("Distance in inches: " + toInches(distance) + "<br>");
document.write("Distance in centimeters: " + toCentimeters(distance));

// 9. Calculate overtime pay
document.write('<br><br><h2>9. Overtime Pay Calculation</h2>');
function calculateOvertimePay(hoursWorked) {
    var overtime = hoursWorked > 40 ? hoursWorked - 40 : 0;
    return overtime * 12;
}
document.write("Overtime pay for 45 hours: Rs. " + calculateOvertimePay(45));

// 10. Calculate currency notes required
document.write('<br><br><h2>10. Currency Notes Calculation</h2>');
function currencyNotes(amount) {
    var hundreds = Math.floor(amount / 100);
    var remaining = amount % 100;
    var fifties = Math.floor(remaining / 50);
    remaining %= 50;
    var tens = Math.floor(remaining / 10);
    document.write("Hundreds: " + hundreds + "<br>Fifties: " + fifties + "<br>Tens: " + tens);
}
currencyNotes(470);

// 11. Function to count digits, words, and characters
document.write('<br><br><h2>11. Count Digits, Words, Characters</h2>');
function countDetails(text) {
    var digits = text.replace(/[^0-9]/g, "").length;
    var words = text.split(" ").length;
    var characters = text.length;
    return { digits: digits, words: words, characters: characters };
}
document.write("Digits, Words, and Characters in 'This is 3rd attempt': " + JSON.stringify(countDetails("This is 3rd attempt")));

// 12. Calculate speed using distance and time
document.write('<br><br><h2>12. Calculate Speed</h2>');
function calculateSpeed(distance, time) {
    return distance / time;
}
document.write("Speed: " + calculateSpeed(100, 2) + " km/h");

// 13. Count occurrences of a specified word in a text
document.write('<br><br><h2>13. Word Occurrences</h2>');
function countWordOccurrence(text, word) {
    return text.split(" ").filter(w => w.toLowerCase() === word.toLowerCase()).length;
}
document.write("Occurrences of 'is': " + countWordOccurrence("This is a test. Is it working?", "is"));

// 14. Print a right-angled triangle pattern
document.write('<br><br><h2>14. Right-Angled Triangle Pattern</h2>');
function printTriangle(rows) {
    for (var i = 1; i <= rows; i++) {
        document.write("* ".repeat(i) + "<br>");
    }
}
printTriangle(5);
