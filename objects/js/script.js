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
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function(){
        personalMovieDB.count = +prompt('How much films do you saw?', '');
    
        while( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('How much films do you saw?', '');
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log('You have watched not a lot');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Avarage films enjoyer');
        } else if(personalMovieDB.count >= 30){
            console.log('Gigachad filmer');
        }
    },
    writeYourGenres: function(){
        let genre = '';
        let i = 1;
        while(i < 4){
            genre = prompt(`Write your genre(up to 3) ${i} of 3`, '');
            while(genre == '' || genre == null){
                genre = prompt(`Write your genre(up to 3) ${i} of 3`, '');
            }
            personalMovieDB.genres.push(genre);
            i++;
        }
        this.genres.forEach(function(item, index, array){
            console.log(`Your favorite genre ${index + 1} - is ${item}`);
        });
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    
    rememberMyFilms: function(){
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
    },

    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    }
};

// start();
// rememberMyFilms();
// detectPersonalLevel();
// showMyDB(personalMovieDB.private);
// writeYourGenres();

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();