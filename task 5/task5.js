/* Ввести з клавіатури 12 чисел. Вивести найменше число, порядковий номер найбільшого числа, 
кількість парних та кількість від’ємних чисел. Використати функції. Числа ввести через кому. 
UI частина - поле для вводу та кнопка. */

const submitButton = document.getElementById('submit-button');


submitButton.addEventListener('click', function() {
    const inputArea = document.getElementById('input-area').value;
    let inputToArray = inputArea.split(',');
    let correct = true;
    for (i = 0; i < inputToArray.length; i++) {
        inputToArray[i] = Number(inputToArray[i]);
    }
    if (isNaN(inputToArray) && inputToArray.length < 11) {
        console.log('try again!');
    } else {
        console.log(`
        Найменше число: ${minNumber(inputToArray)}
        Порядковий номер найбільшого числа: ${maxNumber(inputToArray)}
        Кількість парних чисел: ${evenNumberAmount(inputToArray)}
        Кількість від’ємних чисел: ${negativeNumberAmount(inputToArray)}`)
    }
})

function minNumber(inputToArray) {
    let min = inputToArray[0];
    for (i = 0; i < inputToArray.length; i++) {
        if (inputToArray[i] < min) {
            min = inputToArray[i];
        }
    }
    return min;
}

function maxNumber(inputToArray) {
    let max = inputToArray[0];
    let maxIndex = 0;
    for (i = 0; i < inputToArray.length; i++) {

        if (inputToArray[i] > max) {
            maxIndex = i;
            max = inputToArray[i]; 
        }
    } 
    return maxIndex;
}

function evenNumberAmount(inputToArray) {
    let evenNumber = 0;
    for (i = 0; i < inputToArray.length; i++) {
        if (inputToArray[i] % 2 === 0) {
          evenNumber++;
        }
    }
    return evenNumber;
}

function negativeNumberAmount(inputToArray) {
    let negativeNumber = 0;
    for (i = 0; i < inputToArray.length; i++) {
        if (inputToArray[i] < 0) {
            negativeNumber++;
        }
    }
    return negativeNumber;
}

