/*
A JavaScript function is a block of code designed to perform a particular task. The main advantages of using
function:

-Code reuse: Define the code once, and use it many ties.
-Use the same code many times with different arguments, to produce different results.

A JavaScript function is executed when "something" invokes, or calls, it.

To define a JavaScript function, use the function keyword, followed by a name, followed by a set of parenthesis().

The code to be executed by the function is placed inside the curly brackets {}.


function name() {
code to be executed
}

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables)

To execute a function, you need to call it. To call a function, start with the name of the function, then follow it
with the arguments in parentheses.

Always end with a semicolon after calling the function
 */
function hello(){
    document.write("Hi!! <br/>")
}
hello();

function myFunction(){
    alert("Calling a Function!");
}
myFunction();

hello();
