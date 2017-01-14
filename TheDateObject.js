/*

setInterval

The setInterval() method calls a function or evaluates an expression at specified intervals (milliseconds). It will
continue calling the function until clearInterval() is called or the window is closed.
*/

function myAlert(){
    alert("Fuck");
}
setInterval(myAlert, 30000);


function writeHI(){
    document.write("Hi   ");
}
setInterval(writeHI, 4000);

function writeHello(){
    document.write("Hello   ");
}
setInterval(writeHello, 9000);

/*
function writeDate(){
    document.write(new Date);
}
setInterval(writeDate, 20000);
*/


/*
1000ms = 1 second

write the name of the function without parentheses when passing it into the setInterval method

The Date Object enables us to work with dates. A date consists of a year, a month, a day, an hour, a minute, a second,
and milliseconds. Using new Date(), create a new date object with the current date and time
 */

var d = new Date();
//d stores the current date and time

console.log(d);

/*the other ways to initialize dates allow for the creation of new date objects from the specified date and time

new Date(milliseconds)
new Date(dateString
new Date(year, month, day, hours, minutes, seconds, milliseconds)

javascript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). One day contains
86,400,000 millisecond.
 */
var d1 = new Date(864000000);
console.log(d1);

var d2 = new Date("June 15, 1988 1:15:00");
console.log(d2);

var d3 = new Date(91,9,11,12,0,0,0);
console.log(d3);


/*
Javascript counts months from 0-11 so January is 1, December is 11. Date objects are static rather than dynamic. The
computer time is ticking but the date objects don't change, once created.


DATE METHODS
when a date object is created, a number of methods make it possible to perform operations on it.

Method            Description
getFullYear()     gets the year
getMonth()        gets the month
getDate()         gets the day of the month
getDay()          gets the day of the week
getHours()        gets the hour
getMinutes()      gets the minutes
getSeconds()      gets the seconds
getMilliseconds() gets the milliseconds

 */

var K = new Date();
var hours = K.getHours();
//hours is equal to the current hour

console.log(hours);



//lets create a program that prints the current time to the browser once every second

function printTime(){
    var p = new Date();
    var hours = p.getHours();
    var mins = p.getMinutes();
    var secs = p.getSeconds();
    document.body.innerHTML = hours + ";" + mins + ";" + secs;
}
setInterval(printTime, 1000);

/*
We've defined a function printTime, which gets the current time from the date object, and prints it to the screen. We
then called the function once every second using the setInterval method


The innerHTML property sets of returns the HTML content of an element, in our case we are changing the HTML content
of our document's body. This overwrites the content every second, instead of printing it repeatedly to the screen.
 */
