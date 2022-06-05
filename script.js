let nombres = [];
let montos = [];

let total = 0;

function calcular(){
    total = 0;
    apagar = 0;
    for (let i=0; i<montos.length; i++){
        total += parseFloat(montos[i]);
    }
    apagar = parseFloat(total/montos.length).toFixed(2);
    var totalM = document.getElementById("total");
    totalM.innerHTML =`
    <div class="flex-item">
    <p>El total gastado fue: <b>$${total}</b></p>
    <p>Cada uno debe pagar: <b>$${apagar}</b</p>
    </div> 
    `;
}

function Agregar (nombre, monto){
    nombres.push(nombre);
    montos.push(monto);
    funImprimir();
    calcular();
}

function borrarUno(){
    let name = prompt("Ingrese nombre a borrar")
    let indice = nombres.indexOf(name);
    nombres.splice(indice, 1);
    montos.splice(indice, 1);
    funImprimir();
    calcular();
}

function funImprimir(){
    var nuevo = document.getElementById("datos");
    nuevo.innerHTML ="";
    for (let i = 0; i < montos.length; i++){
        nuevo.innerHTML +=`
        <div class="flex-item-input">
        <p><b>${nombres[i]}</b> Gasto: <b>$${montos[i]}</b></p>
        </div>
        `;
    }
}