let rollButton = document.getElementById('roll');
console.log(rollButton)
let roulette = document.getElementById('roulette');

let angle = 0;

const roll = () => {
    const degrees = Math.floor(Math.random() * 1900) + 400
    for (let i = 0; i< degrees; i++) {
        roulette.style.transform = `rotate(${angle}deg)`
        angle++ 
    }
    console.log(angle)
}



rollButton.onclick = roll;