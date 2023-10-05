//zone de déclaration de noeuds du DOM

const score = document.querySelector('.progressionBar');
const progressBarNow = document.querySelector('.now');
const gifts = document.querySelector('.gifts');
const ferme = document.querySelector('.garden');
const helpers = document.querySelector('.market');

const arrosoir = document.querySelector('#helper_1');
const arrosoirNumber = document.querySelector('#arrosoirNumber');
const rateau = document.querySelector('#helper_2');
const rateauNumber = document.querySelector('#rateauNumber');
const pelle = document.querySelector('#helper_3');
const pelleNumber = document.querySelector('#pelleNumber');
const brouette = document.querySelector('#helper_4');
const brouetteNumber = document.querySelector('#brouetteNumber');

const margueritte = document.querySelector('#gift_1');
const margueritteNumber = document.querySelector('#margueriteNumber');
const margueritteImg = document.querySelector('#margueriteBoxImg');
const margueritteText = document.querySelector('#margueriteTextGifts');
const tiare = document.querySelector('#gift_2');
const tiareNumber = document.querySelector('#tiareNumber');
const tiareImg = document.querySelector('#tiareBoxImg');
const tiareText = document.querySelector('#tiareTextGifts');
const cosmos = document.querySelector('#gift_3');
const cosmosNumber = document.querySelector('#cosmosNumber');
const cosmosImg = document.querySelector('#cosmosBoxImg');
const cosmosText = document.querySelector('#cosmosextGifts');
const tulipe = document.querySelector('#gift_4');
const tulipeNumber = document.querySelector('#tulipeNumber');
const tulipeImg = document.querySelector('#tulipeBoxImg');
const tulipeText = document.querySelector('#tulipeTextGifts');

const timerElement = document.getElementById("timer")


let debut;
let fini = false;
let tempsPrecedent = 0;
let lastClick = 0;
let precedentTimeStamp = 0;
let chrono = 0
let precedentTimeStampArrosoir = 0;



// tableau d'objets pour définir les fleurs que l'on va gagner
const giftsProps = [
    {
        name: 'margueritte',
        cost: 150,
        number: 0
    },
    {
        name: 'tiare',
        cost: 300,
        number: 0
    },
    {
        name: 'cosmos',
        cost: 450,
        number: 0
    },
    {
        name: 'tulipe',
        cost: 600,
        number: 0
    }
]

// tableau d'objets pour définir les aides que l'on va gagner
const helpersProps = [
    {
        name: 'arrosoir',
        cost: 20,
        number: 0
    },
    {
        name: 'rateau',
        cost: 60,
        number: 0
    },
    {
        name: 'pelle',
        cost: 180,
        number: 0
    },
    {
        name: 'brouette',
        cost: 540,
        number: 0
    }
]

let actScore = 0;
let petalesPerSeconds = 0;
let clefGifts = 0 // variable qui permettra d'entrer dans le switch en fonction du score actuel 
let clefHelpers = 0

// fonction qui met à jour le nombre de pétales
function updateScore(chrono) {
    if (debut === undefined) {
        debut = chrono;
    }
    const ecoule = chrono - debut;


    let minutes = Math.floor(parseInt(chrono) / 60000);
    let secondes = Math.floor((parseInt(chrono) % 60000) / 1000);

    timerElement.innerText = `${minutes}:${secondes}`


    //console.log((chrono - tempsPrecedent) * petalesPerSeconds);
    actScore = actScore + ((chrono - tempsPrecedent) * petalesPerSeconds / 1000);

    score.textContent = `${Math.round(actScore)} pétales / 100 000`;

    //condition qui attibut une valeur à la variable 'clef' pour interagir avec le switch
    if (actScore >= giftsProps[3].cost) {
        clefGifts = 8
    } else if (actScore >= giftsProps[2].cost) {
        clefGifts = 7
    } else if (actScore >= giftsProps[1].cost) {
        clefGifts = 6
    } else if (actScore >= giftsProps[0].cost) {
        clefGifts = 5
    } else {
        clefGifts = 0
    }

    if (actScore >= helpersProps[3].cost) {
        clefHelpers = 4
    } else if (actScore >= helpersProps[2].cost) {
        clefHelpers = 3
    } else if (actScore >= helpersProps[1].cost) {
        clefHelpers = 2
    } else if (actScore >= helpersProps[0].cost) {
        clefHelpers = 1
    } else {
        clefHelpers = 0
    }

    // switch qui permet de rendre visible les items en fonction du score actuel
    // switch pour les helpers
    switch (clefHelpers) {
        case 4:
            brouette.style.visibility = ('visible');
            console.log('2');
        case 3:
            pelle.style.visibility = ('visible');
            console.log('2');
        case 2:
            rateau.style.visibility = ('visible');
            console.log('2');
        case 1:
            arrosoir.style.visibility = ('visible');
            break;
        default:
            arrosoir.style.visibility = ('hidden');
            rateau.style.visibility = ('hidden');
            pelle.style.visibility = ('hidden');
            brouette.style.visibility = ('hidden');
    }

    switch (clefGifts) {
        case 8:
            tulipe.style.visibility = ('visible');
            console.log('2');
        case 7:
            cosmos.style.visibility = ('visible');
            console.log('2');
        case 6:
            tiare.style.visibility = ('visible');
            console.log('2');
        case 5:
            margueritte.style.visibility = ('visible');
            break;
        default:
            margueritte.style.visibility = ('hidden');
            tiare.style.visibility = ('hidden');
            cosmos.style.visibility = ('hidden');
            tulipe.style.visibility = ('hidden');
    }


    arrosoirNumber.innerText = `Vous avez ${helpersProps[0].number} arrosoirs`;
    rateauNumber.innerText = `Vous avez ${helpersProps[1].number} rateaux`;
    pelleNumber.innerText = `Vous avez ${helpersProps[2].number} pelles`;
    brouetteNumber.innerText = `Vous avez ${helpersProps[3].number} brouettes`;


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
        if (actScore >= helpersProps[0].cost && event.timeStamp != precedentTimeStampArrosoir) {
            actScore -= helpersProps[0].cost;
            helpersProps[0].number++;
            petalesPerSeconds++;
            precedentTimeStampArrosoir = event.timeStamp;
        }
        ;
    }
    );

    rateau.addEventListener("click", (event) => {
        event.preventDefault();
        if (actScore >= helpersProps[1].cost && lastClick < (chrono - 500)) {
            actScore -= helpersProps[1].cost;
            helpersProps[1].number++;
            petalesPerSeconds++;
            lastClick = chrono;
        }

    }
    )

    pelle.addEventListener("click", (event) => {
        event.preventDefault();
        if (actScore >= helpersProps[2].cost && lastClick < (chrono - 500)) {
            actScore -= helpersProps[2].cost;
            helpersProps[2].number++;
            petalesPerSeconds++;
            lastClick = chrono;
        }

    })
    brouette.addEventListener("click", (event) => {
        event.preventDefault();
        if (actScore >= helpersProps[3].cost && lastClick < (chrono - 500)) {
            actScore -= helpersProps[3].cost;
            helpersProps[3].number++;
            petalesPerSeconds++;
            lastClick = chrono;
        }

    }
    )



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
    tiare.addEventListener("click", (event) => {
        event.preventDefault
        if (actScore >= giftsProps[1].cost
            && giftsProps[1].number === 0) {
            actScore -= giftsProps[1].cost;
            giftsProps[1].number = 1;
            petalesPerSeconds++;
        }
    })
    cosmos.addEventListener("click", (event) => {
        event.preventDefault
        if (actScore >= giftsProps[2].cost
            && giftsProps[2].number === 0) {
            actScore -= giftsProps[2].cost;
            giftsProps[2].number = 1;
            petalesPerSeconds++;
        }
    })
    tulipe.addEventListener("click", (event) => {
        event.preventDefault
        if (actScore >= giftsProps[3].cost
            && giftsProps[3].number === 0) {
            actScore -= giftsProps[3].cost;
            giftsProps[3].number = 1;
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
