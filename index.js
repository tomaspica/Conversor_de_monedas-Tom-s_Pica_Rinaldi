function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 121.27;
    var euro = 129.85;
    if(document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Pesos argentinos a Dolares es: $" + resultado);
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Peso argentinos a Euros es: " + resultado)
    }
    else{
        alert("Tienes que completar todos los requisitos")
    } 
}