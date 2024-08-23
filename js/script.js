// Declarando variables generales

let resultOutput = "";

let resultText = document.querySelector('.resultText');

let cardContainer = document.querySelector('.cardContainer');
let resultContainer = document.querySelector('.resultContainer');

// Declarando la función codificar (Se decide no pasar parámetros, sino manejarlos directamente dentro de la función)
function codificar(){

    // Tomamos el texto a codificar
    let inputTextArea = document.getElementById('inputText').value;

    let resultOutput = "";

    // Comprobamos que haya un mensaje escrito
    if(!inputTextArea){
        // Mostramos mensaje en caso de que no haya texto alternando las clases 'd-none' que agregan un "display: none"
        cardContainer.classList.remove('d-none');
        resultContainer.classList.add('d-none');
    }else{
        // Iteramos por cada letra del texto
        for (char of inputTextArea){
            //Evaluamos la condición para cada vocal agregando la llave de encriptación al 'resultOutput'
            switch(char) {
                case "e":
                    resultOutput = resultOutput + "enter";
                  break;
                case "i":
                    resultOutput = resultOutput + "imes";
                  break;
                case "a":
                        resultOutput = resultOutput + "ai";
                    break;
                case "o":
                    resultOutput = resultOutput + "ober";
                  break;
                case "u":
                        resultOutput = resultOutput + "ufat";
                    break;
                
                default:
                    // Pasamos la letra igual si no se cumplen las condiciones anteriores
                    resultOutput = resultOutput + char;
            }
        }
        
        // Mostramos mensaje procesado alternando las clases 'd-none'
        cardContainer.classList.add('d-none');
        resultContainer.classList.remove('d-none');
        
        // Pasamos el resultado al textarea del resultado
        resultText.value = resultOutput;
    }
}

function decodificar(){
    // Tomamos el texto a decodificar
    let inputTextArea = document.getElementById('inputText').value;

    let resultOutput = "";

    // Mostramos mensaje en caso de que no haya texto alternando las clases 'd-none' que agregan un "display: none"
    if(!inputTextArea){
        cardContainer.classList.remove('d-none');
        resultContainer.classList.add('d-none');
    }else{
        // Reemplazamos cada una de las llaves por la vocal original
        resultOutput = inputTextArea
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
        cardContainer.classList.add('d-none');
        resultContainer.classList.remove('d-none');
        
        // Devolvemos el resultado
        resultText.value = resultOutput;
    }
}

function toClipboard() {
    let resultTextValue = document.querySelector('.resultText').value;

    console.log(resultTextValue);

    //Copiamos al portapapeles usando la api navigator.clipboard
    navigator.clipboard.writeText(`Mensaje procesado: «${resultTextValue}»`);
}