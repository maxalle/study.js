'use strict';

let numberOfFilms;
function start(){
    numberOfFilms = +prompt('How much films do you saw?', '');

    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How much films do you saw?', '');
    }
}

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('You have watched not a lot');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Avarage films enjoyer');
    } else if(personalMovieDB.count >= 30){
        console.log('Gigachad filmer');
    }
}

function rememberMyFilms(){
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
}

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    let genre = [];
    let i = 1;
    while(i < 4){
        // genre.push(prompt(`Write your genre(up to 3) ${i} of 3`, ''));
        personalMovieDB.genres.push(prompt(`Write your genre(up to 3) ${i} of 3`, ''));
        i++;
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

start();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.private);
writeYourGenres();