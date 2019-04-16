/*Вивести всі парні числа на проміжку від 0 до 200, 
використовуючи цикли for, while та do ...while.*/

let i = 0;

while (i < 200) {
    if (i % 2 === 0) {
        console.log(i);
    } 
    i++;
} 

do {
    if (i % 2 === 0) {
    console.log(i);
    }
    i++;
} while (i < 200);


for (let i = 0; i < 200; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
}
