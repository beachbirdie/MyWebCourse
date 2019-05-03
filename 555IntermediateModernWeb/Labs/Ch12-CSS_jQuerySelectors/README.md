# Chapter 12: Exercise: JQuery CSS Manipulation & Selectors
## Objectives
* In this lab, you will apply multiple CSS manipulations
and use various selection techniques

### Estimated Completion Time 
20 minutes
## Objectives
* Use objects passed to the CSS function
* Use pseudo-class selectors for evens and contains

### Estimated Completion Time 
20 minutes

## Steps:

1. Continue working with your `WIP\jQuery\jq.html` file. If you were not able to finish the last exercise, you can copy the solution from its solution folder. 

1. Apply multiple CSS styles to the `<ul>` elements to make the width narrower, and add a border.

	```javascript
	$("ul").css({
		width: 400,
		border: '2px dashed pink'
	});
	```
1. Refresh the browser to see the changes.

1. Make the items that you do not like to do have a red font.  You can use:
	``` javascript
		$("p:contains('DO NOT')").css('color','red');
	```
1. Refresh the browser to see the red text.

1. Make every other table row highlighted with grey. You can use:
	``` javascript
	$("tr:even").css('background-color','rgba(128,128,128,.5)');
	```



1. Add a `<style></style>` section in the head. Add a class called `highlight` which applies a yellow background.

1. Add a button before your list items with an id of `toggleli` and the text  `Toggle Events`. 

1. Use jQuery to add a click event for this button. In the callback function toggle the highlight class for even li's. 

1. Mark your work as complete.

### Bonus

1. If you havent already, create a div that is a box centered on a page. Add 3 buttons labeled Turn Red, Turn Blue, Turn Green. When one of the buttons is clicked - turn the div box that color. 

1. If time permits, visit http://codylindley.com/jqueryselectors  and experiment with different selectors.
