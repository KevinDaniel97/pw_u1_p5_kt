console.log('elemnetos Vue')
console.log(Vue)

const estudiantes = [{ nombre: 'Kevin', apellido: 'Toapanta' },
{ nombre: 'Daniel', apellido: 'Moya' },
{ nombre: 'Matias', apellido: 'Chiza' },
{ nombre: 'Carlos', apellido: 'Fernandez' },
{ nombre: 'Maria', apellido: 'Lucho' }
]
console.log(estudiantes)
console.table(estudiantes)

const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p> Desde App.js</p>
    // <h6>{{1+1}}</h6>
    // <p>{{[1,2,3,4,5,6,7,8]}}</p>
    // <p>{{true?'Verdadero':'Falso'}}</p>
    // `
    methods: {
        cambiarMensaje() {//parentecis no es necesario si no hay argumentos
            console.log('se esta cambiando el mensaje')
            console.log(this.mensaje)
            mensaje = 'valor cambiado'
        },
        cambiarNumero() {
            this.valor++
            console.log(this.valor)
        },
        agregarEstudiante() {
            console.log('Agregando estdiante')
            //const estu = { nombre: this.nombre, apellido: this.apellido }
            //this.lista.unshift(estu)  //lo pone al inicio de la lista
            //this.lista.push(estu) //lo pone al final de la lista
            //forma mas corta
            this.lista.push({ nombre: this.nombre, apellido: this.apellido })

        },
        presionandoTeclas(event) {
            console.log('presionando.....')
            console.log(event.charCode)

        },
        presionarEnter(event) {
            if (event.charCode === 13) {
                const estu = { nombre: this.nombre, apellido: this.apellido }
                this.lista.push(estu)
            }
        }
    },
    watch: {

    },
    data() {
        return {
            mensaje: 'hola mundo desde Vue.JS',
            valor: 100,
            lista: estudiantes,
            nombre: null,
            apellido: null
        }
    }
})
app.mount('#myApp')
