import myArrayToText from './array-to-text';

document.addEventListener("DOMContentLoaded", function() {
	var myArray = [1, 2, 3, 4, 5, 6, 7];
	var text = myArrayToText(myArray);
	document.getElementById("text").innerHTML = text;
});


