<template>
    <div>
        <h1>Empleados detalle</h1>
        <form v-on:submit.prevent="buscarEmpleado()">
            <label>Seleccione un empleado</label>
            <select v-model="idEmpleado" class="form-control" style="width: 300px">
                <option v-for="emp in empleados" :key="emp"
                :value="emp.idEmpleado">{{emp.apellido}}</option>
            </select>
            <button class="btn btn-info">Detalles</button>
        </form>
        <br />
        <div v-if="empleado">
            <h2> {{empleado.apellido}}</h2>
            <dl>
                <dt>Oficio</dt>
                <dd>{{empleado.oficio}}</dd>
                <dt>Salario</dt>
                <dd>{{empleado.salario}}</dd>
                <dt>Departamento</dt>
                <dd>{{empleado.departamento}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Global from './../Global';
    export default {
        name: "EmpleadosDetalle",
        data(){
            return{
                empleados: [],
                empleado: null,
                idEmpleado: 0
            }
        },
        methods: {
            buscarEmpleado(){
                var request = "api/empleados/" + this.idEmpleado;
                var url = Global.urlApiEmpleados + request;

                axios.get(url).then(response =>{
                    this.empleado = response.data;
                })
            }
        },
        mounted() {
            var request = "api/empleados";
            var url = Global.urlApiEmpleados + request;
            axios.get(url).then(response => {
                this.empleados = response.data;
            })
        }
    }
</script>