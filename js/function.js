// je vais créer une grille
var gridSize = 8;
var pixelSize = 20;
var drawingArea = document.querySelector('#invader');


// je crée un formulaire

var form = document.querySelector('.configuration');
console.log(form)

var handleFormSubmit = function (event) {
    console.log("submit");
    event.preventDefault();
    var inputGridSize = document.querySelector('.form-grid-size');
    var inputPixelSize = document.querySelector('.form-pixel-size');
    gridSize = inputGridSize.value;
    pixelSize = inputPixelSize.value;
    generateGrid();
}


var createForm = function () {
    // je crée un input pour déterminer le nombre de cases
    var inputGridForm = document.createElement('input');
    inputGridForm.className = 'form-grid-size';
    inputGridForm.placeholder ='Saisis le nombre de pixel';
    // je crée un input pour determiner la taille d'un pixel
    var inputPixelSize = document.createElement('input');
    inputPixelSize.className ='form-pixel-size';
    inputPixelSize.placeholder = 'taille pixel';
    // Je crée un bouton
    var submitButton = document.createElement('button');
    submitButton.className = 'form-submit';
    submitButton.textContent = 'Valider';
    // je mets input dans le form
    form.appendChild(inputGridForm);
    // je mets le second input dans le form
    form.appendChild(inputPixelSize);
    // je mets le bouton dans le form
    form.appendChild(submitButton);
    form.addEventListener('submit', handleFormSubmit);
}



var handlePixel = function (event) {
    console.log(event);
    event.target.classList.toggle('black');

};

// je crée un fonction pour générer une grille
var generateGrid = function() {
    drawingArea.innerHTML = " ";
    // je crée une boucle sur et je la répète 8 fois
    for (var lineIndex = 0; lineIndex < gridSize; lineIndex++) {
        // je crée un élément et je lui donne une classe
        var lineContainer = document.createElement('div');
        lineContainer.className = 'line';
        // je crée un élément et j'effectue un boucle
        for (var pixelIndex = 0; pixelIndex < gridSize; pixelIndex++) {
            var pixel = document.createElement('div');
            // je donne une classe et un style css au nouvel élément créé
            pixel.classList.add('pixel');
            pixel.style.width = pixelSize + 'px';
            pixel.style.height = pixelSize + 'px';
            // j'écoute le clic sur l'élément
            pixel.addEventListener('click', handlePixel)
            // je place l'élément pixel dans le DOM
            lineContainer.appendChild(pixel);
        }
        // je place l'élément dans le DOM
        drawingArea.appendChild(lineContainer);
    
    }
}
generateGrid();
createForm();
