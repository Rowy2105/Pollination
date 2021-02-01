let levelCounter = 5;
let arrayOfColors = [];
let tempArray = [];
let score = 0;

function getRandomColor() {
    // return number between 1 - 16
    let randNum = Math.floor(Math.random() * 17);

    if (randNum <=1 && randNum <= 4) {
        flashColor('red');
        arrayOfColors.push('red');
    } else if (randNum < 4 && randNum <= 8) {
        flashColor('green');
        arrayOfColors.push('green');
    } else if (randNum < 8 && randNum <= 12) {
        flashColor('blue');
        arrayOfColors.push('blue');
    } else {
        flashColor('yellow');
        arrayOfColors.push('yellow');
    }
}

function gameRunner(counter) {         
  setTimeout(function() {  
    console.log(counter);
    getRandomColor();
    counter++;                    
    if (counter < levelCounter) {           
      gameRunner(counter);            
    } else {
        tempArray = arrayOfColors.slice();
    }                      
  }, 1000)
}

function startGame() {
    // start the game
    document.getElementById("startButton").disabled = false;
    let counter = 0;
    gameRunner(counter);
}

function flashColor(color) {
    // 
    console.log(color);
    document.getElementById(color).style.opacity = 0.02;
    setTimeout(function() {
        console.log(12345);
        document.getElementById(color).style.opacity = 2000;
      }, 1000); 
}

function addScore() {
    score+=10;
    return true;
}

function endGame() {
    levelCounter = 1;
    arrayOfColors = [];
    score = 0;
    alert('Incorrect');
}

function matchColor(color) {
    if (color === tempArray[0]) {
        tempArray.shift();
        addScore();
        console.log(tempArray);
    } else {
        endGame();
    }
}