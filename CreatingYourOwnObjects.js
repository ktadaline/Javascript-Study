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

Create an OBJECT TYPE
using an OBJECT CONSTRUCTOR FUNCTION
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

function animal (species, color) {
    this.species=species;
    this.color=color;
}
var Billy = new animal ("Dog", "Blue");
var BooBoo = new animal("Bunny","Pink");

document.write(BooBoo.color);
/*
Access the object's properties by using the dot syntax, as you did before

Object's Name    Property's Name
Billy            species
Billy            color
BooBoo           species
BooBoo           color
 */
function objectType(property1, property2, property3){
    this.property1 = property1;
    this.property2 = property2;
    this.property3 = property3;
}

var object1 = new objectType("property1traitA","property2traitA","property3traitA");
var object2 = new objectType("property1traitB", "property2traitB","property3traitB");

document.write(object1.property1);
document.write(object2.property2);


