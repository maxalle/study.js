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
        
    personalMovieDB.movies[lastFilm] = rating;
    i++;
}
console.log(personalMovieDB);
