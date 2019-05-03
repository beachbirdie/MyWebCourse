# Chapter 3: Practice with block level elements

## Objectives
* Add markup to your document
* leverage HTMLWrap plugin

### Estimated Completion Time 
10 minutes
 
1. In your `/WIP/html` create a new file called  `class-outline.html`. You will work in this file.
Remember to use the html:5 template. If you forget how, go back to last exercise for help.

1. If you haven't already install the VSCode extension HTMLTagWrap.
    * Click extensions, look for HTMLTagWrap by Brad Gashler,and install | reload
    
1. HTMLTagWrap makes it easy to quickly markup your test.
    * click and drag to highlight a block of text
    * hit Alt+W 
    * if p is okay you are done, otherwise type the type of tag that you want

1. Copy the text below into your HTML file in between the body tags.

    ```
    Intro to Modern Web Development
    Featuring HTML5, CSS3, JavaScript (ES6+)

    Chapter 1: Modern Web Apps & Node
    Discuss browser clients calling servers using AJAX and Rest APIs

    Chapter 2: Working with Browsers
    Even experienced developers can be more productive using the browser developer tools

    Firefox
    Based on Firebug

    Chrome
    Looks like Firebug too
    ```

1. Save and use Alt-B to load the browser. Not so pretty?

1. Mark up the text with appropriate elements
    * Use headings h1, h2, and h3 as appropriate
    * Use paragraphs for content

1. Mark your work as complete. 

## Bonus

1. In your `/WIP/html` create a new file called  `myrecipes.html`

1. Copy this content into your file.

    ```
    Lemon Bars

    These lemon squares are a delightful recipe. I've been serving it for many years. This lemon bar recipe has a wonderful tangy flavor, and they're always a hit. The color and shape make them a nice addition to a platter of cookies.

    READY IN: 1hr 10mins	SERVES: 8-12
    YIELD: 12 bars or so	UNITS: US



    INGREDIENTS 

    FOR BASE
    2 cups sifted flour
    1⁄2 cup powdered sugar
    1 cup butter

    FOR TOP
    4 large beaten eggs
    2 cups white sugar
    1⁄3 cup lemon juice
    1⁄4 cup flour
    1⁄2 teaspoon baking powder
    1⁄2 teaspoon fresh lemon rind (optional)

    DIRECTIONS
    For the base mix the butter into the flour and sugar.
    Mix with hands until it clings together.
    Press into a 13 x 9 x 2-inch pan.
    Bake at 350°F for 20-25 minutes or until lightly browned.
    For the filling, beat together eggs, sugar and lemon juice.
    Sift together flour and baking powder.
    Stir into egg mixture.
    Pour over baked, cooled crust.
    Bake at 350°F for 25 minutes.
    Cool and sprinkle with powdered sugar.
    Cut into bars.
    ```


1. Use HTML markup tags to make it look more readable. Not pre!

    * Use heading tags for sections 
    * Use paragraphs for the intro
    * Group ingredients and direction using div tags, identify by using class values for ingredients and directions
    * Use an unordered list for the ingredients
    * Use an ordered list for the steps
    * use br if you need to

1. Add your own favorite or copy another recipe from online and mark it up. You can also copy and paste the code you made so that you have multiple recipes that you must scroll to see all of them. 

1. Ensure that each recipe is wrapped in a div that has a unique id value. (this will be used in future bonuses) 


