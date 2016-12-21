/*
You can also declare an array, tell it the number of elements it will store, and add the elements
later.
 */

var fruits = new Array(3);
fruits[0] = "banana";
fruits[1] = "apple";
fruits[2] = "grapefruit";

/*
An array is a special type of object. An array uses numbers to access its elements, and an object
uses names to access its members.
 */

document.write(fruits[1]); //outputs apple

/*
JavaScript arrays are dynamic, so you can declare an array and not pass any arguments with the
Array() constructor. You can then add the elements dynamically.
 */

var veggies = new Array();
veggies[0] = "eggplant";
veggies[1] = "tomato";
veggies[2] = "peppers";
veggies[3] = "potato";

document.write(veggies[0]); //writes eggplant
/*
You can add as many elements as you need to.

Array Literal

For greater simplicity, readability, and execution speed, you can also declare arrays using the array
literal syntax.
 */

var sweets = ["cookies", "pumpkin pie", "donuts", "shortcake"];

document.write(sweets[1]); //writes pumpkin pie

/*
This results in the same array as the one created with the new Array() syntax. You can access and
modify the elements of the array using the index number, as you did before. The array literal syntax
is the recommended way to declare arrays.
 */
