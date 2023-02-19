'use strict';

const numberOfFilms = +prompt('How much films do you saw?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    priivate: false,
};
let i = 0;
while(i < 2){

    let lastFilm = prompt('Last film you watched?', ''),
        rating = prompt('How you rate this film?', '');

    if(lastFilm.length < 50 && lastFilm != null && lastFilm != '' && rating != null && rating != ''){
        personalMovieDB.movies[lastFilm] = rating;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    i++;
}

if(personalMovieDB.count < 10){
    console.log('You have watched not a lot');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Avarage films enjoyer');
} else if(personalMovieDB.count >= 30){
    console.log('Gigachad filmer');
}
console.log(personalMovieDB);