/*
CHANGING ATTRIBUTES

Once you have selected the element(s) you want to work with you can change their attributes.
As we have seen, we can change the text content of an element using the innerHTML property.
Similarly, we can change the src attributes of an image:

<img id = "myimg" src="orange.png" alt="" />
<script>
var el =
document.getElementById("myimg");
el.src="apple.png";
</script>


we can change the href attribute of a link:

<a href="http://www.example.com"> Some link </a>
<script>
war el =
document.getElementByTagName("a");
el[0].href = "http://www.sololearn.com";
</script>


Practically all attributes of an element can be changed in javascript.

select all images of page and change their src attribute

var arr = document.getElementsByTagName("img");
for (var x=0; x<arr.length; x++) {
arr[x}.src = "demo.jpg"
}

CHANGING STYLE

The style of HTML elements can also be changed using JavaScript.
All style attributes can be accessed using the style object of the element.

<div id="demo" style="width:200px">some text</div>
<script>
var x = document.getElementById("demo");
x.style.color = "6600FF";
x.style.width = "100px";
</script>

The code above changes the text color and width of the div element

All CSS properties can be set and modified using Javascript. Just remember, you cannot use dashes (-) in rhe property
names: these are replaced with camelCase versions where the compound words begin with a capital letter. For example
background-color should be referred to as backgroundColor.

 */