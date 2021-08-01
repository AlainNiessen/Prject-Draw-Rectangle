/*Il vous est demandé de résoudre les exercices 3 et 4 du
chapitre 10 (partie JS)*/

//si on a besoin du DOM, on doit d'abord s'assurer que le DOM est chargé
$(function () {
    //1) SELECTION BODY (pour y ajouter par après des éléments)
    let body = $('body');
    
    //2) CREATION DIV POUR RECTANGLE DANS LE PLAYGROUND
    let playground = $('#playground');
    let rect = $('<div id="rect" class="rect"></div>');    

    //3) INITIALISATION POINTS DE DEPART
    let startingPointX, startingPointY;

    //4) CREATION DIV, TITRE ET BOUTONS POUR LA PALETTE DE COULEUR    
    let pal_color = $('<div class="palette"></div>');
    let titre = $('<h1 class="title">Choose your color</h1>');
    let btn_collection = $('<div class="btn-collection"></div>');
    pal_color.append(titre).append(btn_collection);    

    const BUTTONS = ["yellow", "green", "blue", "red", "white"];

    for(let val of BUTTONS) {
        let button = $(`<button class="box ${val}"></button>`)
        button.on('click', () => {            
            rect.attr('class', `rect ${val}`);
        })
        btn_collection.append(button);
    }

    //5) DESSINER RECTANGLE
    playground.on({
        'mousedown': (event) => {
            //ajout du rectangle dans le DIV playground
            playground.append(rect);
            //définition point de départ
            startingPointX = event.clientX;
            startingPointY = event.clientY;
            $(this).on('mousemove', dessinerRect);
        },
        'mouseup' : () => {
            $(this).off('mousemove', dessinerRect);
            body.append(pal_color);
        }
    })

    //fonction dessiner Rectangle
    function dessinerRect (event) {
        //définition position curseur
        let posX = event.clientX;
        let posY = event.clientY;
        //dessiner
        rect.css('top', (posY > startingPointY ?  startingPointY : posY) + "px");
        rect.css('left', (posX > startingPointX ?  startingPointX : posX) + "px");
        rect.css('width', Math.abs(startingPointX - posX) + "px");
        rect.css('height', Math.abs(startingPointY - posY) + "px");
    }    
})