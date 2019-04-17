/* Знайти суму чисел кратних на age на проміжку від 0 до 1 000; 
де age = ваш вік, використати цикли while і for. */

const age = 27;
let sum = 0;

i = 0;


while (i < 1000) {
    
    if (i % age === 0) {
        sum += i;
    }
    i++;
} 
console.log(sum);

// for (i = 0; i < 1000; i++) {
//     if (i % age === 0) {
//         sum += i
//     }
// } 
// console.log(sum);