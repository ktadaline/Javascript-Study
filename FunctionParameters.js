/*Functions can take parameters. Function parameters are the names listed in the function's definition.

functionName(param1, param1, param3){
some code})

as with variables, parameters should be given names, which are separated by commas within the parenthesis
 */

function sayHello(name) {
    alert("Hi, " + name);
}

sayHello("G-Unit");

/*
This function takes one parameter, which is called name. When calling the function, provide the parameter's value
(argument) inside the parenthesis.

Function arguments are the real values passed to (and received by) the function.
 */

function sayWhatUp(name){
    alert ("Yo, what up, " + name);
}
sayWhatUp("BeeYaa");
sayWhatUp("LilMa");
sayWhatUp("Foo");

/*
This will execute the function's code each time for the provided argument
 */
