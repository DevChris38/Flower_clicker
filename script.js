//zone de déclaration de noeuds du DOM

const score = document.querySelector('.progressionBar');
const progressBarNow = document.querySelector('.now');
const gifts = document.querySelector('.gifts');
const ferme = document.querySelector('.garden');
const helpers = document.querySelector('.market');
const margueritte = document.querySelector('#gift_1');
const arrosoir = document.querySelector('.helper_1');
const arrosoirNumber = document.querySelector('#arrosoirNumber');
const margueritteNumber = document.querySelector('#margueriteNumber');


// tableau d'objets pour définir les fleurs que l'on va gagner
const giftsProps = [
    {
        name: 'margueritte',
        cost: 150,
        number: 0
    }]

    // tableau d'objets pour définir les aides que l'on va gagner
const helpersProps = [
    {
        name: 'arrosoir',
        cost: 20,
        number: 0
    }
]

let actScore = 0;
let petalesPerSeconds = 0;


// fonction qui met à jour le nombre de pétales
const updateScore = () => {
    score.textContent = `${actScore} pétales / 100 000`;

    // rend l'item visible si on a asez de pétales pour l'acheter
    if (actScore < helpersProps[0].cost) {
        arrosoir.style.backgroundColor=('black');
    } else {
        arrosoir.style.backgroundColor=('transparent');
    }

    if (actScore >= giftsProps[0].cost) {
        margueritte.style.visibility=('visible');
    } else {
        margueritte.style.visibility=('hidden');
    }

    arrosoirNumber.innerText = `Vous avez ${helpersProps[0].number} arrosoirs`;
    
    let barPercent = (actScore/100000) * 100;
    progressBarNow.style.width=(`${barPercent}%`);
    console.log(progressBarNow.style.width);

}


// petite fonction qui permet d'ajouter un nombre donné de pétale au score
    const addScore = (suppScore) => {
    actScore = actScore += suppScore;
    updateScore();
}

// ajoute un pétale au score quand on clique sur la zone jardin
ferme.addEventListener("click", (event) => {
    event.preventDefault();
    addScore(1);
});

//Quand on a assez d'argent pour acheter l'arrosoir, permet de l'acheter et d'augmenter le gain de pétales
arrosoir.addEventListener("click", (event) => {
    event.preventDefault();
    if (actScore >= helpersProps[0].cost) {
        actScore -= helpersProps[0].cost;
        helpersProps[0].number ++;
        petalesPerSeconds ++;
        // setInterval() permet de lancer une fonction automatiquement après un temps donné (ici 1000 ms soit 1 seconde)
        setInterval(addScore, 1000, petalesPerSeconds);
    }
});


//Quand on a assez d'argent pour acheter une margueritte, permet de l'acheter.
margueritte.addEventListener("click", (event) => {
    event.preventDefault
    if (actScore >= giftsProps[0].cost
        && giftsProps[0].number === 0) {
        actScore -= giftsProps[0].cost;
        giftsProps[0].number = 1;
        petalesPerSeconds ++;
    }
})