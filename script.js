'use strict';

let result = confirm('Играем?');
let random = Math.round( Math.random() * 100);

let gameBot = function(bool){

    let userNum;
    let number = random ;
    

    let game = function(a, b){
        if(a * 1 === b){

            alert('"Поздравляю, Вы угадали!!!"');
            gameBot(false);

        }
        else if(a * 1 > b){

            alert(' "Загаданное число меньше" ');
            gameBot(true);

        }else{

            alert('"Загаданное число больше"');
            gameBot(true);

        } 
    }; 


    let isNumber = function(num){

        if(num === null){

           gameBot(false);

        }else if(isNaN(num)){

            alert(' "Введи число!"');
            gameBot(true);

        }else{

            game(userNum, number);

        }
    };


    if(bool === false){
        
        alert('Игра окончена!!!');

       }else{

          isNumber(userNum = prompt('Угадай число от 1 до 100'));

       }
    };
    
    gameBot(result);










    