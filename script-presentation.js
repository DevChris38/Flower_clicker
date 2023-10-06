
if(window.innerWidth > 768){

    const cercle1 = document.querySelector("#cercle1");
const cercle2 = document.querySelector("#cercle2");
const changingText= document.querySelector("#changingText");
const svg = document.querySelector("svg");
const svgMobile = document.querySelector("#svgMobile");

    console.log("tutuuuuuut Desktop " + window.innerWidth);
    cercle1.setAttribute('transform','scale(0)');

    const firstFocus = new KeyframeEffect(
        cercle2,
        [
            {transform:'translateY(0)'},
            {transform:'translateY(-1150px)'}
        ],
        {duration: 2000, easing: "ease-out", fill: "forwards"},
    );

    const firstFocusAnimation = new Animation(
        firstFocus,
        document.timeline,
    );

    const secondFocus = new KeyframeEffect(
        cercle1,
        [
            {transform:'translateY(0) translateX(0) scale(1)'},
            {transform:'translateY(400px) translateX(300px) scale(0.2)'}
        ],
        {duration: 2000, easing: "ease-out", fill: "forwards"},
    );

    const secondFocusAnimation = new Animation(
        secondFocus,
        document.timeline,
    );

    const thirdFocus = new KeyframeEffect(
        cercle1,
        [
            {transform:'translateY(400px) translateX(300px) scale(0.2)'},
            {transform:'translateY(400px) translateX(650px) scale(0.2)'}
        ],
        {duration: 2000, easing: "ease-out", fill: "forwards"},
    );

    const thirdFocusAnimation = new Animation(
        thirdFocus,
        document.timeline,
    );

    const forthFocus = new KeyframeEffect(
        cercle1,
        [
            {transform:'translateY(400px) translateX(650px) scale(0.2)'},
            {transform:'translateY(400px) translateX(-50px) scale(0.2)'}
        ],
        {duration: 2000, easing: "ease-out", fill: "forwards"},
    );

    const forthFocusAnimation = new Animation(
        forthFocus,
        document.timeline,
    );



    let tutoSteps = 0;


    svg.addEventListener("click",(event)=> {

        event.preventDefault();

        console.log("tutuuuuuut" + window.width);

        switch(tutoSteps) {
            case 0:
                changingText.innerText=`Le but du jeu est d'obtenir le plus rapidement possible 100 000 pétales`;
                firstFocusAnimation.play();
                console.log("clic 1");
                break;
            
            case 1:
                firstFocusAnimation.cancel();
                changingText.innerText=`Pour cela vous devez cliquer sur la zone centrale.
                
                Chaque clic vous rapporte 1 pétale`;
                cercle2.setAttribute('transform','scale(0)');
                secondFocusAnimation.play();
                break;

            case 2:
                secondFocusAnimation.cancel();
                changingText.innerText=`Pour vous aider, vous aurez accès à des aides que vous pourrez acheter avec vos pétales.
                Ils vous permettront de gagner des pétales automatiquement chaque seconde`;
                thirdFocusAnimation.play();
                break;
            
            case 3:
                thirdFocusAnimation.cancel();
                changingText.innerText=`Vous pourrez également acheter de nouvelles fleurs plus belles et plus productives`;
                forthFocusAnimation.play();
                break;
            
            case 4:
                document.location.href="./home.html";
        }
        tutoSteps++;
    });
}

if(window.innerWidth <= 768){

    const cercle1 = document.querySelector("#cercle1Mobile");
const cercle2 = document.querySelector("#cercle2");
const changingText= document.querySelector("#changingTextMobile");
const svgMobile = document.querySelector("#svgMobile");


    const firstFocus = new KeyframeEffect(
        cercle1,
        [
            {transform:'translateY(1120px) translateX(0px) scale(1)'},
            {transform:'translateY(-1120px)'}
        ],
        {duration: 1000, easing: "ease-out", fill: "forwards"},
    );

    const firstFocusAnimation = new Animation(
        firstFocus,
        document.timeline,
    );

    const secondFocus = new KeyframeEffect(
        cercle1,
        [
            {transform:'translateY(0px)'},
            {transform:'translateY(250px) translateX(125px) scale(0.1)'}
        ],
        {duration: 1000, easing: "ease-out", fill: "forwards"},
    );

    const secondFocusAnimation = new Animation(
        secondFocus,
        document.timeline,
    );

    const thirdFocus = new KeyframeEffect(
        cercle1,
        [
            {transform:'translateY(250px) translateX(125px) scale(0.1)'},
            {transform:'translateY(1120px) translateX(0px) scale(1)'}
        ],
        {duration: 2000, easing: "ease-out", fill: "forwards"},
    );

    const thirdFocusAnimation = new Animation(
        thirdFocus,
        document.timeline,
    );

    const forthFocus = new KeyframeEffect(
        cercle1,
        [
            {transform:'translateY(1120px) translateX(0px) scale(1)'},
            {transform:'translateY(500px) translateX(0px) scale(1)'}
        ],
        {duration: 2000, easing: "ease-out", fill: "forwards"},
    );

    const forthFocusAnimation = new Animation(
        forthFocus,
        document.timeline,
    );



    let tutoSteps = 0;


    svgMobile.addEventListener("click",(event)=> {

        event.preventDefault();

        switch(tutoSteps) {
            case 0:
                changingText.innerText=`Le but du jeu est d'obtenir le plus rapidement possible 100 000 pétales`;
                break;
            
            case 1:
                changingText.innerText=`Pour cela vous devez cliquer sur la zone centrale.
                
                Chaque clic vous rapporte 1 pétale`;
                cercle2.setAttribute('transform','scale(0)');
                secondFocusAnimation.play();
                break;

            case 2:
                secondFocusAnimation.cancel();
                changingText.innerText=`Pour vous aider, vous aurez accès à des aides que vous pourrez acheter avec vos pétales.
                Ils vous permettront de gagner des pétales automatiquement chaque seconde`;
                thirdFocusAnimation.play();
                break;
            
            case 3:
                thirdFocusAnimation.cancel();
                changingText.innerText=`Vous pourrez également acheter de nouvelles fleurs plus belles et plus productives`;
                firstFocusAnimation.play();
                break;
            
            case 4:
                document.location.href="./home.html";
        }
        tutoSteps++;
    });
}