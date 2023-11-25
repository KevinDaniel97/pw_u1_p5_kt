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
const cambiarImagen = () => {
    var l1 = document.getElementById('idimagen2').src = 'https://www.nintenderos.com/wp-content/uploads/2009/08/luigi-nintendo.jpg'

}
const parsear = (id) => parseInt(document.getElementById(id).value)

function conceptosJS() {
    let var1 = 10;
    let var1Texto = 'Texto1';

    console.log(var1);
    console.log(var1Texto);

    var var2 = 10;
    var var2Texto = 'Texto2';
    console.log(var2);
    console.log(var2Texto);

    const const1 = 10;
    const const1Texto = 'Texto3';
    console.log(const1);
    console.log(const1Texto);

    //declaracion 
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    console.log(diasSemana)
    console.log(diasSemana[0])
    console.log(diasSemana[4])
    console.log(diasSemana[5])
    diasSemana[5] = "Sabado"
    console.log(diasSemana[5])
    diasSemana.push("Domingo")
    console.log(diasSemana)
    diasSemana.unshift("feriado")
    console.log(diasSemana)
    const edades = [1, 2, 3, 4, 5]
    console.log(edades)
    const edades2 = [6, 7, 8]
    const edadesFinales = edades.concat(edades2)
    console.log(edadesFinales)


    for (const dia of diasSemana) {
        console.log(dia)
        if (dia === "Martes") {
            console.log('martes dos por uno')

        }
    }

    // declaracion de objetos
    const estudiante = {
        nombre: "Kevin",
        apellido: "Toapanta",
        edad: 34,
        genero: "M",
        ciudad: "Quito"
    }
    console.log(estudiante)
    console.log(estudiante.apellido)
    estudiante.nombre = "Daniel"
    console.log(estudiante.nombre)

    const persona = {
        nombre: "Kevin",
        apellido: "Toapanta",
        edad: 34,
        direccion: {
            callePrincipal: "America",
            calleSecundaria: "Bolivia",
            numeracion: "Oe3-101",
            barrio: "Mariana de Jesus"
        }
    }
    console.log(persona)
    console.log(persona.direccion.callePrincipal)

    //arreglo de 4 pacientes
    const pacientes =
        [
            {
                nombre: "Kevin1",
                apellido: "Toapanta1",
                edad: 24,
            },
            {
                nombre: "Kevin2",
                apellido: "Toapanta2",
                edad: 25,
            },
            {
                nombre: "Kevin3",
                apellido: "Toapanta3",
                edad: 26,
            },
            {
                nombre: "Kevin4",
                apellido: "Toapanta4",
                edad: 25,
            }
        ]

    console.log(pacientes)
    console.table(pacientes)
    console.log(pacientes[0].nombre)
    console.log(pacientes.pop())
    console.table(pacientes)

    //desestructuracion de arreglos
    const diasSemana2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    const [dia1, dia2, dia3, dia4, dia5] = diasSemana2
    console.log(dia1)
    console.log(dia5)

    const [d1, d2, d3, d4, d5] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
    console.log(dia2)
    console.log(dia4)

    //desestructuracion de objetos
    const vehiculo = { marca: "Nissan", modelo: "Modelo1", anio: "2022" }
    const { marca, modelo, anio } = vehiculo;
    console.log(modelo)
    console.log(anio)
    console.log(marca)
    ////////////////////////////////
    const { nombre, edad, direccion: { callePrincipal, calleSecundaria, numeracion } } = {
        nombre: "Daniel",
        edad: 25,
        direccion: {
            callePrincipal: "America",
            calleSecundaria: "Bolivia",
            numeracion: "Oe3-004",
        }
    }
    console.log(nombre)
    console.log(callePrincipal)

}