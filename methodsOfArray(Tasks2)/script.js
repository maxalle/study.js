'use strict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    const newArr = data.filter(item => item.amount >= 0);
    return newArr.reduce((sum, current) => sum + current.amount, 0);
};

const getTotalIncomeAmout = (data) => {
    if(data.some(item => item.amount <= 0)){
        return data.reduce((sum, current) => sum + current.amount, 0);
    } else {
        return getPositiveIncomeAmount(data);
    }
}

console.log(getTotalIncomeAmout(funds));