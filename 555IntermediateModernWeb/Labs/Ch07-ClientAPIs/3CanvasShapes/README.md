# Chapter 7: Canvas Shapes

## Objectives
* In this lab, you will use canvas to draw some shapes

1. In `\WIP\ES6` add a `canvas` directory

1. Add a `canvas-shapes.html` file that contains a canvas element
    ```
    <canvas id="canvas" width="800" height="400"></canvas>
    ```

1. In `<script>` tags add a function called `init()` that gets kicked off by an onload event on the body tag.

    In `init()` create a few shapes such as on the slide.
    * Add code to access the canvas object in the DOM by its id.
    * Get a 2D context.

    ```javascript
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ```

1. Now use the context to draw a rectangle, triangle and two circles.

1. Open the file in the browser.

1. Refer to the `/Demos` folder for additional help.

1. Mark your work as complete

## Bonus

1. Follow the steps in the README.md in \Labs\Ch06-ClientAPIs\4CanvasChart/