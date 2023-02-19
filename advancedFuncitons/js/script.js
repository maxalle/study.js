'use strict';

// function createCounter(){ // function declaration - means this function will be create at start of load page
//     let counter = 0; // creating counter

//     const myFunction = function() { //function expression - mean this function will be create when the code goes here
//         //create links for environemt in which this function was created(local environment of createCounter())
//         counter = counter + 1; // increase counter by 1
//         return counter; // return counter
//     }
    
//     return myFunction; //myFunction already is 1 after first call
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);


function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log(result);

let g = 3;
function addTwo(x){
    let ret = x + 2;
    return ret;
}
let b = addTwo(g);
console.log(b);

console.log(+'Infinity');