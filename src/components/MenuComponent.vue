<template>
    <div>

        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">Home</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link to="/coches" class="nav-link active">Coches</router-link>
                    </li>

                    <li class="nav-item">
                    <router-link to="/empleados" class="nav-link active">Empleados</router-link>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                            Oficios
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="oficio in oficios" :key="oficio">

                                <router-link :to="'/oficios/'+oficio" class="dropdown-item">
                                {{oficio}}</router-link>

                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                    <router-link to="/cochesservice" class="nav-link active">Coches con servicio</router-link>
                    </li>

                    <li class="nav-item">
                    <router-link to="/empleadosservice" class="nav-link active">Empleados con servicio</router-link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </div>
</template>

<script>
//import axios from 'axios'
//import Global from './../Global'
import ServiceEmpleados from './../services/ServiceEmpleados';
const service = new ServiceEmpleados()

    export default {
        name: "MenuComponent",
        data() {
            return {
                oficios:[]
            }
        },
        mounted() {

            service.getOficios().then(result =>{
                this.oficios = result
            })
            // var request = "api/empleados/oficios";
            // var url = Global.urlApiEmpleados + request;

            // axios.get(url).then(response => {
            //     this.oficios = response.data;
            //     console.log(this.oficios)
            // })
        }
    }
</script>

<style>
    
</style>