const estudiantes = [{
    nombre: '', apellido: '', hobie: '',
    genero: '', pais: ''
}]
console.log(estudiantes)
console.table(estudiantes)


const app = Vue.createApp({

    methods: {
        guardar() {
            console.log('Guardando estudiante')
            const estu = {
                nombre: this.nombre, apellido: this.apellido, hobie: this.hobie,
                genero: this.genero, pais: this.pais
            }
            this.lista.push(estu)
            console.table(estudiantes)

        },
        presionandoTeclas(event) {

        }
    },
    watch: {

    },
    data() {
        return {
            mensaje: 'return del data',
            lista: estudiantes,
            nombre: null,
            apellido: null,
            hobie: null,
            genero: null,
            pais: null,
            index: 1
        }
    }

})
app.mount('#myApp')