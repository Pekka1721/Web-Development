function Alien(name,tech){
    this.name = name;
    this.tech = tech;

    this.work = function(){
        console.log("solving bugs from 1 hr")
    }
}
let alien1 = new Alien("Pekka","JavaScript")
let alien2 = new Alien("Mini", "Pancakes")
console.log(alien1)
console.log(alien2)
alien1.work()