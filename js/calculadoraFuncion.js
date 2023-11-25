function sumarNumeroCompleto() {
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumero' + n1)
    console.log('Funcion sumarNumero' + n2)
    var resultado = n1 + n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
    return resultado;
}
function restarNumero() {
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumero' + n1)
    console.log('Funcion sumarNumero' + n2)
    var resultado = n1 - n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
    return resultado;

}
function multiplicarNumero() {
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumero' + n1)
    console.log('Funcion sumarNumero' + n2)
    var resultado = n1 * n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
    return resultado;

}
function dividirNumero() {
    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumero' + n1)
    console.log('Funcion sumarNumero' + n2)
    var resultado = n1 / n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
    return resultado;

}
function cambioImgane() {
    var l1 = document.getElementById('idimagen1').src = 'https://w7.pngwing.com/pngs/680/842/png-transparent-mario-bross-thumbnail.png" id="imagen2'
}
