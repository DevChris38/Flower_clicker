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
const margueritteImg = document.querySelector('.imgContainer');
const margueritteText = document.querySelector('.textGifts');


let debut;
let fini = false;
let tempsPrecedent = 0;
let lastClick = 0;
let precedentTimeStamp = 0;


// tableau d'objets pour définir les fleurs que l'on va gagner
const giftsProps = [
    {
        name: 'margueritte',
        cost: 3,
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
function updateScore(chrono) {
    if (debut === undefined) {
        debut = chrono;
    }

    const ecoule = chrono - debut;

    //console.log((chrono - tempsPrecedent) * petalesPerSeconds);
    actScore = actScore + ((chrono - tempsPrecedent) * petalesPerSeconds / 1000);

    score.textContent = `${Math.round(actScore)} pétales / 100 000`;

    // rend l'item visible si on a asez de pétales pour l'acheter
    if (actScore < helpersProps[0].cost) {
        arrosoir.style.visibility = ('hidden');
    } else {
        arrosoir.style.visibility = ('visible');
    }

    if (actScore >= giftsProps[0].cost) {
        margueritteImg.style.visibility = ('visible');
        margueritteText.style.visibility = ('visible');
    } else {
        margueritteImg.style.visibility = ('hidden');
        margueritteText.style.visibility = ('hidden');
    }

    arrosoirNumber.innerText = `Vous avez ${helpersProps[0].number} arrosoirs`;

    let barPercent = (actScore / 100000) * 100;
    progressBarNow.style.width = "10%";
    //console.log(progressBarNow.style.width);

    if (actScore >= 100000) {
        fini = true;
    }

    // petite fonction qui permet d'ajouter un nombre donné de pétale au score
    const addScore = (suppScore) => {
        actScore = actScore + suppScore;
    }

    // ajoute un pétale au score quand on clique sur la zone jardin
    ferme.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.timeStamp != precedentTimeStamp) {
            console.log(`last clic : ${lastClick} et chrono : ${chrono}`)
            addScore(1);
            lastClick = chrono;
            console.log("clic");
            precedentTimeStamp = event.timeStamp;
        }
    });

    //Quand on a assez d'argent pour acheter l'arrosoir, permet de l'acheter et d'augmenter le gain de pétales
    arrosoir.addEventListener("click", (event) => {
        event.preventDefault();
        if (actScore >= helpersProps[0].cost && lastClick < (chrono - 500)) {
            actScore -= helpersProps[0].cost;
            helpersProps[0].number++;
            petalesPerSeconds++;
            lastClick = chrono;
        }
        ;
    }
    );


    //Quand on a assez d'argent pour acheter une margueritte, permet de l'acheter.
    margueritte.addEventListener("click", (event) => {
        event.preventDefault
        if (actScore >= giftsProps[0].cost
            && giftsProps[0].number === 0) {
            actScore -= giftsProps[0].cost;
            giftsProps[0].number = 1;
            petalesPerSeconds++;
        }
    })

    tempsPrecedent = chrono;
    if (!fini) {
        window.requestAnimationFrame(updateScore);
    }

}

// dès le premier rafraichissement de la page, appelle la fonction updateScore()
window.requestAnimationFrame(updateScore);