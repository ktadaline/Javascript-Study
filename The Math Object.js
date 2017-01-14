/*
the math object allows you to perform mathematical tasks, and includes several properties

Property     Description

E             Euler's constant
LN2           Natural log of the value of 2
LN10          Natural log of the value of 10
LOG2E         The base 2 log of Euler's constant (E)
LOG10E        The base 10 log of Euler's constant (E)
PI            Returns the constant PI
 */

document.write(Math.PI);

console.log(Math.E);

/*math has no constructor because there is no need to create a math object first

MATH OBJECT METHODS

Method            Description
abs(x)            Returns the absolute value of x
acos(x)           Returns the arccosine of x, in radians
asin(x)           Returns the arcsine of x, in radians
atan(x)           Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y,x)        Returns the arctangent of the quotient of its arguments
ceil(x)           Returns x, rounded upwards to the nearest integer
cos(x)            Returns the cosine of x (x is in radians)
exp(x)            Returns the value of E^x
floor(x)          Returns xm rounded downwards to the nearest integer
log(x)            Returns the natural logarithm (base E) of x
max(x,y,z,...,n)  Returns the number with the highest value
min(x,y,z,...,n)  Returns the number with the lowest value
pow(x,y)          Returns the value of x to the power of y
random()          Returns a random number between 0 and 1
round(x)          Rounds x to the nearest integer
sin(x)            Returns the sine of x (x is in radians)
sqrt(x)           Returns the square root of x
tan(x)            Returns the tangent of an angle

*/

var number = Math.sqrt(144);
console.log(number);



//lets create a program that will ask the user to input a number and alert its square root

var n = prompt("Enter any number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is" + answer);