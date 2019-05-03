/*
Everything in between the stars and 
slashes is a comment.
*/

console.groupCollapsed('Declarations and Initializations...');


let x; console.log(typeof x);  // undefined
x = 3; console.log(typeof x);  // number
x = 'abc'; console.log(typeof x); // string
x = true; console.log(typeof x); // boolean

var someVariable = 1;
var someVariable = 'a';
someVariable = true;

let anotherVariable = 2;
anotherVariable = false;
// CANT DO THIS --> let anotherVariable = 'Tuesday';

const cantPointToSomethingElse = new Date();
// cantPointToSomethingElse = 3;

let y; console.log(typeof y);

y = new Date(); console.log(typeof y);
y = null; console.log(typeof y);
console.groupEnd();

let message = 'Hello World';
console.log(typeof message);

console.log(message + ' is a ' + (typeof message));

let today = new Date();
console.log(typeof today);
console.log(today);


//undefined and null
console.groupCollapsed('Undefined')
let abc;
console.log(abc);
console.groupEnd();

console.groupCollapsed('Numbers...');
let z = 3.13; console.log(typeof z);
let divideByZero = (z / +0); console.log('(z/+0)=' + divideByZero);
divideByZero = (z / -0); console.log('(z/-0)=' + divideByZero);

let bigNum = Number.MAX_VALUE;
let tryBigger = bigNum * 2; console.log("Too big? " + tryBigger);

console.groupEnd();


function add(a=1, b=2) {
    // if ((typeof b) != 'undefined') {
    //     //no op
    // }
    // else {
    //     b = 2;
    // }

    //b = ((typeof b) != 'undefined') ? b : 2;

    console.log(a+b);
}

setTimeout(add, 200);
console.log('After setTimeout');

console.log(typeof add);

let myArray = [1, 2, 11, 3, 4];
myArray.sort();
console.log(myArray);
myArray.sort(function (x, y) {
    return x - y;
});
console.log(myArray, typeof myArray);



//     var smallNum = Number.MIN_VALUE;
//     var trySmaller = (smallNum * 200); console.log("Too Small? " +trySmaller);
//     console.groupEnd();

console.groupCollapsed('strings...');
let dblQuoteString = "Isn't it nice that I can contain single quotes?";
let singleQuoteString = 'Well, you may "think" that\'s cool...';
console.log(dblQuoteString);
console.log(singleQuoteString);
console.groupEnd();

let lowerString = "abc";
let upperString = "ABC";

console.group('Strings');
console.log(lowerString == upperString);

console.groupCollapsed('Template literals...');
let myString = `  Backticks can contain 'Single' and "Double" quotes
                  and new line
                  characters `;
console.log(myString);

let firstName = 'John';
let lastName = 'Herilla';
console.log('His name was ' + firstName + ' ' + lastName);
console.log(`His name was ${firstName} ${lastName}`);

console.log("See more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals");
console.groupEnd();

            //     Backticks allow other variables to be referenced: name= ${name}
            //     Line ${2+1}  Expressions can be evaluated
            // `;

        //   console.groupCollapsed('Booleans...');
        // //truthy or falsy
        // console.log('abc');
        // console.log('is the true?' + Boolean('hello'));
        // console.log('is the true?' + Boolean(''));
        // console.groupEnd();
