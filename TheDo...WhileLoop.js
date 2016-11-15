/*The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the
condition is true, and then it will repeat the loop as long as the condition is true.

do{
code block
}
while (condition);



note the semicolon used at the end of the do...while loop.
 */

var drinks=20;
do{
    document.write("Drink"+drinks + "<br/>");
    drinks++;
}
while(drinks<=25);

/*
The loop will always be executed at least once, even if the condition is false, because the code block is executed
before the condition is tested.
 */