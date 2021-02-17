let rollButton = document.getElementById('roll');
let roulette = document.getElementById('roue');
let profitElement = document.getElementById('profit');
let betAmountInput = document.getElementById('betAmount');


//angle of the wheel and balance of user
let angle = 0;
let profit = 0;


//user choices
let chosenColor = 'red';
let betAmount;


//forbid wheel to turn if it is turning
let canTurn = true


//get random case 0-36
const randomCase = () => {
    randomdeg = Math.floor(Math.random() * 37)
    return randomdeg
}


//get color from number chosen
const getColor = (numberCase) => {
    if (numberCase == 0) {
        return 'green'
    } else if (numberCase % 2 === 0){
        return 'red'
    } else {
        return 'black'
    }
}


//change color and bet amount
const setChosenColor = (color) => {
    chosenColor = color
}

const changeBetAmount = () => {
    betAmount = parseInt(betAmountInput.value);
}

const timesTwoBetAmount = () => {
    betAmount *= 2
    betAmountInput.value = betAmount
}

const resetProfit = () => {
    profit = 0;
    profitElement.innerHTML = `Profit: ${profit}`
}


const rollLogic = () => {

    canTurn = false
    let numberCase = randomCase();
    const color = getColor(numberCase)
    angle = 360 * (Math.ceil(angle / 360)) + (360 / 37) * numberCase + 720;

    roulette.style.transform = `rotate(${angle}deg)`


    return color;
}


const afterSpin = (color) => {
    if (color !== chosenColor) {
        profit -= betAmount
    }else {
        if (color === 'green') {
            profit += (betAmount * 11)
        } else {
            profit += betAmount
        }
    }

    profitElement.innerHTML = `Profit: ${profit}`
    canTurn = true;
}




//trigered when decides to roll
const roll = () => {
    if (!canTurn || !betAmount || !chosenColor) {
        return
    }
    let color = rollLogic()
    setTimeout(afterSpin, 2000, color)
}












rollButton.onclick = roll;


document.getElementById('redButton').onclick = () => {
    chosenColor='red';
    betAmountInput.style.backgroundColor = 'red'
}
document.getElementById('blackButton').onclick = () => {
    chosenColor='black';
    betAmountInput.style.backgroundColor = 'black'
}
document.getElementById('greenButton').onclick = () => {
    chosenColor='green';
    betAmountInput.style.backgroundColor = 'green'
}





///////////////////////////////////       automatic     /////////////////////////

automaticChosenColor = 'red'



document.getElementById('chooseRed').onclick = () => {
    automaticChosenColor = 'red'
    document.getElementById('chooseRed').style.backgroundColor = 'red'
    document.getElementById('chooseBlack').style.backgroundColor = 'whitesmoke'
    document.getElementById('chooseBlack').style.color = 'black'
}

document.getElementById('chooseBlack').onclick = () => {
    automaticChosenColor = 'black'
    document.getElementById('chooseRed').style.backgroundColor = 'whitesmoke'
    document.getElementById('chooseBlack').style.color = 'white'
    document.getElementById('chooseBlack').style.backgroundColor = 'black'
}
