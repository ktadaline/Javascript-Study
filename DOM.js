/*
THE DOM

When you open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen,

To accomplish that, the browser builds the Document Object Model of that page which is an object oriented model of its
logical structure.

The DOM of an HTML document can be represented as a nested set of boxes.

                                 Document
                                    |
                      -----------<html>------------
                      |                           |
                   <head>                       <body>
                      |                           |
                   <title>                     -------
                                               |      |
                                             <hl>    <a>

Javascript can be used to manipulate the DOM of a page dynamically to add, delete and modify elements


DOM TREE

The DOM represents a document as a tree structure. HTML elements become interrelated nodes in the tree. All those nodes
in the tree have some kind of relations among each other. Nodes can have child nodes. Nodes on the same tree level are
called siblings. For example consider the above structure.

<html> has two children (<head>, <body>));
<head> has one child (<title>) and one parent (<html>);
<title> has one parent <head> and no children;
<body> has two children (<h1> and <a>) and one parent (<html>);


it is important to understand the relationship between elements in an HTML document in order to be able to manipulate
them with Javascript.

THE DOCUMENT OBJECT

There is a predefined document object in Javascript, which can be used to access all elements to the DOM. In other
words, the document object is the owner (or root) of all objects in your webpage. So, if you want to access objects in
an HTML page, you always start with accessing the document object.
 */

document.body.innerHTML =  "some text";

/*
As body is an element of the DOM, we can access it using the document object and change the content of the innerHTML
property.

The innerHTML property can be used on almost all HTML elements to change its content.
 */