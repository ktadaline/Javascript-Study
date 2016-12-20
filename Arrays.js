/*
Arrays store multiple values in a single variable

to store three food names you need three variables
 */
var food1 = "bananas";
var food2 = "cookies";
var food3 = "pizza";

/*
but what if you had 500 food names? the solution is an array
 */

var foods = new Array("bananas", "cookies", "pizza");
/*
This syntax declares an array named courses, which stores three values, or elements.
 */

/*
Accessing an Array

you refer to an array element by referring to the index number written in the square brackets. This statement
accesses the value of the first element in food and changes the value of the second element
 */

var junkFoods = new Array("cheetos", "cake", "candy");
var junkFoods = junkFoods[0];//cheetos
junkFoods[1] = "donuts"; //changes the second element, cake, to donuts

/*
[0] is the first element in an array. [1] is the second. An array index starts with 0.
 */
/*
Attempting to access an index outside of the array returns a the value undefined.
 */
document.write(foods[7]); //Outputs undefined