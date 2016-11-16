/*
In the previous lesson we created an object using the object literal (or initializer) syntax.
*/
/*
var puppy ={

    breed: "pug", birthYear: 2000; color: "fawn",
};

*/
/*
This allows you to create only a single object. Sometimes we need to set an "object type" that can be used to create
a number of objects of a single type.
The standard way to create an "object type" is to use an object constructor function
 */

function person(name, birthYear, hairColor){
    this.name = name;
    this.birthYear = birthYear;
    this.hairColor = hairColor;

}

var personA = new person("Percy", "1969", "silver");
var personB = new person("Tim", "1991", "black");


document.write(personB.hairColor);
document.write(personA.birthYear);
document.write(personA.name);