//
// constantes modal
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar= document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");

// constantes botones individuales

const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");

let funcionEjercicioActual = null;
//eventos

btnParImpar.addEventListener("click",function(){
    abrirModal("Numero Par o Impar","Ingresa un numero para verificar si es par o impar",verificarParImpar);
});

btnMayorEdad.addEventListener("click",function(){
    abrirModal("Mayor de Edad","Ingrese su edad",verificarMayorEdad);
});
btnPositivoNegativo.addEventListener("click",function(){
    abrirModal("Numero Positivo o Negativo","Ingrese un numero para verificar si es Negativo o Postivo",verificarNumeroPositvoNegativo);
});
btnCreacionJS.addEventListener("click",function(){
    abrirModal("Año de Creacion de JS","Ingrese el año en que fue creado JS",verificarAnoCreacionJS);
});
// bucles
btnTablaMultiplicar.addEventListener("click",function(){
    abrirModal("Table de Multiplicar","Ingrese un numero",tablaMultiplicar);
});
btnContarUnoDiez.addEventListener("click",function(){
    abrirModal("Table de Multiplicar","Ingrese un numero",unoAlDiez);
});
btnMeses.addEventListener("click",function(){
    abrirModal("Table de Multiplicar","Ingrese un numero del 1 al 12",meses);
});
btnDias.addEventListener("click",function(){
    abrirModal("Table de Multiplicar","Ingrese un numero del 1 al 7",diasSemana);
});
//
function abrirModal(titulo,descripcion,funcionEjercicio){
    tituloModal.textContent = titulo;
    ejercicioModal.textContent = descripcion;
    respuesta.value = "";
    mensaje.textContent = "";
    
    funcionEjercicioActual = funcionEjercicio;
    modal.classList.add("activarModal");
}


btnCerrar.addEventListener("click",function(){
    modal.classList.remove("activarModal");
});

// metodo para verificar par o impar
function verificarParImpar(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingrese un numero valido";
    }
    else 
    {
        mensaje.textContent = (numero %2 === 0 ) ? "Es un numero Par" : "Es un numero Impar";
    }
}
function verificarMayorEdad(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingrese un numero valido";
    }
    else{
        mensaje.textContent = (numero >= 18) ? "Eres mayor de edad":"Eres menor de edad";
    }
}
function verificarNumeroPositvoNegativo(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "ingrese un numero valido";
    }
    else{
        mensaje.textContent = (numero >= 0 ) ? "Numero positivo":"Numero negativo";
    }
}
function verificarAnoCreacionJS(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "ingrese un numero valido";
    }
    else{
        mensaje.textContent = (numero != 1995 ) ? "Incorrecto se creo en 1995":"Correcto";
    }
}

function tablaMultiplicar(){
    let tableArray = [];
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "ingrese un numero valido";
    }
    else{
        mensaje.innerHTML = "";
       for(let i = 0; i <= 10; i++){
            tableArray[i] = numero * i;
       } 
      for (const element of tableArray) {
        let datoArray = document.createElement('p');
        datoArray.innerText = element;

        mensaje.appendChild(datoArray);
        
      }
        
    }
}

function unoAlDiez(){
    let tableArray = [];
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "ingrese un numero valido";
    }
    else{
        mensaje.innerHTML = "";
       for(let i = 0; i <= 10; i++){
            tableArray[i] = i;
       } 
      for (const element of tableArray) {
        let datoArray = document.createElement('p');
        datoArray.innerText = element;

        mensaje.appendChild(datoArray);
        
      }
        
    }
}
function meses(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "ingrese un numero valido";
    }
    else{
        switch (numero) {
            case 1:
                mensaje.textContent = "Enero";
              break;
            case 2:
                mensaje.textContent = "Febrero";
              break;
            case 3:
                mensaje.textContent = "Marzo";
              break;
            case 4:
                mensaje.textContent = "Abril";
              break;
            case 5:
                mensaje.textContent = "Mayo";
              break;
            case 6:
                mensaje.textContent = "Junio";
              break;
            case 7:
                mensaje.textContent = "Julio";
              break;
            case 8:
                mensaje.textContent = "Agosto";
             break;
             case 9:
                mensaje.textContent = "Septiembre";
             break;
             case 10:
                mensaje.textContent = "Octubre";
             break;
             case 11:
                mensaje.textContent = "Noviembre";
             break;
             case 12:
                mensaje.textContent = "Diciembre";
             break;
             default:
                case 8:
                mensaje.textContent = "no existe numero de mes";
             break;
          }
        
    }
}
function diasSemana(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "ingrese un numero valido";
    }
    else{
        switch (numero) {
            case 1:
                mensaje.textContent = "Lunes";
              break;
            case 2:
                mensaje.textContent = "Martes";
              break;
            case 3:
                mensaje.textContent = "Miercoles";
              break;
            case 4:
                mensaje.textContent = "Jueves";
              break;
            case 5:
                mensaje.textContent = "Viernes";
              break;
            case 6:
                mensaje.textContent = "Sabado";
              break;
            case 7:
                mensaje.textContent = "Domingo";
              break;           
             default:
                case 8:
                mensaje.textContent = "no existe numero del dia de la semana";
             break;
          }
        
    }
}


btnVerificar.addEventListener("click",function(){
    if(funcionEjercicioActual ){
        funcionEjercicioActual();
    }
});