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
    <p>El total gastado fue: $${total}</p>
    <p>Cada uno debe pagar: $${apagar}</p>
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

function descargarBase() {
    let datos = [];
    for (let i = 0; i < montos.length; i++){
        datos.push({"nombre":nombres[i], "monto":montos[i]}) ;
        console.log(datos)
    }
    let json = JSON.stringify(datos);
    let blob = new Blob([json], { type: "application/json" });
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download = "datos.json";
    link.click();
}

function Leer(){
    fetch("datos.json")
        .then(response =>response.json())
        .then(data=>{
            for (let i = 0; i < data.length;i++){
                AgregarNuevo(data[i].nombre, data[i].monto);
            }
        });
}