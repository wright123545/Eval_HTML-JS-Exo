class Guerrier {
    constructor(name, attack, precision, pv) {
        this.name = name;
        this.attack = attack;
        this.precision = precision;
        this.pv = pv;
    }

    attaquer(mechant) {
        var atk = Math.random();
        if (atk <= this.precision) {
            mechant.pv -= this.attack;
            console.log(this.name + " attaque " + mechant.name + " sans flop et inflige " + this.attack + " dégâts.");
        } else {
            console.log(this.name + " flop contre " + mechant.name);
        }
    }

    alive() {
        return this.pv > 0;
    }
}


var Bob = new Guerrier("Bob", 10, 0.8, 50); 
var Sheitan = new Guerrier("Sheitan", 15, 0.6, 50); 

console.log("fight entre bob et sheitan");


while (Bob.alive() && Sheitan.alive()) {
    Bob.attaquer(Sheitan);
    if (!Sheitan.alive()) {
        console.log("Sheitan est dead. Bob win!");
    } else {
        Sheitan.attaquer(Bob);
        if (!Bob.alive()) {
            console.log("Bob est dead , sheitan win");
        }
    }

    
    console.log("HP restants : Bob (" + Bob.pv + " HP), Sheitan (" + Sheitan.pv + " HP)");
}

console.log(" c'est fini Il restait " + Bob.pv + " PV a Bob et " + Sheitan.pv + " PV a Sheitan.");