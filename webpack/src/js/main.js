function myModule(){
    this.hello = function(){
        console.log('hello');
    }
    this.bye = function(){
        console.log('bye');
    }
}

module.exports = myModule; // Браузеру всеодно на експорти і імпорти. Браузер не вміє самостійно збирати модулі самостійно
// Будь-яка модульна система повина бути зібраною в 1 результуючий файл