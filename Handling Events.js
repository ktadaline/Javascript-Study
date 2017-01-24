/*
EVENTS

You can write JavaScript code that executes when an event occurs, such as when a use clicks an HTML element, moves the
mouse, or submits a form.

When an event occurs on a target element, a handler function is executed.

Common HTML elements include:

Event:           Description:
onclick          occurs when the user clicks on an element
onload           occurs when an object has loaded
onupload         occurs once a page has unloaded (for <body>)
onchange         occurs when the content of a form element, the section, or hte checked state have changed (for <input>,
                  <keygen>, <select>, and <textarea>)
onmouseover      occurs when the pointer is moved onto an element, or onto one of its children
onmouseout       occurs when a user moves the mouse pointer out of an element, or out of one of its children
onmousedown      occurs when the user presses a mouse button over an element
onmouseup        occurs when a user releases a mouse button over an element
onblur           occurs when an element loses focus
onfocus          occurs when an element gets focus



Corresponding events can be added to HTML elements as attributes.
For Example: <p onclick="someFunc()"> some text</p>

lets display an alert popup when the user clicks on a specified button
 */

function show(){
    alert("Hi there")
}

/*
Even handlers can be assigned to elements. For Example:
 */

window.onload = function() {
    var x = document.getElementById('demo');
    x.onclick = function(){
        document.body.innerHTML = Date();
    }
}

/*
The onload and onunload events are triggered when the user enters or leaves the page. These can be useful when performing
actions after the page is loaded.

<body onload="doSomething()">

Similarly, the window.onload event can be used to run code after the whole page is loaded
 */

window.onload = function(){
    alert(["( . )( . )"]);
}

/*
The onchange event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes
and focus is lost from the element.

For Example:
 */

function change(){
    var x = document.getElementById('name');
    x.value=x.value.toUpperCase();
}

/*
EVENT LISTENERS

The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. You
can add many event handlers to one element. You can also add many event handlers of the same type to one element, i.e.,
two "click" events.

element.addEventListener(event, function,useCapture);

The first parameter is the event's type (like "click" or "mousedown").

The second parameter is the function we want to call when the event occurs.

The third parameter is a Boolean value specifying whether to use event bubbling or event capturing. This parameter is
optional, and will be described in the next section.

Note-you don't use the "on" prefix for this event; use "click" instead of "onclick"

element.addEventListener("click",
myFunction);
element.addEventListener("mouseover",
myFunction);

function myFunction(){
  alert("Hello World!");
}


This adds two event listeners to the element. We can remove one of the listeners:

 element.removeEventListener("mouseover", myFunction);

 Let's create an event handler that removes itself after being executed:
 */

window.onload = function() {
    var btn = document.getElementById("tester");
    btn.addEventListener("click", myFunction);

    function myFunction(){
        alert(Math.random());
        btn.removeEventListener("click", myFunction);
    }
};

/*
After clicking the button, an alert with a random number displays and the event listener is removed.

Internet Explorer version 8 and lower do not support the addEventListener() and removeEventListener() methods. However,
you can use the document.attachEvent() method to attach event handlers in Internet Explorer.
 */

