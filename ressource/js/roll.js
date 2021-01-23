let rollButton = document.getElementById('roll');

let roulette = document.getElementById('roulette');

let balanceElement = document.getElementById('balance')


let angle = 0;
let balance = 1000;

const roll = () => {
    balance -= 10
    balanceElement.innerHTML = `Balance: ${balance}`
    const degrees = Math.floor(Math.random() * 5000) + 400
    angle = degrees
    roulette.style.transform = `rotate(${angle}deg)`

    

}





rollButton.onclick = roll;