# Chapter 11: Exercise: Creating an HTML Page and Using jQuery Selectors
## Objectives
* Create a new HTML page
* Reference a jQuery script
* Create jQuery selectors
* Add some simple styling

### Estimated Completion Time 
15 minutes

## Steps: 
1. In this exercise you will create an HTML page and reference the jQuery script. You'll then work with different jQuery selectors to locate elements in the page.

1. In the `WIP` folder, create a folder named
`jQuery`.

1. Create a subdirectory called `/scripts` 

1. Into `WIP\jQuery\scripts`, download jQuery from the website: `https://jquery.com/download/`

	Get the latest compressed (minified) and uncompressed versions.
	
	If you do not have internet access you can also copy the scripts from `\555intermediatemodernweb\scripts`

1. Compare the uncompressed and compressed versions to see the difference.

1. In your `WIP\jQuery\` directory, create a file named `jq.html`. 

1. READ: A reference to jQuery needs to be added to your HTML file.  This can be done using one of the libraries in your `/scripts` folder, or you can reference a CDN.

1. Immediately above the closing `</head>` tag add the following script block:
	```html
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

	<script>    window.jQuery || 
	document.write('<script src="./scripts/XXXXXXX"><\/script>');
	</script>
	```
	Where XXXXXX is a reference to the script that you downloaded.

1. Place the following script immediately above the closing </head> tag – after the script reference you just added. 
	```html
	<script>
		/* Add jQuery code in the handler */
		$(function() {
			alert('hello');
		});
	</script>
	```
1. Open your `jq.html` in a browser. You should see the alert. If not, use Developer Tools in your browser to see what the issue may be.  Check for syntax errors under the Console

1. If you were successful the first time, and saw the hello message - you will now purposely cause an error to see what it looks like. Temporarily set the CDN to have the wrong value, such as `jquery-3.3.1.ABC.js`.  Reload the browser, do you still see the hello message? If so your local file is working.

1. If your local file works, temporarily set it to something invalid.  

1. Once you have seen the error in Developer Tools, fix the script tags to be valid so that you do get the hello alert.  Once this is working, you can remove this annoying alert.

1. Now inside the `<body>` tag in `jq.html` add two `<ul>` for things you like and things you do not like to do. Include at least 3 items in each list. For example:
	```html 
	<p>Things I Like to Do</p>
		<ul>
			<li>Wash Car</li>
			<li>Finish Taxes</li>
			<li>Vote</li>
		</ul>
	<p>Things I DO NOT Like to Do</p>
		<ul>
			<li>Wash Dishes</li>
			<li>Start Taxes</li>
			<li>Go to the DMV</li>
		</ul>
	```
1. Refresh the browser to see the content you added. 

1. Add the following code where the hello alert was, add this code:
	``` javascript
		$('p').css('font-weight', 'bold');
	```
1. Refresh your browser and note that the paragraphs are bold.

1. Add a table to your html with a row for headers for `artist` and `genre` and 3 data rows. Two rows should have the same genre.

	```html
	<table>
		<tr><th>Artist</th><th>Genre</th></tr>
		<tr><td>Stevie Wonder</td><td>Soul</td></tr>
	```

1. Add an id of "artists" to the opening table tag.

1. Use jQuery to target this table and make the text red.
	```javascript
	$("#artists").css('color', 'red');
	```

1. Add a "favorite" class to one `<li class="favorite">` in a `<ul>` and to the second row of data of the table. `<tr class="favorite">`

1. Use jQuery to target the favorites and give a background color of yellow. 
	```javascript
	$(".favorite").css('background-color', 'yellow');
	```

1. Use console.log and display the version of jQuery that is being applied. 
	* Hint select anything such as body and use the property from the slides

1. Mark your work as complete.

## Bonus

1. Create a page with 3 divs.

1. Using jQuery css() function - set the widths to 50% and center the boxes on the page. 

1. Use jQuery to console.log the count of the divs or buttons.


