
/* On create set the image of a cat using a random number generator
document.getElementById returns an element using the id from the html
first param is an event
"click" -> on click
"dblclick" -> double click
"load" -> object loaded
"submit" -> form is submitted
*/
// document.getElementById("picture").addEventListener("click", myFunction);


// Execute a javaScript immediately after a page has been loaded'
// put in html
// <body onload="myFunction()">

/* Changing HTML
to change the content of an html element, use this syntax:
    document.getElementById(id).innerHTML = new HTML
    i.e. for <p id="p1">Hello World!</p>
    document.getElementById("p1").innerHTML = "New text!";
    changes to <p id="p1">New text</p>
 To change the value of an HTML attribute, use this syntax:
    document.getElementById(id).attribute = new value
    i.e this <img id="myImage" src="smiley.gif">
    document.getElementById("myImage").src = "landscape.jpg";
    changes to <img id="myImage" src="landscape.jpg">
 */

//alert("This runs I hope");
function load() {
   // alert("in Load");
    let size = randomNumber();
    document.getElementById("catpicture").src = "https://placekitten.com/" + size + "/" + size;
}

/*
// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;
*/
function randomNumber() {
    // max range 300 - 1200
    let num = Math.floor(Math.random() *900) + 300;;
   // alert("Rand number is " + num);
    // TODO CHANGE TO RANDOM
    return num;
}