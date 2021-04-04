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
let spinTime=2000


//result of wheel spin
let result = ''

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
    betAmountInput.style.backgroundColor = color
}


const changeBetAmount = (newBetAmount) => {
    betAmountInput.value = newBetAmount.toString()
    betAmount = newBetAmount
}

const timesTwoBetAmount = (currentBetAmount) => {
    newBetAmount = currentBetAmount * 2
    changeBetAmount(newBetAmount)
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


const afterSpin = (color, bet, auto) => {
    if (color !== chosenColor) {
        profit -= bet
        result = 'loss'
        if (auto) {
            timesTwoBetAmount(betAmount)
        }
    }else {
        if (color === 'green') {
            profit += (bet * 11)
        } else {
            profit += bet
        }
        result = 'win'
    }

    profitElement.innerHTML = `Profit: ${profit}`
    canTurn = true;
}




//trigered when decides to roll
const roll = (auto) => {
    console.log(canTurn, betAmount, chosenColor)
    if (!canTurn || !betAmount || !chosenColor) {
        console.log('tried')
        return
    }
    let color = rollLogic()
    setTimeout(afterSpin, 2000, color, betAmount, auto) 
}




//rollButton.addEventListener("click", roll(false));


/*/


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

/*/



///////////////////////////////////       automatic     /////////////////////////

automaticChosenColor = ''

miseInitialeElement = document.getElementById('miseInitialeValeur')
nbrtoursElement = document.getElementById('nbrtoursValeur')



const automaticRoll = () => {
    miseInitiale= parseInt(miseInitialeElement.value)
    nbrtours= parseInt(nbrtoursElement.value)

    if(!automaticChosenColor || !miseInitiale || !nbrtours){
        return
    }


    setChosenColor(automaticChosenColor)
    changeBetAmount(miseInitiale)

    let i = 0
    rollIfPossible()

    function rollIfPossible(){
        if(result=='win'){
            i++
            result=''
            changeBetAmount(miseInitiale)
        }
        if (canTurn && i<nbrtours) {
            roll(true)
            rollIfPossible()
            //setTimeout(timesTwoBetAmount, 2500, betAmount)
        } else if (i<nbrtours){
            setTimeout(rollIfPossible, 2500)  
        } else {
            return
        }

    }
}





document.getElementById('goAuto').onclick = automaticRoll



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
