let rollButton = document.getElementById('roll');

let roulette = document.getElementById('roue');

let balanceElement = document.getElementById('balance')


let angle = 0;
let balance = 1000;
let chosenColor = ''


const roll = () => {
    let deg = randomdegree()

    const degrees = Math.floor(Math.random() * 720) + 400

    angle = degrees
    roulette.style.transform = `rotate(${angle}deg)`
    
    balance -= 10
    balanceElement.innerHTML = `Balance: ${balance}`
}


const randomdegree = () => {
    randomdeg = Math.random() * 360
    return randomdeg
}

const getColor = (degree) => {

}


//a changer
const setChosenColor = (color) => {
    chosenColor = color
}


rollButton.onclick = roll;