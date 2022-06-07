console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.
var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
var str = str1 + str2 + str3

console.log(str)
console.log(str.toLowerCase())
console.log(str.toUpperCase())


console.log("Q1 END =====================")

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

var enteredAlphabet = '3'

switch (enteredAlphabet) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('vowel')
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
    case 'B':
    case 'C':
    case 'D':
    case 'F':
    case 'G':
    case 'H':
    case 'J':
    case 'K':

    case 'L':
    case 'M':
    case 'N':
    case 'P':
    case 'Q':
    case 'R':
    case 'S':
    case 'T':
    case 'V':
    case 'W':
    case 'X':
    case 'Y':
    case 'X':
    case 'Z':
        console.log("consonant")
        break;
    default:
        console.log("non-alphabet")
}


console.log("Q2 END =====================")

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.

// var num1 = prompt('Enter num1');
// var num2 = prompt('Enter num2');

// var operator = prompt('Enter Operator');
// console.log(operator)
var num1 = 10
var num2 = 10
var operator = '*'
var result = 0;
switch (operator) {
    case '+':
        result = Number(num1 + num2)
        console.log(result)
        break;
    case '-':
        result = Number(num1 - num2)
        console.log(result)
        break;
    case '*':
        result = Number(num1 * num2)
        console.log(result)
        break;
    case '/':
        result = Number(num1 / num2)
        console.log(result)
        break;
}

console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

var a = 2, b = 3, c = 4;

if (a == b && c == a) console.log("Equilateral Triangle")

else if (a == b || a == c || b == c) console.log("Isosceles Triangle")
else if (a != b || a != c || b != c) console.log("Scalene Triangle")

console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

var unit = prompt('Enter Electricity Unit Charge,');
// console.log(typeof(unit));
//    console.log('Unit is', unit);
var newUnit;
newUnit = (parseInt(unit));
console.log('Unit is', newUnit);

if (newUnit <= 50) {
    var output = newUnit * (0.5);
    // console.log(output);

} else if (newUnit <= 150) {
    var output = + (newUnit - 50) * (0.75);
    // console.log(output);

} else if (newUnit <= 250) {
    var output = + (newUnit - 100)(0.75) + (newUnit - 150)(1.2);
    // console.log(output);

} else if (newUnit > 250) {
    var output = + (newUnit - 200)(0.75) + (newUnit - 200)(1.2) + (newUnit - 250) * (1.5);
    // console.log(output);

} else {
    console.log("Try again");
}
var Result = output + (0.2) * output;
console.log('Hence the total electricity bill is', Result);

console.log("Q5 END =====================")