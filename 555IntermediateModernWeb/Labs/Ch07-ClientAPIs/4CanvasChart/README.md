# Chapter 7: Bonus Exercise: Building a Chart with the Canvas
## Objective
* Create a chart using the canvas API with data in a JSON format. 

## Steps:

1. Copy the `CanvasChartWIP` folder to the `\WIP\ES6.canvas` directory. You will work on the files provided as a starting point. 

1. Read through the `canvasChart.js` file and notice that it is an IIFE. 

1. Read through the `chart.html` file and notice that the `onload` defines a JavaScript object which is passed to the canvasChart.render function. 

1. Open chart.html in a browser and notice that x and y axes are rendered along with a line chart. In the remainder of this exercise you'll add additional functionality to the chart including text for the x and y axes and circles to highlight data points.

1. Locate the `render()` function and notice that it performs the standard steps needed to render to a canvas including finding the canvas in the DOM and accessing the 2D context.

1. Find the `renderChart()` function and note that it makes calls to additional functions to render the chart background, text, lines and labels.

1. Complete the `renderBackground()` function to draw a gradient with 4 color stops. This gradient will be rendered to a rectangle that serves as the background of the chart.

    ```javascript
    var renderBackground = function() {
            var lingrad = ctx.createLinearGradient(margin.left, margin.top, xMax - margin.right, yMax);
            lingrad.addColorStop(0.0, '#D4D4D4');
            lingrad.addColorStop(0.2, '#fff');
            lingrad.addColorStop(0.8, '#fff');
            lingrad.addColorStop(1, '#D4D4D4');
            ctx.fillStyle = lingrad;
            ctx.fillRect(margin.left, margin.top, xMax - margin.left, yMax - margin.top);
            ctx.fillStyle = 'black';
        };
    ```
1. Locate the renderText() function and add the following code to render the chart's title. Add the code below the existing Title comment:
    ```javascript
            //Title
            var txtSize = ctx.measureText(data.title);
            ctx.fillText(data.title, (chartWidth / 2), (margin.top / 2));
    ```
1. Add the text along the X-axis by adding the following code below the X-axis text comment:
    ```javascript
    //X-axis text
            txtSize = ctx.measureText(data.xLabel);
            ctx.fillText(data.xLabel, margin.left + (xMax / 2) - (txtSize.width / 2), 
                    yMax + (margin.bottom / 1.2));
    ```

1. Next, add the Y-axis text for the chart by adding the following code below the Y-axis text comment:
    ```javascript
    //Y-axis text
            ctx.save();
            ctx.rotate(-Math.PI / 2);
            ctx.font = labelFont;
            ctx.fillText(data.yLabel, (yMax / 2) * -1, margin.left / 4);
            ctx.restore();
    ```


1. The save call takes a snapshot of the current canvas state. Since the Y-axis text needs to be displayed vertically, the context is rotated.

1. After the text is written, we rotate the context back by calling restore().

1. Save the script and view chart.html in the browser. Notice that the background and text you added now renders.

1. Go back to canvasChart.js and locate the `renderData()` function. This function renders the chart lines and will also render circles that will be placed at specific data points (refer back to the earlier chart image).

1. The chart lines are drawn by making a call to a custom function called drawLine().

1. To render the data point circles, add the following code after the render circle comment in `renderData()`:
    ```javascript
    //Render circle
                    ctx.arc(ptX, ptY, 8, 0, 2 * Math.PI, false)
                    ctx.fill();
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = '#000';
                    ctx.stroke();
                    ctx.closePath();
    ```

1. Save canvasChart.js and reload the browser to see the completed chart.



