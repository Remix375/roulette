let rollButton = document.getElementById('roll');
let roulette = document.getElementById('roue');
let balanceElement = document.getElementById('balance')

//angle of the wheel and balance of user
let angle = 0;
let balance = 1000;


//user choices
let chosenColor = 'red';
let bet = 10;


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
    chosenColor = color
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
        balance -= bet
    }else {
        if (color === 'green') {
            balance += (bet * 11)
        } else {
            balance += bet
        }
    }


    balanceElement.innerHTML = `Balance: ${balance}`
    canTurn = true;
}





const roll = () => {
    if (!canTurn || !bet || !chosenColor) {
        return
    }
    let color = rollLogic()
    setTimeout(afterSpin, 2000, color)
}

rollButton.onclick = roll;