//Написати функції minNumber() та maxNumber(), яка знаходить найменше та найбільше числа в масиві.

const listOfNumbers = [90, 492, 3, 0, 590, 499, 87];


function minNumber (listOfNumbers) {
    let min = listOfNumbers[0];
    for (i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers[i] < min) {
            min = listOfNumbers[i];
        }
    }
    return min;
}

console.log(minNumber(listOfNumbers));

function maxNumber (listOfNumbers) {
    let max = listOfNumbers[0];
    for (i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers[i] > max) {
            max = listOfNumbers[i];
        }
    }
    return max;
}

console.log(maxNumber(listOfNumbers));

