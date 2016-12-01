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