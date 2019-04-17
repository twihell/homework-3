/*Написати функцію яка перетворює рядок “Якщо ви не здаєтеся, це має значення” в масив. 
Використати метод split (перетворює рядок в масив).*/

const newString = 'Якщо ви не здаєтеся, це має значення';

function stringToArray(newString) {
    return newString.split(' ');
}

console.log(stringToArray(newString));