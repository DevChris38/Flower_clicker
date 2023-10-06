import updateScore from 'engine.js';

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

let debut;
let fini = false;
let tempsPrecedent = 0;
let lastClick = 0;
let precedentTimeStamp = 0;
let actScore = 0;
let petalesPerSeconds = 0;


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