'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Max', 'Yasha', 'Kate'];

function sortStudentsByGroups(data) {
    let arr = [],
        arr2 = [],
        counter = 0;

    data.sort();
    // data.reverse;
    for(let i = 0; i < data.length; i++){
        arr[i] = data.splice(0, 3);
    }
    if(data.length < 3){
        arr[arr.length++] = `Students that's not grouped: ${data.splice(0, data.length)}`;
    } else {
        arr[arr.length++] = data.splice(0, data.length);
    }
    console.log(arr);
}
sortStudentsByGroups(students);
// console.log(students);

