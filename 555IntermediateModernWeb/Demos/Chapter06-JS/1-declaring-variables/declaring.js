            /*
            Everything in between the stars and 
            slashes is a comment.
            */



            console.groupCollapsed('Declarations and Initializations...');                         
            
               
            var someVariable = 1;
            var someVariable = 'a'; //Can happen when combining scripts
            someVariable = true;    //Was this meant to be changed?

            let changingValue = true;
            const pi = 3.14;
            const myMother = {
                name: 'Mary',
                age: 82
            }

            const cantPointToSomethingElse = new Date();
            // cantPointToSomethingElse = 3;
            
            {
                let x = 23;
                var y = 24;
                const z = 25; 
            }
            
            // X is not defined console.log('​x', x);
            // Z is not defined console.log('​z', z);
            console.log('​y', y);     
                
            let b;   console.log(typeof b);
            b = null; console.log(typeof b);
            console.groupEnd();

            //undefined and null
            console.groupCollapsed('Undefined')
            let abc;
            console.log(abc);
            console.groupEnd();

            console.groupCollapsed('Numbers...');
            let z = 3.13; console.log(typeof z);
            let divideByZero = (z/+0);  console.log('(z/+0)=' + divideByZero);
                divideByZero = (z/-0);  console.log('(z/-0)=' +divideByZero);

            let bigNum = Number.MAX_VALUE; 
            let tryBigger = bigNum * 2; console.log("Too big? " + tryBigger);

           console.groupEnd();


           function add(a,b) {
               if  ( (typeof b) != 'undefined' ) {
                   //no op
               }
               else {
                   b = 2;
               }

               b = ( (typeof b) != 'undefined' ) ? b : 2;
           }



        //     var smallNum = Number.MIN_VALUE;
        //     var trySmaller = (smallNum * 200); console.log("Too Small? " +trySmaller);
        //     console.groupEnd();

            console.groupCollapsed('strings...');
            var dblQuoteString = "Isn't it nice that I can contain single quotes?";
            var singleQuoteString = 'Well, you may "think" that\'s cool...';
            console.log(dblQuoteString);
            console.log(singleQuoteString);
            console.groupEnd();

        //     var lowerString = "abc";
        //     var upperString = "ABC";

        //     console.group('Strings');
        //     console.log(lowerString == upperString);
           
        //     console.groupCollapsed('Template literals...');
        //     var name="Remembrance O'Neal";
        //     var myString = `        'Single' and "Double" quotes work
        //         Backticks allow other variables to be referenced: name= ${name}
        //         Line ${2+1}  Expressions can be evaluated
        //     `;
        //     console.log(myString);
        //     console.log("See more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals");
        //     console.groupEnd();

        //   console.groupCollapsed('Booleans...');
        // //truthy or falsy
        // console.log('abc');
        // console.log('is the true?' + Boolean('hello'));
        // console.log('is the true?' + Boolean(''));
        // console.groupEnd();
     