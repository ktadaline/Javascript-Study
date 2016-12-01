/*
JavaScript variables are containers for data values.
Objects are variables too, but they can contain many values.

Think of an object as a list of values that are written as name:value pairs, with the names and the values
separated by colons.
 */

var person = {
    name:"Katie", age:28,
    favColor:"baby blue", height: 63
};

/*
These values are called properties.

Property       Property Value
name           Katie
age            28
favColor       baby blue
height         63


JavaScript objects are containers for named values


you can access object properties in two ways:

objectName.propertyName

or

objectName.['propertyName']
 */

var name = person.name;
var ageIs = person['age'];

document.write(name);
document.write(ageIs);

/*
 JavaScript's built-in length property is used to count the number of characteristics in a property or string
 */

var girl = { nickname:"babydoll",luckynumber:28};
document.write(girl.nickname.length);

/*
OBJECT METHOD
an object method is a property that contains a function definition. Use the following syntax to access an
object method.

objectName.methodName()

As you already know, document.write() outputs data. The write() function is actually a method of the document
object.
document -object
write-method

methods are stored as object properties
 */
var object1 = {
    property1: "propertyValueRandom", property2: "propertyValueBlah",
    property3: "propertyValueAnything", property4: "propertyValueSomething"
};

var callObjectProperty1Value = object1.property1;
var callObjectProperty2Value = object1.property2;

document.write(callObjectProperty1Value);
document.write(object1.property3);

//an object method contains a function definition
 objectName.methodName()
//methods are functions stored as object properties


