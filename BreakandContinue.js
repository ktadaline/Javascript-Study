/*
The break statement "jumps out" of a loop and continues executing the code after the loop.
 */

for(dresssize=0; dresssize<=12; dresssize++){
    if(dresssize==6){
        break;
    }
    document.write(dresssize + "<br/>")
}

/*
The continue statement breaks only one iteration in the loop, and continues with the next iteration.
 */

for (instocksize=0; instocksize<=6; instocksize++){
    if (instocksize==4){
        continue;
    }
    document.write(instocksize + "<br/>");
}
/*
The value 5 is not printed, because continue skips that iteration of the loop.
 */

var sum = 0;
for(i=4; i<8; i++){
    if (i ==6){
        continue;
    }
    sum +=i;
    document.write(sum);
}

document.write(sum);


