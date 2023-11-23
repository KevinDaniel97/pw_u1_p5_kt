const sumar = (n1, n2) => n1 + n2;

const sumarNumeroCompleto = () => {
    var resultado = parsear('idnumero1') + parsear('idnumero2');

    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;

}
const restarNumero = () => {

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumero' + n1)
    console.log('Funcion sumarNumero' + n2)
    var resultado = n1 - n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
    return resultado;

}

const multiplicarNumero = () => {

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumero' + n1)
    console.log('Funcion sumarNumero' + n2)
    var resultado = n1 * n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
    return resultado;

}
const dividirNumero = () => {

    var n1 = parseInt(document.getElementById('idnumero1').value);
    var n2 = parseInt(document.getElementById('idnumero2').value);
    console.log('Funcion sumarNumero' + n1)
    console.log('Funcion sumarNumero' + n2)
    var resultado = n1 / n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText = resultado;
    return resultado;

}
constcambiarImagen = () => {

    var l1 = document.getElementById('idimagen1').src = 'https://w7.pngwing.com/pngs/680/842/png-transparent-mario-bross-thumbnail.png" id="imagen2'

}
const parsear = (id) => parent(document.getElementById(id).value)

function conceptosJS() {
    let var1 = 10;
    let var1Texto = 'Texto1';

    console.log(var1);
    console.log(var1Texto);

    var var2 = 10;
    var var2Texto = 'Texto2';
    console.log(var2);
    console.log(var2Text2);

    const const1 = 10;
    const const1Texto = 'Texto3';
    console.log(const1);
    console.log(conts1Texto);

    //declaracion 
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    console.log(diasSemana)
}