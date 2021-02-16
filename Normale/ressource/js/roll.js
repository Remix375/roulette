let rollButton = document.getElementById('roll');
let roulette = document.getElementById('roue');
let balanceElement = document.getElementById('balance');
let betAmountInput = document.getElementById('betAmount');


//angle of the wheel and balance of user
let angle = 0;
let balance = 1000;


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


//a changer
const setChosenColor = (color) => {
    console.log(color)
    chosenColor = color
}

const changeBetAmount = () => {
    betAmount = parseInt(betAmountInput.value);
    console.log(betAmount)
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
        balance -= betAmount
    }else {
        if (color === 'green') {
            balance += (betAmount * 11)
        } else {
            balance += betAmount
        }
    }

    balanceElement.innerHTML = `Balance: ${balance}`
    canTurn = true;
}





const roll = () => {
    if (!canTurn || !betAmount || !chosenColor || betAmount>balance) {
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
