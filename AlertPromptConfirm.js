/*Javascript offers three types of popup boxes, the Alert, Prompt, and Confirm boxes

As alert box is used when you want to ensure that information gets through to the user. When an alert box pops up,
the user must click OK to proceed. The alert function takes a single parameter which is the test displayed in the
popup box.
*/
alert("What came first, the chicken or the egg?");

/*
to display line breaks within a popup box, use a backslash followed by the character n

the user can only continue using the page after clicking ok
 */

alert("Hi, my name is \n Slim Shady");

/*
A prompt box is often used to have the user input value before entering a page.

When a prompt box pops up, the user will have to either click OK or Cancel to proceed after entering the input
value. If the user clicks OK, th box returns the input value. If the user clicks cancel the box returns null.

The prompt() method takes two parameters
-the first is label, which you want to display in the text box.
-the second is a default string to display in the text box (optional)
 */

var user = prompt("Please enter your name");
alert(user);

/*
A confirm box is often used to have the user verify or accept something.
When a confirmation box pops up, the user must click either OK or Cancel to proceed.
If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false.
 */

var result = confirm("Do you like puppies?");
if (result==true){
    alert("Woof woof!")
}
else {
    alert("Grrrgrrrrrr...");
}