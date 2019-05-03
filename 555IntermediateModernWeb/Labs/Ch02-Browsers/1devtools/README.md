# Chapter 2: DevTools

## Objectives
* Practice with the browser dev tools so that you will be comfortable using dev tools when debugging future coding exercises.

## Steps:

1. If you needed to step away or otherwise did not finish the bonus from the last exercise, you can copy this directory's `basics.html` t your WIP directory as `index.html`. 

1. If not already open, open your `index.html` in the Chrome Browser. Recall Alt-B from within the file being opened in VSCode, or right-clicking in the VSCode Explorer menu to open in default browser.

1. Open the dev tools by right-clicking on your displayed name in the browser, and choosing Inspect. 

    This should bring up the tools with the div highlighted in the left side (DOM elements) and the applied CSS on the right.

    Besides right-clicking in the browser display, and inspecting - you can also navigate and click on elements in the DOM section of the dev tools. 
    
1. In the CSS, practice changing the width of the box around your name, by:
    * clicking the current value to highlight it
    * hitting the up/down arrows to increment/decrement the value

1. Change the background color:
    * click the color value (#eeeeee) or the square of color - to launch the color picker  - sometimes you may have to click around a bit on teh squeare of color value.
    * choose a new color from color picker. you may need to hit return for your changes to stick.

1. Center the text by adding a new property. 
    * Click on the `value` that is for the last property in the list (probably `purple` after `color:` )
    * Then hit the tab key which takes you to a new line to add a new property and value
    * Add this property:   
    ```CSS
    text-align:center
    ```

1. Once your CSS added in dev tools works as you like, you would need to  go back and update the source file with the same properties and values.

1. When your name is centered, mark your work as complete.  

1. If you are done before others, help people near you, and continue to the Bonus.

## Bonus:

1. Try being more specific in your CSS so that only your name is centered - not hobbies.
    If you do not have hobbies, try to finish that bonus from ch1, or copy the solution from `Ch01-MWA_Node\Basics\solution`

1. Use this in the CSS to target the element with the id value of name
    ```CSS
    #name { text-align: center}
    ```

1. Try getting the entire box to be centered on the page.
