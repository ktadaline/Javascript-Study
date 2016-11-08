/*
Logical Operators
also known as Boolean Operators, evaluate the expression and return true or false



Logical Operators:

&& returns true, it both operands are true
|| Returns true, if one operand is true
! returns true, if the operand is false, and false, if the operand is true
 */



//in the following example, we have connected two boolean expressions with the AND operator

document.write((4>2) && (10<15));

//for this expression to be true both conditions must be true




/*
Conditional (ternary) Operator:

another JavaScript conditional operator assigns a value to a variable based on some condition

variable = (condition)? value1:value2

 */

var age = 17;
var isAdult = ((age < 18) ? "Too young":"Old enough");
document.write(isAdult);

var bk = "<br/>";
document.write(bk);


//Grade Generator
var score = 95;
var grade = ((score<60) ? "F": ((score<70) ? "D" :((score<80)? "C": ((score<90? "B" : ((score<100 ? "A" : "A+"))))))  );
document.write(grade);
