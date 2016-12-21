/*
The length Property

JavaScript arrays have useful built-in properties and methods.

An array's length property returns the number of it's elements.
 */
var spices = ["paprika", "pepper", "ginger"];
document.write(spices.length);

/*
The length property is always one more than the highest array index. If the array is empty, the
length property returns 0.

Combining Arrays
Javascript's concat() method allows you to join arrays and create an entirely new array.
 */

var veggies = ["carrot", "tomato", "kale"];
var fruits = ["strawberry", "grapes", "watermelon"];
var foods = veggies.concat(fruits);

document.write(foods[3]); //prints strawberry

/*
The concat array results contain 6 elements.

The concat operation does not affect the veggies and fruits arrays - it returns the resulting
concatenation as a new array.
*/


