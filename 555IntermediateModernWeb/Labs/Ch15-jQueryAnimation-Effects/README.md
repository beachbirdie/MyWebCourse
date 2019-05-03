# Chapter 15: Exercise: Animations and Effects

## Objectives
* Hide li instead of removing from DOM
* Use show effects. 
* BONUS: Update the Quiz app to use jQuery to reveal answers.

### Estimated Completion Time 
10 minutes

## Steps:

1. Continue working with your `WIP\jQuery\jq.html` file. If you were not able to finish the last exercise, you can copy the solution from its solution folder. 

1. Update the current functionality, so that when `<li>` are clicked they are hidden instead of removed.

1. Add a button so that when clicked, the hidden `<li>` are shown.

    SCROLL DOWN FOR HINTS AND BONUS

    ```javascript










    ```


1. To hide the `<li>`
    ```javascript
    $('li').click(function(){
       $(this).hide();
    });
    ```	
	
1. After the list items add a reset button.            
    ```html
    <button id="resetli">Reset</button>
    ```

1. Add an event so that when this button is clicked, all `<li>` show. Use `.show()`
    ```javascript
    $("button#resetli").click(function(){
                $("li").show();
            });
    ```

1. Check your work in the browser.

### BONUS

1. Take a look at the solution to the CSS Quiz in `PracticeBonusProblems`.  Notice how the hover effect works.

1. You can achieve this and more using jQuery. 

1. Copy the `/Begin/quiz-jquery.html` file into your WIP folder.

1. Use jQuery to add multiple effects for the different questions and their answers.

1. Use different events for the different questions: (click, dblclick, hover) to reveal the answer (show, slideDon etc.) 

1. Use different events and effects to hide the answer - either on the questions or the answers.
