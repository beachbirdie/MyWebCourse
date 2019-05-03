
const hobbiesArray = [ { name: 'Swimming',lengthInYearsAtHobby: 25}
                , { name: 'Coding',lengthInYearsAtHobby: 15}
                , { name: 'Learning',lengthInYearsAtHobby: 11}
               ];

function printHobbyInfo(hobby) {
  console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `)
            }


for (let x = 0; x < hobbiesArray.length; x++) {
    printHobbyInfo(hobbiesArray[x]);
}
      
      
for (let hobby of hobbiesArray) {
    printHobbyInfo(hobby);
}