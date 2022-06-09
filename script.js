let datos =[];
let total = 0;

function calcular(){
    apagar = 0;
    apagar = parseFloat(total/datos.length).toFixed(2);
    var totalM = document.getElementById("total");
    totalM.innerHTML =`
    <div class="flex-item">
    <p>El total gastado fue: <b>$${total}</b></p>
    <p>Cada uno debe pagar: <b>$${apagar}</b</p>
    </div> 
    `;
}

function Agregar (nombre, monto){
    total += parseFloat(monto);
    datos.push({
        name: nombre,
        montos: monto
    })
    funImprimir();
    calcular();
}

function borrarUno(){
    datos.pop()
    funImprimir();
    calcular();
}

function funImprimir(){
    var nuevo = document.getElementById("datos");
    nuevo.innerHTML ="";
    for (let i = 0; i < datos.length; i++){
        nuevo.innerHTML +=`
        <div class="flex-item-input">
        <p><b>$${datos[i].name}</b> Gasto: <b>$${datos[i].montos}</b></p>
        </div>
        `;
    }
}

function download() {
    var a = document.createElement('a');
    var file = new Blob([JSON.stringify(datos)], { type: 'text/plain' });
    a.href = URL.createObjectURL(file);
    a.download = 'Base de datos.json';
    a.click();
}