

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


const onRangeModification = () => {
    const choixArg = document.getElementById("choixArgent");
    const choixMise = document.getElementById("choixMise");
    
    
    choixArg.setAttribute("min", document.getElementById("minArgent").value);
    choixArg.setAttribute("max", document.getElementById("maxArgent").value);

    choixMise.setAttribute("min", document.getElementById("minMise").value);
    choixMise.setAttribute("max", document.getElementById("maxMise").value);

}