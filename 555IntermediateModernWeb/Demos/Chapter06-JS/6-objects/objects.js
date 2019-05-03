const band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}


const band2 = new Object();
band2.name = "Man Man";
band2.country = "USA";
band2.city = "Philadelphia";
band2.yearFormed = 2003;	
band2.genres = ["Experimental rock"];

//Objects printed using Object.toString
console.log(band1.toString());
console.log(band2);

//access properties using dot notation or [] 
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");
console.log("country 1 = " + band1.country);
console.log("country 2 = " + band2["country"]);

//access properties using key
for (key in band1) {
    //ES6 - works in Chrome, but not all other browsers
    console.log(`key is ${key} value is ${band1[key]}`);
}

for (key in band2) {
    //ES5
    console.log("key is " + key +" value is "+ band2[key] );
}

var bands = [
              { name: "Morphine",
                country: "USA",
                city: "Boston",
                genres: ["Alternative rock", "experimental rock", "jazz rock"] 
              },
              { name: "Vitamin String Quartet",
                country: "USA",
                city: "Los Angeles",
                genres: ["Rock", "Pop", "Instrumental"] 
              }
            ];

const keys = Object.keys(bands[0]);
console.log(keys);

for (let index = 0; index < keys.length; index++) {
   const key = keys[index]; 
   console.log(`${key} is ${bands[0][key]}`);
}

for (let index = 0; index < bands.length; index++) {
    const name = bands[index].name;
    const variableName = "city";
    const country = bands[index][variableName];
    console.log(name, country);
}





console.log("**** key values of band objects in bands array ****");
for	(index = 0; index < bands.length; index++) {
    var band = bands[index];
    console.log("--- Band at index "+index+" ---");
    for (key in band) {
        //ES6
        console.log(`key is ${key} value is ${band[key]}`);
    }
}


console.log("**** Print band objects to the screen ****");
var outstring = "";

for	(index = 0; index < bands.length; index++) {
    var band = bands[index];
    //ES6
    outstring += `${band['name']}<br/>`;
}

// Passing objects into functions
let myMusician = {name: 'Les', band: 'Primus'};

function changeBand(musician) {
    musician.band = 'Oysterhead';
}

console.log(myMusician);
changeBand(myMusician);
console.log('*******');
console.log(myMusician);

//Passing string into function
function changeName(name) {
    name = 'Mr.' + name;
    console.log('IN FUNCTION: ' + name)
}

changeName(myMusician.name);
console.log('AFTER FUNCTION: ' + myMusician.name)
