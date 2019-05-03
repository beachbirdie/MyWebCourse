# Chapter 6: Arrays practice

## Steps
 
1. In `WIP/js` create a file called `arrays.js` and do your work in this file. 

1. Create a string array with the name of 3 of your favorite hobbies. For help and to continue, scroll down.
    ```javascript





















    let hobbiesArray = ['coding',
    'testing',
    'listening to music'];

    ```

1. Create a function called `printHobbies`. It should produce the following type of output to the console (Scroll down for a hint and to continue:)
    ```
    I like 3 things: 
    I like x
    I like y
    I like z
    

























    ```

    ```javascript
    function printHobbies(passedArray) {
        console.log(`I like ${passedArray.length} things`);
        for (let index = 0; index < hobbiesArray.length; index++) {
            let element = hobbiesArray[index];
            console.log('I like ' + element);
        }  
    }
    ```

1. Now call your function passing the array you created.
   ```javascript
   printHobbies(hobbiesArray);
    ```

1. Mark your work as complete.

## Bonus

1. Write a simple program to console.log all elements of the following array into a formatted string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"

Hint: look up join() on MDN.


1.  Given an array find the most frequently occuring item. 
Given:
let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Output:
a (5 times)

