# Chapter 14: Exercise: Manipulating the DOM with jQuery

## Objectives
* In this lab, you will practice manipulating the DOM with jQuery.  
* use of prepend and appendTo

### Estimated Completion Time 
10 minutes

## Steps:

1. Continue working with your `WIP\jQuery\jq.html` file. If you were not able to finish the last exercise, you can copy the solution from its solution folder. 

1. READ: You can refer to the slides to complete the following or scroll down the page for more hints.

1. Remove li that are clicked. Once working, you can refresh the browser to see them again.

1. Target the li that has the class of favorite.
    * Prefix the current text with "Favorite: "
    * Add a span to the end that has an exclamation point
    * Use jQuery to add CSS for any span in an li to be bold


    ```javascript









    ```


## Hints

1. TO remove:
    ```javascript
 	    $('li').click(function(){
            $(this).remove();
        });
   	``` 

1. Prefix the html that is in the li marked as favorite with the text "Favorite: "
    ```javascript
 	    $("li.favorite").prepend('Favorite: ');
   	``` 


1.  Append exclamation...
    ```javascript
    $("<span>!</span>").appendTo("li.favorite");
    ```

## Bonus

1. Use an html() to GET the contents of items marked as favorite and log these to the console.


	