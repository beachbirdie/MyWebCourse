# Extra Practice: CSS Quiz

## Objectives
* Use HTML and CSS to create a quiz page which uses CSS hover to reveal an answer

## Steps:
1. In `WIP` create a folder called `CSSQuiz` - do your work in this folder.

1. View the image in this folder, `CSSQuiz.png`

1. You will recreate this mini Quiz application.
    * Create an HTML layout with Question and Answer boxes - with Q on left and A on right.
    * Then use CSS to hide the answer until it is revealed when the question is hovered.
   
1. For hints, scroll down below:
```

























```
### Hints (Level 1)

1. You can always refer to one possible solution in the folder `/CSSQuizSolution/`



1. There are different ways to approach this. One way is to use floats on block level elements such as 
paragraphs. You will need to give a width to paragraphs. Recall there are ways to fix issues with floating
such as `clear: both`. 

1. In order to hide the answer you can use `display:none`

1. To reveal the answer when hovering over the question, you can use the adjacent sibling selector. question + answer

### Hints (Level 2)

1. Create the HTML using paragraphs for Questions and Answers. Wrap each set of Q & A in a div

1. Use CSS to display Questions and Answers next to each other.  
    * could use p {display: inline}
    * use width, margin and padding to make things look good

1. Now use CSS to hide the answers 
    * if answers have class="answer" can use
    ```CSS
    .answer {display:none}
    ```

1. Use CSS hovers of the Questions to reveal the Answers 
    ```CSS
    .question:hover + .answer {display: inline block}
    ```

