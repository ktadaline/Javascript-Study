/*
EVENT PROPAGATION

There are two ways of event propagation in the HTML DOM: bubbling and capturing.

Event propagation allows for the definition of the element order when an event occurs. If you have a <p> element inside
a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

In bubbling, the innermost element's event is handled first and then the outer element's event is handled. The <p>
element's click event is handled first, followed by the <div> element's click event.

In capturing, the outermost element's event is handled first and then the inner. The <div> element's click event is
handled first, followed by the <p> element's click event.

Capturing goes down the DOM
Bubbling goes up the DOM

CAPTURING vs. BUBBLING

The addEventListener() method allows you to specify the propagation type with the "useCapture" parameter.

addEventListener(event, function, useCapture)

The default value is false, which means the bubbling propagation is used; when the value is set to true, the event uses
the capturing propagation.

*/
//CAPTURING PROPAGATION

elem1.addEventListener("click", myFunction, true);

//BUBBLING PROPAGATION

elem2.addEventListener("click", myFunction,false);

/*
This is particularly useful when you have the same event handled for multiple elements in the DOM hierarchy
 */