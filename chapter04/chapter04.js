// 1. Declare 3 variables in one statement
var var1 = "Variable 1", var2 = "Variable 2", var3 = "Variable 3";

// 2. Declare 5 legal & 5 illegal variable names
var legalVariableNames = ["myVar", "$myVar", "_myVar", "myVar1", "MYVAR"];
var illegalVariableNames = ["1stVariable", "my-variable", "my variable", "var!", "let"];

// Create and display the heading
document.write("<h1>Rules for naming JS variables</h1>");

// Display variable name rules
document.write("<p>Variable names can only contain <strong>letters</strong>, <strong>numbers</strong>, <strong>dollar signs</strong>, and <strong>underscores</strong>.</p>");
document.write("<p>For example: <code>$my_1stVariable</code></p>");
document.write("<p>Variables must begin with a <strong>letter</strong>, <strong>dollar sign</strong>, or <strong>underscore</strong>.</p>");
document.write("<p>For example: <code>$name</code>, <code>_name</code>, or <code>name</code></p>");
document.write("<p>Variable names are case <strong>sensitive</strong>.</p>");
document.write("<p>Variable names should not be JS <strong>keywords</strong>.</p>");

// Create a list for legal variable names
document.write("<h2>Legal Variable Names:</h2>");
document.write("<ul>");
for (var i = 0; i < legalVariableNames.length; i++) {
    document.write("<li>" + legalVariableNames[i] + "</li>");
}
document.write("</ul>");

// Create a list for illegal variable names
document.write("<h2>Illegal Variable Names:</h2>");
document.write("<ul>");
for (var i = 0; i < illegalVariableNames.length; i++) {
    document.write("<li>" + illegalVariableNames[i] + "</li>");
}
document.write("</ul>");