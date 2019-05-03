# Chapter 13: Exercise: The jQuery EventModel
## Objectives
* Handle jQuery click events


### Estimated Completion Time 
10 minutes

## Steps:
 
1. Continue working with your `WIP\jQuery\jq.html` file. If you were not able to finish the last exercise, you can copy the solution from its solution folder. 

1. Add a click event to the paragraphs that once clicked, their title attribute is set to display 'Paragraph'.

	```javascript
   		$("p").click(function(){
			this.title = 'Paragraph Title';
		});
	```

    Note the use of this. We do not need a full JQ object to adjust simple attributes.

1. Refresh your browser, hover over a paragraph and note there is no title. 

1. Open devtools and inspect the paragraph. Keep the tools open and watch as you click the paragraph. Note that the title attribute is now added.

1. Move your cursor away from the paragraph and back again for a hover, and notice the title is now displayed. 

1. Try to add a click event for all immediate tr children of the table element (only immediate children – not all descendants), use this code:
	``` javascript
		$('table > tbody > tr').click(function(){
				$(this).css('background', '#66FF00');
			});
	```

	Notice the use of `$(this)`. Because we want to call a JQ function we need to wrap this in the jQuery notation.

1. Refresh the page in the browser and try selecting a row by clicking it. Once you have the color change working you can move on.

1. Try removing the `> tbody` part of the selector so that it is just `table > tr` from the last step and refresh the browser. Is the click working?	

1. The answer to the above question should be "no, it doesn't work" because tables have an implicit `<tbody>` child added inside of the table element by the browser. The `<tbody>` element is the immediate child which is why the previous selector doesn't select any `tr` elements. You can see this in the devtools DOM area. 

1. Change the selector back to `table > tbody > tr` and save the page. Be careful with this if ever working with table selectors and immediate child.

1. Refresh the page in the browser again and try clicking the rows. You should now see a green background become added.

1. Mark your work as complete

  	

