

const changeArgent = () => {
    const choixArg = document.getElementById("choixArgent");
    const valeurArg = document.getElementById("valeurArgent");


    valeurArg.innerHTML = `argent: ${choixArg.value}`
}


const changeMise = () => {
    const choixMise = document.getElementById("choixMise");
    const valeurMise = document.getElementById("valeurMise");


    valeurMise.innerHTML = `mise initiale: ${choixMise.value}`
}