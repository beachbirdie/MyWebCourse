
            
            var sportsArray = [
                { name: 'volleyball', duration: 'matches' },
                { name: 'baseball', duration: 'innings'},
                { name: 'hockey', duration: 'periods'}
            ];

            function printSportInfo(sport) {
                console.log(` ${sport.name} is played in ${sport.duration} 
                             `)
            }

            printSportInfo(sportsArray[0]);
            printSportInfo(sportsArray[1]);
            printSportInfo(sportsArray[2]);
            
            sportsArray.forEach(sport => {
                console.log(`  ${sport.name} is played in ${sport.duration} `);
            });