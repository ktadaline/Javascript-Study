/*Loops can execute a block of code a number of times. They are handy in cases in which you want to run the same code
repeatedly, adding a different value each time.

Javascript has 3 types of loops: for, while, and do while.

The for loop is commonly used when creating a loop.

for(statement 1; statement 2; statement 3 {
code block to be executed
}

Statement 1 is executed before the loop (the code block) starts.

Statement 2 defines the condition for running the loop (the code block).

Statement 3 is executed each time after the loop (the code block) has been executed.


The classic for loop has three statements - initialization, condition, statement/increment

 */

for (i=1; i<=8; i++) {
    document.write("<br/>" + i + "<br/>");
}


/*
In this example, Statement 1 sets a variable before the loop starts (var i = 1).

Statement 2 defines the condition for the loop to run (i must be less than or equal to 5).

Statement 3 increases a value (i++) each time the code block in the loop has been executed.
 */


/*
Statement 1 is optional, and can be omitted, if your values are set before the loop starts.
 */

var b = 1;

for(; b<=12; b++){
    document.write(b+"<br/>");
}

/*
Also, you can initiate more than one value in Statement 1, using commas to separate them.
 */

for (k=1, text = "hi"; k<=7; k++){

    document.write(k+text);

}

/*
If statement 2 returns true, the loop will start over again.
If statement 2 returns false, the loop will end.
Statement 2 is also optional

If you omit Statement 2, you must provide a break inside the loop.
Otherwise the loop will never end.

Statement 3 is used to change the initial variable, it can do anything, including negative increment (i--), positive
increment (i=i+15), or anything else.

Statement 3 is also optional, and it can be omitted if you increment your values inside the loop.
 */


var star = 0;
for (; star < 10;) {
    document.write(star);
    star++;
}


//print even values up until 20
var abc = 0;
for (;abc<=20; abc+=2){
    document.write("<br/>" +abc)
}