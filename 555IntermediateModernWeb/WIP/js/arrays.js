
let books = [ 'The Golfer and the Millinaire'
           , 'The Art of Exceptional Living'
           , 'Mindset'];

function printBooks(passedArray) {
    console.log(`I like ${passedArray.length} books`);
    for (let index = 0; index < books.length; index++) {
        let element = books[index];
        console.log('I like ' + element);
    }  
}

printBooks(books);

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;