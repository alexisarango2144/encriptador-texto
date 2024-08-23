/* 
Crear función

Conectar función a su respectivo botón en el HTML

Capturar el texto escrito en el campo del input del HTML

Desarrollar la lógica de la encriptación

Mostrar en la pantalla el resultado del texto encriptado

Añade un elemento

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

let resultOutput = "";

let resultText = document.querySelector('.resultText');

let cardContainer = document.querySelector('.cardContainer');
let resultContainer = document.querySelector('.resultContainer');


function codificar(){
    let inputTextArea = document.getElementById('inputText').value;

    let resultOutput = "";

    if(!inputTextArea){
        cardContainer.classList.remove('d-none');
        resultContainer.classList.add('d-none');
    }else{
        for (char of inputTextArea){
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
                    resultOutput = resultOutput + char;
            }
        }
    
        cardContainer.classList.add('d-none');
        resultContainer.classList.remove('d-none');
    
        resultText.value = resultOutput;
    }
}

function decodificar(){
    let inputTextArea = document.getElementById('inputText').value;

    let resultOutput = "";

    if(!inputTextArea){
        cardContainer.classList.remove('d-none');
        resultContainer.classList.add('d-none');
    }else{
        resultOutput = inputTextArea
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
        cardContainer.classList.add('d-none');
        resultContainer.classList.remove('d-none');
    
        resultText.value = resultOutput;
    }
}

function toClipboard() {
    let resultTextValue = document.querySelector('.resultText').value;

    console.log(resultTextValue);

    navigator.clipboard.writeText(`Mensaje procesado: «${resultTextValue}»`);
}