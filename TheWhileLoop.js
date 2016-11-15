/*
The while loop repeats through a block of code, as long as a specified condition is true

while(condition){
code block
}

The condition can be any continual statement that returns true or false.
 */

var age=0;
while (age<=21) {
    document.write(age + "<br/>");
    age++;
}

/*
The loop will continue to run as long as age is less than, or equal to 10. Each time the loop runs, age will increase by
1.

If you forget to increase the variable used in the condition, the loop will never end.

Make sure that the condition in a while loop eventually becomes false.
 */