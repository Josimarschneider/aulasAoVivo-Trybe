let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, firstNumber, sixthNumber];

let cartelaNumbers = [20, 35, 23 ,48 ,3 ,17];

let acertos = 0;

for(indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1){
    for (let indexCart= 0;indexCart < cartelaNumbers.length; indexCart += 1) {
        if (megaSenaNumbers [indexMega] === cartelaNumbers[indexCart]){
            acertos += 1;
        };
    };
};

console.log(cartelaNumbers);
console.log(megaSenaNumbers);
console.log(acertos);
