<template>
    <div>
        <h1>Coches</h1>

        <div v-for="car in coches" :key="car">
            <h2>{{car.marca}}, {{car.modelo}}</h2>
            <h3>Conductor: {{car.conductor}}</h3>
            <img :src="car.imagen" style="width: 150px; height:150px" />
            <hr/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Global from './../Global';
//si necesito variables declaradas para todos los metodos
//que tengamos en el component lo haremos aquí
//var urlApi = "https://apicochespaco.azurewebsites.net/";
    export default {
        name: "CochesComponent",
        data() {
            return {
                coches: []
            }
        },
        mounted(){
            var request = "/webresources/coches";
            //en las variables fuera del export default
            //no se utiliza el this
            var url = Global.urlApi + request;
            
            axios.get(url).then(response => {
                this.coches = response.data;
            })
        }
    }
    //https://apicochespaco.azurewebsites.net/
</script>