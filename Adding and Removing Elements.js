/*
Creating Elements

Use the following methods to create new nodes:

element.cloneNode() clones an element and returns the resulting node.
document.createElement(element) creates a new element node.
document.createTextNode(text) creates a new text element.
*/

var node = document.createTextNode("Some new text");

/* This will create a new text node, but it will not appear in the document until you append it to an existing element
with one of the following methods:

element.appendChild(newNode) adds a new child node to an element as the last child node.
element.insertBefore(node 1,node 2) inserts node 1 as a child before node 2.

 <div id = "demo"> some content </div>

 <script>
 //creating a new paragraph

 var p = document.createElement("p);
 var node = document.createTextNode("Some new text");
 //adding the text to the paragraph
 p.appendChild(node);

 var div = document.getElementById("demo");
 //adding the paragraph to the div
 div.appendChild(p);
 </script>

 This creates a new paragraph and adds it to the existing div element on the page.


 add a new <li> element to the unordered list with id = "list"

 var el = document.createElement("li");
 var txt = document.createTextNode("B");
 el.appendChild(txt);
 var ul = document.getElementById("list");
 ul.appendChild(el);

 REMOVING ELEMENTS

 To remove an HTML element you must select the parent of the element and use the removeChild(node) method.

 <div id = "demo">
 <p id = "p1"> This is a paragraph </p>
 <p id = "p2> This is another paragraph </P>
 </div>

 <script>
 var parent =
 document.getElementById("demo");
 var child = document.getElementById("p1");
 parent.removeChild(child);
 </script>


 this removes the paragraph with id = "p1" from the page

 An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the
 element we want to remove:

 var child =
 document.getElementById("p1");
 child.parentNode.removeChild(child);

 REPLACING ELEMENTS

 To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used.

 <dic id = "demo">
 <p id="p1">This is a paragraph.</p>
 <p id="p2">This is another paragraph.</p>
 </div>

 <script>
 var p = document.createElement("p");
 var node = document.createTextNode("This is new");
 p.appendChild(node);

 var parent =
 document.getElementById("demo");
 var child = document.getElementById("p1");
 parent.replaceChild(p, child);
 </script>

 The code above creates a new paragraph element that replaces the existing p1 paragraph

 */