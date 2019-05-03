# Chapter 4: Adding CSS to pages

## Objectives
* Add CSS and some simple styling to pages

### Estimated Completion Time 
20 minutes

## Create page and include CSS


1. If you needed to step away or otherwise did not finish the Lorem Ipsum content exercise,
please rename your LoremIpsum folder (or delete if you do not want to keep it). You can then copy the solution folder `\Labs\ch03-html5\Semantic\solution\LoremIpsum` into your `/WIP/` directory.

1. Continue working in `LoremIpsum` 

1. If using your work - ensure your lorem-ipsum.html file has 
    * a link to an external stylesheet main.css that has media set to `all`.
        * you may need to update this value

1. Create the `main.css` file being referred to in the HTML at the same level as your html file. 
    * Inside of this css file, add this statement:
    ```css
    @import url('halloween.css');
    ```
    * create a `halloween.css` and set `<header>` elements to have an orange background color.
    ```css
    header {background-color: orange;}
    ```    

1. Reload the page - the header in your document should have an orange background.
    * If not - check your CSS and use of import.

1. You can continue to add styles in your `main.css` if you have enough screen space you may wish to open your editor in Split mode (upper right icon in VSCode) to see both HTML and CSS at once. Or you may wish to put your CSS in embedded `<style>` tags.
    * target the body tag and make text red

1. Reload your page, what color is the displayed h1,h2 and anchor text? 
   * We will address the nav styling later.

1. Continue the following steps refreshing the browser when you want to check work that you are doing.


## Add style to Lorem Ipsum
  
1. Perform the following using CSS, check after each step: (modify HTML as needed)
    * Target all h2 to be green (should affect the text `let's show some content` and h2 in articles) 
    * Target just the h2 in the header to be black
    * Target the third letter of the first generator's h2 to also be black. Add a span, use id and descendent). So style the span, in the h2, in the article with the id you chose for the first generator. 
    * Target all paragraphs to be blue
    * Target the second paragraphs of each to be black (add a class="two" to each article's second paragraph)
    
## Make printing better and cheaper

1. When viewing the page use the browser to start to print it so that you see the print preview dialog.
    * You should see all content with same color set (if your OS supports it)

1. Make changes so that when you print the document only the main content is printing in black text. For hints and to continue, scroll down:

    ```







































    ```
    To quickly get rid of colors you can either:
    1. wrap your rule-sets in 
        ```CSS
        @media screen { 


        } 
        ```
    1. Or put media="screen" back in the link to main.css

1. To turn off the `<header>` and `<footer>` create a `print.css` which excludes
these by using this CSS - we will talk about other values later. 

```css
    header, footer {display: none;}
```

1. View on screen, view on print preview is same? if not check your work.

1. Mark your work as complete, before continuing to the bonus


## Bonus

1. CSS: 
1. JS: Create a button that when clicked updates some of the CSS values we have used so far.