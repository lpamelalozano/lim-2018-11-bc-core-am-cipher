//Declarando costantes
const inputElementOffSet = document.getElementById('offSet');
const inputElementEnterText = document.getElementById('enter-text');
const inputElementResult = document.getElementById('result');
const buttonEncode = document.getElementById('encode');
const buttonDecode = document.getElementById('decode');
const buttonClean = document.getElementById('clean');
const buttonCopy = document.getElementById('copy');
const btnInstructions = document.getElementById("instructions");

//Agregando una funcion al evento click de los button
function showStep() {
    const x = document.getElementById('alerta');
    x.classList.toggle("visible");
}

btnInstructions.addEventListener("click", ()=>{
  showStep();
})

buttonEncode.addEventListener('click', () =>{
    const offSet= parseInt(inputElementOffSet.value)
    inputElementResult.value=cipher.encode(offSet,inputElementEnterText.value );
})


buttonDecode.addEventListener('click', () =>{
    const offSet= parseInt(inputElementOffSet.value)
   inputElementResult.value=cipher.decode(offSet,inputElementEnterText.value );
})

buttonClean.addEventListener('click', () =>{
    inputElementOffSet.value='';
    inputElementEnterText.value='';
    inputElementResult.value='';
})

buttonCopy.addEventListener('click', (id_elemento) =>{
        id_elemento=inputElementResult.value;
        // Crea un campo de texto "oculto"
         const aux = document.createElement("input");

        // Asigna el contenido del elemento especificado al valor del campo
        aux.setAttribute("value", id_elemento);

        // A�ade el campo a la p�gina
        document.body.appendChild(aux);

        // Selecciona el contenido del campo
        aux.select();

        // Copia el texto seleccionado
        document.execCommand("copy");

        // Elimina el campo de la p�gina
        document.body.removeChild(aux);

        //console.log("texto copiado")

})
