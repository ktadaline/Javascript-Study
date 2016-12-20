/*
METHODS are objects stored as object properties.

use the following syntax to create an object method

 methodName: function() {code lines}



Access an object method using the following syntax

 objectName.methodName()

 A method is a function belonging to an object. It can be referenced using the "this" keyword. The "this" keyword is
 used as a reference to the current object, meaning that you can access the objects properties and methods using it.

 Defining methods is done inside the constructor function

 */

function fish(name, color) {
    this.name = name;
    this.color = color;
    this.changeName = function (name) {
        this.name = name;
    }
}

var bubba = new fish("Bubba", "orange");
bubba.changeName("Charles");

//Now bubba.changeName equals to "Charles"

console.log(bubba);
document.write(bubba.name);

// you can also define the function outside the constructor function and associate it with the object

function person(haircolor, age) {
    this.haircolor = haircolor;
    this.age = age;
    this.yearOfBirth = function () {
        return 2016 - this.age;
    };
}

var mindy = new person("purple", 28);

var ageInput = 5;
var hairInput = "blonde";

var user = new person(hairInput, ageInput);
var allUsers = [user, mindy];
for (var i=0; i < allUsers.length; i++) {
    var p = allUsers[i];
    var yearOfBirth = p.yearOfBirth();
    console.log(yearOfBirth)
}
var mindyYearOfBirth = mindy.yearOfBirth();
console.log(mindyYearOfBirth);

function dog(breed, dogage){
    this.breed = breed;
    this.dogage = dogage;
    this.yearOfDogBirth = dogBornYear;
}
function dogBornYear(){
    return 2016 - this.dogage;
}

var sparky =  new dog("poodle", 7);
document.write(sparky.yearOfDogBirth());

var sparkyYearOfDogBirth = sparky.yearOfDogBirth();
document.write(sparkyYearOfDogBirth);




