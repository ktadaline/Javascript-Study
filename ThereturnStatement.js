/*
A function can have an optional return statement. It is used to return a value from the function.

The statement is useful when making calculations that require a result.

When Javascript reaches a return statement, the function stops executing.

Use the return statement to return a value.
For example let's calculate the product of two numbers and return the result.
 */

function myFunction(a,b){
return a*b;
}

var x = myFunction(5,6);
document.write(x);

//if you do not return anything from a function it will return "undefined"

function addNumbers(a,b){
    var c = a+b;
    return c;

}
document.write(addNumbers(40,2));
