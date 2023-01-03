let alien = {
    name: 'MiniPekka',
    tech : 'JavaScript',
    laptop: {
        cpu : 'i7',
        ram : '4GB',
        brand: 'Asus'

    }
}
console.log(alien)
console.log(alien.laptop.cpu)
console.log(alien.laptop.brand.length)
//for in loop 
for(let key in alien){
    console.log(key)
}
for(let key in alien){
    console.log(key,alien[key]);
}
