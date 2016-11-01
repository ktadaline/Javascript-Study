/**
 * Created by ksroub on 10/27/2016.
 */
/*arithmetic operators

operator  -  description    - example
 +        -  addition       - 7+5=30
 -        -  subtraction    - 25-5+20
 *        -  multiplication - 10*20=200
 /        -  division       - 20/2 = 10
 %        -  modulus        - 56%3 = 2
 ++       -  increment      - var a = 10; a++; Now a = 11
 --       -  decrement      - var a = 10; a--; Now a = 9

*/

var a = 10 + 5;
document.write (a);



var bk =  "<br /> " ;
document.write (bk);

var b = 10;
var c = b + 5 + 22 + 45 + 6548;
document.write(c);


document.write (bk);

var d  = 10 * 5;
document.write(d);

document.write(bk);

var e = 100 / 5;
document.write(e);

document.write(bk);

//the modulus - returns the division remainder (what is left over)
//in javascript the modulus operator is used not only on integers but also on floating numbers

var f = 26 % 6;
document.write(f);

document.write(bk);

/*Increment ++
The increment operator increments the numeric value of its operand by one. If placed before the operand, it returns the
incremented value. If placed after the operand, it returns the original value and then increments the operand.
 */

//post increment
var g = 0, h = -1;
var g = h++;
document.write(g);
document.write(bk);
document.write(h);

document.write(bk);

//pre increment

var i = 0, j = 10;
var i =  ++j;
document.write(i);
document.write(bk);
document.write(j);

document.write(bk);

/* Decrement--
The decrement operator decrements the numeric value of its operand by one. If placed before the operand, it returns
the original value and then decrements the operand.
 */

//post decrement
var k = 7, l = 28;
var k = l--;
document.write(k);
document.write(bk);
document.write(l);

document.write(bk);

//pre decrement
var m = 0, n = 8;
var m = --n;

document.write(m);
document.write(bk);
document.write(n);