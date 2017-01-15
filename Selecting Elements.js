/*
SELECTING ELEMENTS

All HTML elements are objects. And as we know, every object has properties and methods. The document object has methods
that allow you to select the desired HTML element. These three methods are the most commonly used for selecting HTML
elements:
 */

//finds element by id
document.getElementById(id);

//finds elements by class name
document.getElementsByClassName(name);

//finds element by tag name
document.getElementsByTagName(name);

//In the example below, the getElementById method is used to select the element with id="demo" and change its content:
var elem =
    document.getElementById("demo");
    elem.innerHTML = "Hello World!";

// The example above assumes that the HTML contains an element with id="demo", for example <div id="demo"></div>.

/*
SELECTING ELEMENTS

The getElementsByClassName() method finds all elements by class name and returns them as an array.

For example, if our HTML page contained three elements with class="demo", the following code would return all those
elements as an array:
 */

var arr = document.getElementsByClassName("demo");
//accessing the second element

arr[1].innerHTML = "Hi";

/*
Similarly, the getElementsByTagName method returns all of the elements of the specified tag name as array.
The following example gets all paragraph elements of the page and changes their content:

<p>hi</p>
<p>hello</p>
<p>hi</p>


var arr =
document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++){
    arr[x].innerHTML = "Hi there";
}

The script would result in the following HTML:

<p>Hi there</p>
<p>Hi there</p>
<p>Hi there</p>

We used the length property of the array to loop through all the selected elements in the above example

WORKING WITH DOM

Each element in the DOM has a set of properties and methods that provide information about their relationships in the
DOM:

element.childNodes returns an array of an element's child nodes
element.firstChild returns the first child node of an element
element.lastChild returns the last child  node of an element
element.hasChildNodes returns true if an element has child nodes, otherwise, false
element.nextSibling returns the next node at the same tree level
element.previousSibling returns the previous node at the same tree level
element.parentNode returns the parent node of an element

We can, for example, select all the child nodes of an element and change their content:

<html>
<body>
<div id = "demo">
<p> some text </p>
<p> some other text </p>
</div>

<script>
var a =
    document.getElementById("demo");
var arr = a.childNodes;
for(var x=0;x<arr.length;x++){
    arr[x].innerHTML = "new text";
}
 </script>
 </body>
 </html>


 the code above changes the text of both paragraphs to "new text"
    */
