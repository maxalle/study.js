'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgerEnough(data){

    let square = 0,
        volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    })

    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0){
        return 'Enough';
    } else {
        return 'Not Enough';
    }

    // let mainSquare = 0,
    //     mainVolume = 0,
    //     costOfHeat,
    //     square;
    // for(let i = 0; i < obj.shops.length; i++){
    //     square = obj.shops[i].width * obj.shops[i].length;
    //     mainSquare =  mainSquare + square;
    // }
    // console.log(`Main square of all shops is ${mainSquare}`);
    // mainVolume = mainSquare * obj.height;
    // console.log(`Main volume of all shops is ${mainVolume}`);
    // costOfHeat = mainVolume * obj.moneyPer1m3;
    // console.log(`Cost of heat is ${costOfHeat}`);
    // if(costOfHeat <= obj.budget){
    //     return console.log('Enough');
    // } else {
    //     return console.log('Not enough');
    // }
}

console.log(isBudgerEnough(shoppingMallData));