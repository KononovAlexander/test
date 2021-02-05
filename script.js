'use strict';

let result = confirm('Играем?');

let gameBot = function(bool){
    let userNum;
    let number = 87;
    
    let game = function(a, b){
        if(a * 1 === b){
            alert('Угадал!');
            gameBot(false);
        }
        else if(a * 1 > b){
            alert('Меньше!');
            gameBot(true);
        }else{
            alert('Больше!');
            gameBot(true);
        } 
    }; 

    let isNumber = function(num){
        if(num === null){
           gameBot(false);
        }else if(isNaN(num)){
            alert('Введи число!');
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










    