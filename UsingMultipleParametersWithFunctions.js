/*
You can define multiple parameters for a function by comma-separating them.

function myFun(x,y){
some code
}

the example above defines the function myFunc to take two parameters.
 */

function howOld(name, age){
    document.write(name + " is " + age + " years old.");
}
howOld("Bob","88");

/*
After defining the function you can call it as many times as needed.
JavaScript functions do not check the number of arguments received.

if a function is called missing arguments (fewer than declared), the missing variables are set to undefined, which
indicates that a variable has not been assigned to a value.
 */