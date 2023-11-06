<template>
    <div>
        <h1>Oficios</h1>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado">
                    <td>{{empleado.apellido}}</td>
                    <td>{{empleado.oficio}}</td>
                    <td>{{empleado.salario}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
//import axios from 'axios';
//import Global from './../Global';
import ServiceEmpleados from './../services/ServiceEmpleados';
const service = new ServiceEmpleados()

    export default {
        name: "EmpleadosOficios",
        data() {
            return{
                empleados:[]
            }
        },
        methods: {
            loadEmpleados() {
                var oficio = this.$route.params.oficio;
                service.getEmpleadosOficio(oficio).then(result => {
                    this.empleados = result;
                })
            }
        },
        mounted() {
            this.loadEmpleados();
        },
        watch: {
            '$route.params.oficio'(nextVal, oldVal){
                if(nextVal!=oldVal){
                    this.loadEmpleados();
                }
            }
        }
    }
</script>