'use strict';

const log = function(a, b, ...rest ) {
    console.log(a, b, ...rest);
}

log('basic', 'rest', 'operator', 'usage');
// Оператор рест збирає всі наступні дані які надходять в масив даних