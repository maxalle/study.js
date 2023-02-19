function pow(x, n){
    if(n === 1){
        return x;
    } else{
        return x * pow(x, n - 1);
    }
}

pow(2, 1);
pow(2, 2);
pow(2, 3);

// За пример взято pow(2, 3);
// получается что самый первый pow не проходит проверку на n
// условие идёт ко второму, где подставляется 2 * pow(2, 3 - 1)
// pow проверяет само себя опять, то-есть опять проганяет себя по условию, но уже имея аргументы 2, 2
// Условия н === 1 опять не проходит, идёт по второй развилке
// 2 * 2 пов(2, 2 - 1)
// пов опять себя проверяет и в этот раз первое условия срабатывает
// Тогда оно возвращает значение в пов(2, 2-1) и 2, возвращает 4
// и в самом начале где 2 пов(2, 3-1), для этого пов возвращается результат 4
// и финальный ретурн 8 
// получается что второе условие срабатывает 2 раза и там где н === 1 - 1 раз 

// База рекурсии - відбувається тоді коли функція не викликає себе, а одразу повертає результат, якщо умова не пройшла
// в прикладі вище базою рекурсію буде n === 1. Рекурсія завжди прийде до своєї бази
// Шаг рекурсии - термін при якому функція викликає себе, але вже з іншим значенням
// pow(2, 3) -> йде по другій розвилці x * pow(2, 3 - 1) -> викликає сама себе з параметрами pow(2, 2). n - 1 це і є крок рекурсії
// Глубина рекурсії - це спільна кілкість викликів функції. Глубина рекурсії = n
// Максимальна глубина рекурсії - це термін, при якому є можливий варіант, коли рекурсія може спрацювати ще більше

// Ітеративний метод має перевагу перед рекурсією бо це читається простіше, на це використовується меньше пам'яті

let students = {
    js: [{
        name: 'John',
        progress: 100,
    }, {
        name: 'Ivan',
        progress: 60,
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 58
        }]
    }
}

function getTotalProgressByIteration(data){
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)){ // Object.values формує масив лише з значень. Тобто js, html заміняються на елемент з масивом який містить їхні значення властивостей
        if(Array.isArray(course)){
            students += course.length; // кількість студентів

            for(let i = 0; i < course.length; i++){ // сумарна кількість балів з об'єкту типу isArray
                total += course[i].progress;
            }
        } else {    // Якщо course являється object
            for(let subCourse of Object.values(course)){ // basic та pro стають елементами масиву з їхніми значеннями властивостей
                students += subCourse.length; // кількість студентів на рівні об'єкту basic та pro

                for(let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress; // перебір елементів на рівні об'єкту basic та pro і сумування прогресу
                }
            }
        }
    }

    return total / students;
}

function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){
        let total = 0;

        for(let i = 0; i < data.length; i++){ 
            total += data[i].progress;
        }
        
        return [total, data.length];
    } else {
        let total = [0, 0];

        for(let subData of Object.values(data)){
            let subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}
// Першим кроком при об'яві рекурсії являється визначенням бази функції, те до чого вона дійде в самому кінці
// в даному випадку базою рекурсії буде перевірка isArray
// В рекурсії нема промежуточних змінних. 
// Промежуточні змінні являються характеристикою ітеративного підходу, на базі якіх робляться обрахунки

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);
// console.log(getTotalProgressByIteration(students));