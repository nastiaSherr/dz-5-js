const num = 10;

for (let i = 0; i < num; i += 1) {
    console.log(i);
}

let num2 = 20;

while (num2 < 28) {
    console.log("num2 :", num2);
    num2 += 1;
}

const number = 10;

for (let r = 0; r < number; r += 1) {
    if (r % 2 === 0)
        continue;
    console.log("Непарне r:", r);
}

let heroName = '';
do {
    heroName = prompt('Введіть ім`я вашого героя(не більше 6 букв!)', '')
} while (heroName.length < 6);

console.log("Герой обраний:", heroName);