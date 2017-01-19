/*
Animations

Now that we know how to select and create DOM events, we can create a simple animation. Let's create a simple HTML page
with a box element that will be animated using JS.

Our box element is inside a container element. Note the position attribute used for the elements:
The container is relative and the box is absolute. This will allow us to create animation relative to the container.

We will be analyzing the gold box to make it move to the right side of the container.

(to understand html code better, look into CSS)

To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this
by using the setInterval()method, which allows us to create a timer and call a function to change properties repeatedly
at defined intervals (in milliseconds)



var t - setInterval(move, 500);


This code creates a timer that calls a move() function every 500 milliseconds. Now we need to define the move()
function that changes the position of the box.



//starting position

var pos = 0;

//our box element
var box = document.getElementById("box");

function move(){
    pos += 1;
    box.style.left = pos+"px";
    //px = pixels
}


The move() function increments the left property of the box element by one each time it is called.

The following code defined a timer that calls the move() function every 10 seconds:


var t = setInterval(move, 10);


However, this makes our box move to the right forever. To stop the animation when the box reaches the end of the
container, we add a simple check to the move() function and use the clearInterval() method to stop the timer.

function move(){
    if (pos>=150){
        clearInterval(t);
    }
    else{
        pos +=1;
        box.style.left = pos+"px";
    }
}


When the left attribute of the box reaches the value of 150, the box reaches the end of the container, based on a
container width of 200 and a box width of 50.
 */

/*
The final code:
*/
window.onload = function(){
    //calling the function in window.onload to make sure the HTML is loaded
var pos = 0;
//our box element
var box = document.getElementById('box');
var t = setInterval(move, 10);

function move(){
    if (pos>=150){
        clearInterval(t);
    }
    else{
        pos+=1;
        box.style.left=pos+'px';
    }
}
};

