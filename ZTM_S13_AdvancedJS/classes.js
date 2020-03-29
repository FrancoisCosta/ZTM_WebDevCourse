class Player {
    constructor(name, type) {
        console.log('player', this)
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`My name is ${this.name}. I am a ${this.type}`) 
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this)
    }

    play() {
        console.log(`WEEEEEE I am a ${this.type}`)
    }
}


// const player1 = new Player("John", 'Pleb')
const wizard1 = new Wizard("Gandalf","Healer")
// const wizard2 = new Wizard("Shelly","Dark Magic")
// console.log(player1)
console.log(wizard1)
// console.log(wizard2)


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal{
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color) 
    }
    
    sound() {
        console.log(`MOOOOOOO! I am ${this.name}, a ${this.colour} ${this.type} `)
    }
}

const cow = new Mamal('Margaret','cow','black')
console.log(cow)