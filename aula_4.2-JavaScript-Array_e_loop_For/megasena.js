let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, firstNumber, sixthNumber];

let cartelaNumbers = [20, 35, 23 ,48 ,3 ,17];
let cartelaNumbers1 = [21, 33, 28 ,43 ,34 ,19];
let cartelaNumbers2 = [25, 37, 25 ,47 ,38 ,12];

let cartelasJogos = [cartelaNumbers, cartelaNumbers1, cartelaNumbers2];



for (let indexjogos = 0; indexjogos < cartelasJogos.length; indexjogos += 1){
    let acertos = 0;
    for(indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1){
        for (let indexCart= 0;indexCart < cartelasJogos[indexjogos].length; indexCart += 1) {
            if (megaSenaNumbers [indexMega] === cartelasJogos[indexjogos][indexCart]){
                acertos += 1;
            };
        };
    };
    console.log('jogada ' + (indexjogos +1) );
    console.log('mega-sena: ' + megaSenaNumbers );
    console.log('jogo: ' + cartelasJogos[indexjogos] );
    console.log('Acertos: ' + acertos );
    console.log('***************************** ' );
  
}
