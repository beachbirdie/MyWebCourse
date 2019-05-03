function Person (firstName, lastName) {
    this.firstName = firstName;
    this.delayFirstnamePrint = function() {
        setTimeout (function() {
                        console.log(`##Anonymous##: ${this.firstName}`);
                    }, 2000);
    }
}

let p = new Person('Jane','Doe');
p.delayFirstnamePrint()

// ******************************************

function PersonSelf (firstName, lastName) {
    let self = this;
    this.firstName = firstName;
    this.delayFirstnamePrint = function() {
        setTimeout (function() {
            console.log(`## self ##: ${self.firstName}`)
        }, 2000);
    }
}

let pself = new PersonSelf('Eckhart','Tolle');
pself.delayFirstnamePrint();

// ******************************************


function PersonArrow (firstName, lastName) {
    this.firstName = firstName;
    this.delayFirstnamePrint = function() {
        setTimeout (()=>{
            console.log(`## ArrowFunction ##: ${this.firstName}`)
        }, 2000);
    }
}

let pArrow = new PersonArrow('Robin','Hood');
pArrow.delayFirstnamePrint();

