/*
IMAGE SLIDER

Now we can create a sample image slider project. THe images will be changed using "Next", and the "Prev" buttons.
Now, let's create our HTML, which includes an image and the two navigation buttons:

Next we need to define our sample images in an array and handle the Next and Prev button clicks and call the
corresponding functions to change the images
 */

var images =[
    "https://iso.500px.com/wp-content/uploads/2016/04/stock-photo-150595123-1500x1000.jpg",
    "https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/i2c81a69087b406ef/version/1456237268/most-beautiful-landscapes-in-europe-hallstatt-copyright-canadastock-european-best-destinations.jpg",
    "http://www.dailybackgrounds.com/wp-content/uploads/2015/01/amazing-space-nebula.jpg"
];
var num = 0;

function next(){
    var slider =
        document.getElementById("slider");
    num++;
    if(num>=images.length){
        num=0;
    }
    slider.src = images[num];
}

function prev(){
    var slider =
        document.getElementById("slider");
    num--;
    if (num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
}

/*
The num variable holds the current image. The next and previous button clicks are handled by their corresponding
functions, which change the source of the image to the next/previous image in the array.

 */