

const changeArgentMise = () => {
    const choixArg = document.getElementById("choixArgent");
    const valeurArg = document.getElementById("valeurArgent");

    const choixMise = document.getElementById("choixMise");
    const valeurMise = document.getElementById("valeurMise");


    valeurMise.innerHTML = `mise initiale: ${choixMise.value}`;
    valeurArg.innerHTML = `argent: ${choixArg.value}`;

    recalcule(parseFloat(choixArg.value), parseFloat(choixMise.value));
}



const onRangeModification = () => {
    const choixArg = document.getElementById("choixArgent");
    const choixMise = document.getElementById("choixMise");
    
    
    choixArg.setAttribute("min", document.getElementById("minArgent").value);
    choixArg.setAttribute("max", document.getElementById("maxArgent").value);

    choixMise.setAttribute("min", document.getElementById("minMise").value);
    choixMise.setAttribute("max", document.getElementById("maxMise").value);

}


const recalcule = (argent, mise) => {


    const nbrPertes = document.getElementById("nbrPertes");
    const proba = document.getElementById("proba");
    const argentPerdu = document.getElementById("argentPerdu");

    const nbrPertesSuite = Math.floor(getBaseLog(2, argent/mise+1))

    nbrPertes.innerHTML = `Nombre de pertes a la suite pour tout perdre: ${nbrPertesSuite}`;
    argentPerdu.innerHTML = `Argent perdusi ça arrive: ${-mise * ((1-2**nbrPertesSuite)/-1)}`
    proba.innerHTML = `Probabilité que ça arrive: ${((19/37) ** nbrPertesSuite) * 100}%`
}


const getBaseLog = (x, y) => {
    return Math.log(y) / Math.log(x);
}
  