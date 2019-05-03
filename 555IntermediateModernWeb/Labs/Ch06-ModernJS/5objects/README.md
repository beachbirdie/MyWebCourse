# Chapter 6: Object practice

## Steps
 
1. In `WIP/js` create a file called `hobbies.js` and do your work in this file. 
 
1. Create an array of 3 objects to define your hobbies. Each hobby should be represented as an object with a name, and `lengthInYearsAtHobby`. Scroll down for help and to continue:

    ``` javascript




















    const hobbiesArray = [
        { name: 'volleyball', lengthInYearsAtHobby: 25 },
        { name: 'cooking', lengthInYearsAtHobby: 15},
        { name: 'swimming', lengthInYearsAtHobby: 11}
    ];
    ```            

1. Create a function that takes in one hobby and prints it to console.log. Use ES6 backticks to concatenate without the plus symbol.  Use ${ }  with the variable name inside. Scroll down for help and to continue:

    ``` javascript


























    function printHobbyInfo(hobby) {
        console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `)
    }
    ```

1. Now loop through your array items and call your function for each item.    
    ``` javascript























        for (let x = 0; x < hobbiesArray.length; x++) {
            printHobbyInfo(hobbiesArray[x]);
        }

            OR

        for (let hobby of hobbiesArray) {
            printHobbyInfo(hobby);
        }
    ```

1. Run from the command line using `node myHobbies`

1. Once working mark your work as complete.

## Bonus

### Bonus #1
1. Create an object literal to represent one band:
    ```javascript
    let band1 = {
            name : "Pink Floyd",
            city : "London" ,
            country : "England",
            yearFormed : 1965,
            genres : ["Progressive rock", "psychedelic rock", "art rock"]
        }
    band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");
    ```

1. Create another object for a band of your choice. Use the new Object() notation and then add the same properties using the dot notation.

1. Create a bands array and add the two objects.

1. Create a function to process this array and print details. 

### Bonus #2
1. READ: The `Array.prototype.forEach` function takes an anonymous function which iterates over the array allowing you to do something with each element. It is one of the examples of using the `Array.prototype` functions to not need to write a for loop on your own, just to iterate over every element. Most of the `Array.prototype` functions process the array using the callback function that you supply.  

    Now with ES6 notation, we can use an arrow function for specifying the callback function. View the following EXAMPLE. Notice how a local variable is set for `sport`, to represent the single sport being processed during that iteration of the loop - processing each element of the `sportsArray.` 

    ``` javascript
     sportsArray.forEach(sport => {
        console.log(`  ${sport.name} is played in ${sport.duration} `);
    });
    ```

1. Use the `forEach` method with your own hobbies array. Create a `logHobbies` function with no inputs which uses the `forEach` method for looping, and prints a message using ES6 backticks with string template references for the properties. 

   Example output:

   volleyball: A hobby for 25 years

1. After the function definition, add a call to the `logHobbies` function.

1. Confirm the script works - that you see the output in the console. ES6 is supported in Node.

## Bonus

1. create an array of objects with the high/low temps for the week.

    An example to get started { day: “Monday”, high: 80 }   

    With the array, can you loop through and find the high and low temp of the week?
