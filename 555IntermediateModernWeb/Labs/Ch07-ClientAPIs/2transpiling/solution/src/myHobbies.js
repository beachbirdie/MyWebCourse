const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

function logHobby(oneHobby) {
    console.log(`${oneHobby.name}: A hobby for ${oneHobby.lengthInYearsAtHobby} years`)
}
    
function logHobbies() {
    for (let index = 0; index < hobbiesArray.length; index++) {
        const hobby = hobbiesArray[index];
        logHobby(hobby);
    }
}

logHobbies();


function returnHobbiesHTML() {
    let hobbyInfo = `
        <ul>
    `;

    for (let index = 0; index < hobbiesArray.length; index++) {
        hobbyInfo+= `<li>${hobby.name} ${hobby.lengthInYearsAtHobby}</li>`;
    };

    hobbyInfo+=`</ul>`;
    return hobbyInfo;
}
    

//BONUS
var hobbiesInfoDiv = document.getElementById("hobbiesInfoTable");
hobbiesInfoDiv.innerHTML = getHobbiesAsTableHTML();


//if you want to get fancy - can create elements in memory and 
//dynamically change the DOM
// var myElemDiv = document.createElement('div');
// myElemDiv.innerHTML = getHobbiesAsTableHTML2();
// hobbiesInfoDiv.insertAdjacentElement('afterend', myElemDiv);
// var myElemDiv = document.createElement('div');
// myElemDiv.innerHTML = getHobbiesAsTableHTML();
// hobbiesInfoDiv.insertAdjacentElement('afterend', myElemDiv);

function getHobbiesAsTableHTML() {
    let hobbyInfo = `
        <table class="tableStyle">
            <tr><th>Sport</th><th>Years in sport</th></tr>
    `;

    for (let index = 0; index < hobbiesArray.length; index++) {
        const hobby = hobbiesArray[index];
        hobbyInfo+= `<tr>
                        <td>${hobby.name}</td>
                        <td>${hobby.lengthInYearsAtHobby}</td>
                        </tr>`;
    };
    
    hobbyInfo+=`</table>`;

    return  hobbyInfo;
}


