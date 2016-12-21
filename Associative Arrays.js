/*
Associative Arrays

While may programming languages support arrays with named indexes (text instead of numbers), called
associative arrays, Javascript does not.

However, you still can use the named array syntax, which will produce an object.
For example:
 */

var puppy = []; //empty array
puppy["name"] = "Fluffy";
puppy["age"] = 6;
document.write(puppy["age"]);

/*
Now, puppy is treated as an object, instead of being an array.

The named indexes "name" and "age" become properties of the puppy
object.

As the puppy array is being treated as an object, the standard array methods
and properties will produce incorrect results. For example puppy.length will
return 0.

Remember that JavaScript DOES NOT support arrays with named indexes. In JavaScript
arrays always use numbered indexes.

It is better to use an object when you want the index ti be a string (text).

Use an array when you want the index to be a number.

If you use a named index, JavaScript will redefine the array to a standard object.
 */


var dog = {}; //empty object
dog ["name"] = "Rex";
dog ["ageInYears"] = 8;
document.write(dog["ageInYears"]);
