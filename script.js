//zone de déclaration de noeuds du DOM

const score = document.querySelector('.progressionBar');
const petalePerSec = document.querySelector('#petalePerSec');
const progressBarNow = document.querySelector('.now');
const gifts = document.querySelector('.gifts');
const ferme = document.querySelector('.garden');
const helpers = document.querySelector('.market');
const BoutonDroite = document.querySelector('#triangleButton_right');
const BoutonGauche = document.querySelector('#triangleButton_left');


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
let precedentTimeStampButton = 0;
let clickGift = 1;

console.log(screen.width);



// tableau d'objets pour définir les fleurs que l'on va gagner
const giftsProps = [
    {
        name: 'margueritte',
        cost: 150,
        number: 0
    },
    {
        name: 'tiare',
        cost: 450,
        number: 0
    },
    {
        name: 'cosmos',
        cost: 2250,
        number: 0
    },
    {
        name: 'tulipe',
        cost: 22500,
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
        cost: 120,
        number: 0
    },
    {
        name: 'pelle',
        cost: 720,
        number: 0
    },
    {
        name: 'brouette',
        cost: 4320,
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

    timerElement.innerText = `${minutes} min ${secondes} s`


    //console.log((chrono - tempsPrecedent) * petalesPerSeconds);
    actScore = actScore + ((chrono - tempsPrecedent) * petalesPerSeconds / 1000);

    score.textContent = `${Math.round(actScore)} pétales / 100 000`;

    //condition qui attibut une valeur à la variable 'clef' pour interagir avec le switch
    if (actScore >= giftsProps[3].cost || giftsProps[3].number === 1) {
        clefGifts = 8
    } else if (actScore >= giftsProps[2].cost || giftsProps[2].number === 1) {
        clefGifts = 7
    } else if (actScore >= giftsProps[1].cost || giftsProps[1].number === 1) {
        clefGifts = 6
    } else if (actScore >= giftsProps[0].cost || giftsProps[0].number === 1) {
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
        case 3:
            pelle.style.visibility = ('visible');
        case 2:
            rateau.style.visibility = ('visible');
        case 1:
            arrosoir.style.visibility = ('visible');
            break;
        default:
            arrosoir.style.visibility = ('hidden');
            rateau.style.visibility = ('hidden');
            pelle.style.visibility = ('hidden');
            brouette.style.visibility = ('hidden');
    }

    if(screen.width > 768){

    switch (clefGifts) {
        case 8:
            tulipe.style.visibility = ('visible');
        case 7:
            cosmos.style.visibility = ('visible');
        case 6:
            tiare.style.visibility = ('visible');
        case 5:
            margueritte.style.visibility = ('visible');
            break;
        default:
            margueritte.style.visibility = ('hidden');
            tiare.style.visibility = ('hidden');
            cosmos.style.visibility = ('hidden');
            tulipe.style.visibility = ('hidden');
    }
}


    // bouton de changement de Gift - Droit
    BoutonDroite.addEventListener("click", (event) => {
        event.preventDefault();
        if ((clickGift >= 1 && clickGift < 4) && (event.timeStamp != precedentTimeStampButton) ){
            clickGift ++;
        }
        precedentTimeStampButton = event.timeStamp;
    });

    // bouton de changement de Gift - Gauche
    BoutonGauche.addEventListener("click", (event) => {
        event.preventDefault();
        if ((clickGift > 1 && clickGift <= 4) && (event.timeStamp != precedentTimeStampButton) ){
            clickGift --;
        }
        precedentTimeStampButton = event.timeStamp;
    });

    console.log(clickGift);

    if(screen.width <= 768){

    switch (clickGift) {
        case 1:
            margueritte.style.display = ('flex');
            tiare.style.display = ('none');
            cosmos.style.display = ('none');
            tulipe.style.display = ('none');
            break;          

        case 2:
            margueritte.style.display = ('none');
            tiare.style.display = ('flex');
            cosmos.style.display = ('none');
            tulipe.style.display = ('none');
            break;

        case 3:
            margueritte.style.display = ('none');
            tiare.style.display = ('none');
            cosmos.style.display = ('flex');
            tulipe.style.display = ('none');
            break;          
              
        case 4:
            margueritte.style.display = ('none');
            tiare.style.display = ('none');
            cosmos.style.display = ('none');
            tulipe.style.display = ('flex');
            break;
    }
    }

    arrosoirNumber.innerText = `Vous avez ${helpersProps[0].number} arrosoirs`;
    rateauNumber.innerText = `Vous avez ${helpersProps[1].number} rateaux`;
    pelleNumber.innerText = `Vous avez ${helpersProps[2].number} pelles`;
    brouetteNumber.innerText = `Vous avez ${helpersProps[3].number} brouettes`;


    /*let barPercent = (actScore / 100000) * 100;
    progressBarNow.style.width = "10%";
    console.log(progressBarNow.style.width);*/

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
        if (actScore >= helpersProps[1].cost && event.timeStamp != precedentTimeStampArrosoir) {
            actScore -= helpersProps[1].cost;
            helpersProps[1].number++;
            petalesPerSeconds += 7;
            precedentTimeStampArrosoir = event.timeStamp;
        }

    }
    )

    pelle.addEventListener("click", (event) => {
        event.preventDefault();
        if (actScore >= helpersProps[2].cost && event.timeStamp != precedentTimeStampArrosoir) {
            actScore -= helpersProps[2].cost;
            helpersProps[2].number++;
            petalesPerSeconds += 49;
            precedentTimeStampArrosoir = event.timeStamp;
        }

    })
    brouette.addEventListener("click", (event) => {
        event.preventDefault();
        if (actScore >= helpersProps[3].cost && event.timeStamp != precedentTimeStampArrosoir) {
            actScore -= helpersProps[3].cost;
            helpersProps[3].number++;
            petalesPerSeconds += 343;
            precedentTimeStampArrosoir = event.timeStamp;
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
            margueritte.querySelector("h3").style = "font-weight: bold";
            petalesPerSeconds *= 1.01;
        }
    })
    tiare.addEventListener("click", (event) => {
        event.preventDefault
        if (actScore >= giftsProps[1].cost
            && giftsProps[1].number === 0) {
            actScore -= giftsProps[1].cost;
            giftsProps[1].number = 1;
            tiare.querySelector("h3").style = "font-weight: bold";
            petalesPerSeconds *= 1.05;
        }
    })
    cosmos.addEventListener("click", (event) => {
        event.preventDefault
        if (actScore >= giftsProps[2].cost
            && giftsProps[2].number === 0) {
            actScore -= giftsProps[2].cost;
            giftsProps[2].number = 1;
            cosmos.querySelector("h3").style = "font-weight: bold";
            petalesPerSeconds *= 1.1;
        }
    })
    tulipe.addEventListener("click", (event) => {
        event.preventDefault
        if (actScore >= giftsProps[3].cost
            && giftsProps[3].number === 0) {
            actScore -= giftsProps[3].cost;
            giftsProps[3].number = 1;
            tulipe.querySelector("h3").style = "font-weight: bold";
            petalesPerSeconds *= 1.5;
        }
    })



    tempsPrecedent = chrono;
    if (!fini) {
        window.requestAnimationFrame(updateScore);
    }

}

// dès le premier rafraichissement de la page, appelle la fonction updateScore()
window.requestAnimationFrame(updateScore);
