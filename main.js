// function Dog (name, breed, isGoodBoy) {
//     this.name = name;
//     this.breed = breed;
//     this.isGoodBoy = isGoodBoy;
// }
// Dog.prototype.sit = function () {
//     // sitting code here
// }
// Dog.prototype.fetch = function () {
//     // fetching code here
// }
class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt() {
        this.food = this.food + 2;
    }
    eat() {
        if (this.food > 0) {
            this.food = this.food - 1
        }
        else {
            this.isHealthy = false;
        }
    }

}






class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passenger = [];
    }
    shouldQuarantine() {
        for (let i = 0; i < this.passenger.length; i++) {
            if (this.passenger[i].isHealthy === false) {
                return true;
            }
        } return false
    }
    getAvailableSeatCount() {
        return this.capacity - this.passenger.length;
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {

            this.passenger.push(traveler);
        }
    }
    totalFood() {
        let results = 0;
        for (let i = 0; i < this.passenger.length; i++) {
            results = results + this.passenger[i].food
        } return results

    }
}
class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(traveler) {
        traveler.isHealthy = true;

    }
}

class Hunter extends Traveler{
    constructor(name){
        super(name)
        this.food = 2;
    }
    hunt(){
        this.food = this.food + 5; 
    }
    eat() {
        if (this.food > 1) {
            this.food = this.food - 2
        }
        else {
            this.food=0
            this.isHealthy = false;
        }
    
    }
    giveFood  (traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food = this.food - numOfFoodUnits;
            traveler.food = traveler.food + numOfFoodUnits
        }
    }
}
Hunter.prototype.giveFood = function (traveler, numOfFoodUnits) {
    if (this.food >= numOfFoodUnits) {
        this.food = this.food - numOfFoodUnits;
        traveler.food = traveler.food + numOfFoodUnits
    }
}

/*&function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
}
function Wagon(capacity) {
    this.capacity = capacity;
    this.passenger = [];
}
let testTraveler = new Traveler('test');
console.log(testTraveler);

let testWagon = new Wagon(3);
console.log(testWagon);

Traveler.prototype.hunt = function () {
    this.food = this.food + 2;
}
testTraveler.hunt()
console.log(testTraveler);

Traveler.prototype.eat = function () {
    if (this.food > 0) {
        this.food = this.food - 1
    }
    else {
        this.isHealthy = false;
    }

}
testTraveler.eat()

testTraveler.eat()
testTraveler.eat()
testTraveler.eat()
testTraveler.eat()
console.log(testTraveler);



console.log(testWagon.getAvailableSeatCount())


testWagon.join(testTraveler)
console.log(testWagon);

Wagon.prototype.shouldQuarantine = function () {
    for (let i = 0; i < this.passenger.length; i++) {
        if (this.passenger[i].isHealthy === false) {
            return true;
        }
    } return false
}
console.log(testWagon.shouldQuarantine())



console.log(testWagon.totalFood())

// // Create a wagon that can hold 2 people
// let wagon = new Wagon(2);
// // Create three travelers
// let henrietta = new Traveler('Henrietta');
// let juan = new Traveler('Juan');
// let maude = new Traveler('Maude');
// console.log(`${wagon.getAvailableSeatCount()} should be 2`);
// wagon.join(henrietta);
// console.log(`${wagon.getAvailableSeatCount()} should be 1`);
// wagon.join(juan);
// wagon.join(maude); // There isn't room for her!
// console.log(`${wagon.getAvailableSeatCount()} should be 0`);
// henrietta.hunt(); // get more food
// juan.eat();
// juan.eat(); // juan is now hungry (sick)
// console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
// console.log(`${wagon.totalFood()} should be 3`);

function Doctor(name) {
    Traveler.call(this, name)
}

Doctor.prototype = Object.create(Traveler.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.heal = function (traveler) {
    traveler.isHealthy = true;

}
let testDoctor = new Doctor('test')
testDoctor.heal(testTraveler)
console.log(testTraveler)

class Hunter extends Traveler{
    constructor(name){
        super(name)
        this.food = 2;
    }
}
Hunter.prototype.hunt = function (traveler) {
    this.food = this.food + 5;
}


let testHunter = new Hunter('test')
testHunter.hunt()
console.log(testHunter)

Hunter.prototype.eat = function () {
    if (this.food > 2) {
        this.food = this.food - 2;

    }
    else {
        this.food = 0
        this.isHealthy = false
    }
}
testHunter.eat()
testHunter.eat()
testHunter.eat()
testHunter.eat()
console.log(testHunter)

Hunter.prototype.giveFood = function (traveler, numOfFoodUnits) {
    if (this.food >= numOfFoodUnits) {
        this.food = this.food - numOfFoodUnits;
        traveler.food = traveler.food + numOfFoodUnits
    }
}
console.log(testTraveler)
testHunter.giveFood(testTraveler, 6)
console.log(testHunter)
*/

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);
