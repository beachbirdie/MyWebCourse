# Chapter 3: Practice with inline elements

## Objectives
* Add inline level elements to your document
* Read directions that are similar to conditional statements
    * if (this) then (do that) 
* Practice moving between files and directories
* Create links to external pages
* Create internal links
* Add an image to a doc

### Estimated Completion Time 
15 minutes

1. In your `/WIP/html` open your file `index.html` which you created which had Welcome in different languages.

1. Immediately after the starting `<body>` tag add this content which creates an area for links to other pages:
    ```html
    <nav>
            <ul>
                <li>
                    <a href="course-outline.html">Course Outline</a>
                </li>
                 <li>
                    <a href="recipes.html">Recipes</a>
                </li>

            </ul>
    </nav>
    ```

1. Test your updates and that clicking the link for Course Outline opens the other page. Notice when you hover over the links the link is displayed in the bottom left of the browser window.
 
1. Copy the bonus solution file from 
 `\Labs\Ch03-HTML5\elements-block\solution\recipes.html` into your 
 `\WIP\html` directory.

1. Open `/WIP/html/recipes.html` in the editor and view in the browser.
 
1. Copy this content into the area just below the `<h1>` element.
    ```html
    <ul>
            <li>
                <a href="#lemon-bars">Lemon Bars</a>
            </li>

            <li>
                <a href="#salmon">Salmon</a>
            </li>
            <li>
                <a href="#chicken">Chicken</a>
            </li>
        </ul>
    ```
 
1. `Note` how these internal links with the `#` symbol match the id values below such as: 
    ```html
        <div id="chicken">
    ```

1. Test how these links work in the browser.   

1. Copy this content below the internal links that you added:
    ```html
    <p>
            Want to make different quantities? You can use these
            <a href="https://www.free-online-calculator-use.com/recipe-conversion-calculator.html"
                target="_blank">
                measurement conversions</a> to change your recipes.
    </p>
    ```

1. Test that this links to an external page that opens in a new browser tab.

1. In the solutions folder for this exercise is a folder called `images`. Copy this folder by clicking it, control-c to copy, then paste it into your `WIP/html/` directory by clicking it and using control-v.

1. In your recipes file, find the location of `<div id="lemon-bars">`

1. Immediately inside of this div element - so after the start tag of div before the first child of  `<h2 class="recipe-name"` start typing 
    ```html
    <img src=>
    ```


1. Notice how VSCode will try to complete the path for you. You want this to be the complete line:
    ```html
    <img src="images/lemonbars.jpg">
    ```        

1. Modify your recipe to use inline elements to make 3 of the  ingredient measurements emphasized. For example:
    ```html
    <li><em>2</em> cups sifted flour</li>
    ```

1. Mark your work as complete.  

## Bonus

1. Add a link in index.html to `myrecipes.html` if you created it

1. Add images for the other recipes. Display them smaller at the top of the page and wrap an anchor tag, to href to the recipe below. 

1. Modify your `myrecipes.html` to have internal links like we did in the exercise.