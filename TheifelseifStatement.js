/*
else if

you can use the else if statement to specify a new condition if the first condition is false.

 */



var animal = "fox";

if(animal == "dog"){
    document.write("<h1>Bark!</h1>");
}

else if (animal == "cat"){
    document.write("<h1>Meow!</h1>");
}
else if (animal == "fox") {
    document.write("<h1>DingDing DingDing DingDing DingDingDingDing!</h1>");
}
else {
    document.write("<h1>Squeak!</h1>")
}

/*else if
the final else block will be executed when none of the conditions is true
 */