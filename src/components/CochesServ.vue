<template>
    <div>
        <h1>Coches con servicio</h1>

        <div v-for="car in coches" :key="car">
            <h2>{{car.marca}}, {{car.modelo}}</h2>
            <h3>Conductor: {{car.conductor}}</h3>
            <img :src="car.imagen" style="width: 150px; height:150px" />
            <hr/>
        </div>
    </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

    export default {
        name: "CochesServ",
        data() {
            return {
                coches: []
            }
        },
        mounted(){
            //this.coches = service.getCoches();
            
            //la promesa es un obj
            service.getCoches().then(result => {
                this.coches = result;
            })

            service.getMetodoParametros("dato21").then(result => {
                console.log(result);
            })
        }
    }
    
</script>