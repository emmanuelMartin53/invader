var app = {
     gridSize : 8,
     pixelSize : 20,
     drawingArea : document.querySelector('#invader'),
     form : document.querySelector('.configuration'),
     init : function () {
        app.createForm();
        app.generateGrid();
        app.generateColorPicker();
     },
     selectedColor: 'empty',
     styles: ['plain', 'empty','light','highlight'],

    handleFormSubmit : function (event) {
        console.log("submit");
        event.preventDefault();
        var inputGridSize = document.querySelector('.form-grid-size');
        var inputPixelSize = document.querySelector('.form-pixel-size');
        app.gridSize = inputGridSize.value;
        app.pixelSize = inputPixelSize.value;
        app.generateGrid();
    },

    createForm : function () {
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
        app.form.appendChild(inputGridForm);
        // je mets le second input dans le form
        app.form.appendChild(inputPixelSize);
        // je mets le bouton dans le form
        app.form.appendChild(submitButton);
        app.form.addEventListener('submit', app.handleFormSubmit);
    },

    handlePixelClick : function (event) {
        event.target.classList.toggle('black');
        var pixel = event.target;
        pixel.className = "pixel pixel--" + app.selectedColor;
    
    },
         
    generateGrid :  function() {
        app.drawingArea.innerHTML = " ";
        // je crée une boucle sur et je la répète 8 fois
        for (var lineIndex = 0; lineIndex < app.gridSize; lineIndex++) {
            // je crée un élément et je lui donne une classe
            var lineContainer = document.createElement('div');
            lineContainer.className = 'line';
            // je crée un élément et j'effectue un boucle
            for (var pixelIndex = 0; pixelIndex < app.gridSize; pixelIndex++) {
                var pixel = document.createElement('div');
                // je donne une classe et un style css au nouvel élément créé
                pixel.classList.add('pixel');
                pixel.style.width = app.pixelSize + 'px';
                pixel.style.height = app.pixelSize + 'px';
                // j'écoute le clic sur l'élément
                pixel.addEventListener('click', app.handlePixelClick)
                // je place l'élément pixel dans le DOM
                lineContainer.appendChild(pixel);
            }
            // je place l'élément dans le DOM
            app.drawingArea.appendChild(lineContainer);
        
        }
    },
    generateColorPicker : function () {
        var colorPickerContainer = document.createElement('div');
        colorPickerContainer.className = "color-picker";
        app.drawingArea.appendChild(colorPickerContainer);
        app.styles.forEach(function(element) {
            var newColor = document.createElement('div')
            newColor.className = "color pixel--" + element;
                if (app.selectedColor=== element) {
                    newColor.classList.add('selected');
                }
            colorPickerContainer.appendChild(newColor);
            newColor.addEventListener('click', function() {
                app.selectedColor = element;
                console.log(app.selectedColor);
                app.clearSelected();
                newColor.classList.add('selected');
    
            })
        })
    },
    clearSelected: function () {
        var colors = document.querySelectorAll('.color');
        colors.forEach(function(color) {
            color.classList.remove('selected');
        })
    } 
    

}
app.init();