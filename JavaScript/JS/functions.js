function greet(){
    console.log("Hello Function");
}           //defining the function
greet(); //calling function

function greet2(){      //function with a return statement
    return "Hello"
}

let stri = greet2()
console.log(stri)


// let name = "Pekka"
function greet3(name){      //function with return and input paramenters
    return `hello ${name}`
}

stri = greet3("PEkka")
console.log(stri)

function add(x,y){
    let sum = x+y;
    return sum;
}
console.log(add(10,20))

//function expression 

let add1 = function(num1,num2){
    return num1+num2;
}

console.log(add1(2,5));