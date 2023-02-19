'use strict';

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    const goodFilms = arr.filter(item => item.rating >= 8);
    return goodFilms;
}

function showListOfFilms(arr) {
    const newListOfFilms = arr.map(item => item.name);
    const newFilmsString = newListOfFilms.reduce((sum, current) => `${sum}, ${current}`);
    return newFilmsString;
}
function setFilmsIds(arr) {
    let i = 1;

    arr.forEach(item => {
        item.id = i++;
    });
    return arr;
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    tranformedArray.every(item => typeof(item.id) === 'number');
}
console.log(showGoodFilms(films));
console.log(showListOfFilms(films));
console.log(setFilmsIds(films));
console.log(checkFilms(tranformedArray));