/* Switch
In cases when you need to test for multiple conditions, whiting if else statements for each condition might
be not the best solution.
The switch statement is used to perform different actions based on different conditions.

switch(expression){
case n1:
statements
break;
case n2:
statements
break;
default:
statements
}


the switch expression is evaluated once. The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed
(you can achieve the same results with multiple
if...else statements but there are situations where the switch statement is more effective.)
 */

var year = 2;
switch(year) {
    case 1:
        document.write("freshman 15...");
        break;
    case 2:
        document.write("sophomore slump...");
        break;
    case 3:
        document.write("jaded junior...");
        break;
    case 4:
        document.write("senior slide...");
        break;
}

/*
The break Keyword
When JavaScript code reaches a break keyword, it breaks out of the switch box. This will stop the execution of more code
and case testing inside the block.

Usually a break should be put in each case statement.
 */

/*the default keyword specifies the code to run if there is no case match.
it can be omitted if there is no need to handel the case when no match is found.
 */
var x = 3;
switch (x) {
    case 1:
        document.write(x);
        break;
    case 2:
        document.write(x+2);
        break;
    default:
        document.write(x+5);
}