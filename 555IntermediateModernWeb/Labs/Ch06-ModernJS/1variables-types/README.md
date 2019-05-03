# Chapter 6: JS variables

## Objectives
* Practice with JS variables

### Estimated Completion Time 
10 minutes
 
1. In `WIP` create a new folder called `js`

1. In `WIP/js` create a file called `variables.js` and do your work in this file.

1. Declare variables x,y,z
    ```javascript
    let x,y,z;
    ```

1. Set the value of x to 10, y to '10' (string) and z to 30
    ```javascript
    x=10;
    y = '10';
    z=30;
    ```

1. Use the `typeof` operator to check the types of each variable, printing the result to the console.
    ```javascript
    console.log(`x is ${typeof x}`);
    ```

1. Check your work, first by using node to run your code from the command line:
    * right-click the file, choose open in command prompt
    * use this command: `node variables`
    
1. Now install the VSCode extension called Code Runner.
    * After the install, reload VSCode
    * highlight your lines of code, right-click and choose Run Code 

1. Add this code:
```javascript
    var newX = x++;
```

1. Print the value using console.log - is it what you expect?

1. Use console.log to see the comparison and the result of x == y. 

## Bonus

1. Use the following code to get the number of milliseconds since epoch. Jan 1, 1970.  
    ``` javascript
    let timeInMs = Date.now();
    ```

1. Use operators to do some rough calculations and console.log to show:
    * how many years since epoch  
    * how many months
    * how many daya


 
