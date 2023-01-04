//this is a key word
//this represents current object 

let laptop1 ={
    cpu: "i5",
    ram: "16",
    brand: "Acer",
    getSpec: function(){
        console.log(this.cpu);
    }
}
laptop1.getSpec();

let laptop2 ={
    cpu: "i9",
    ram: "32",
    brand: "Asus",
    getSpec: function(){
        console.log(this.cpu); //here insted of using the object name use this to avoid calling with object name
    }
}
laptop2.getSpec();


if(laptop1.cpu>laptop2.cpu){
    console.log(laptop1.cpu)
}else{
    console.log(laptop2.cpu)
}