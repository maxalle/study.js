'use strict';

function factorial(n){
    if (Math.round(n) <= 1){
        return 1;
    } else if(typeof(n) == 'string') {
        return 'string not allowed';
    } else if(Math.trunc(n) != n){
        return 'float num';
    } else {
        return Math.round(n) * factorial(n - 1);
    }
}
console.log(factorial(7.2));
// console.log((7.2));