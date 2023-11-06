<template>
  <div class="hello">
    
    <h1>HOME VUE SERVICIOS</h1>
    <br/>
    <h3 style="color: blue">{{mensaje}}</h3>
  </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo';

//para usar un servicio creamos una constante que sea obj de la clase Service
const service = new ServiceEjemplo();

export default {
  name: 'HelloWorld',
  data(){
    return{
      mensaje: ""
    }
  },
  mounted() {
    this.mensaje = service.getSaludo("Anita");
  }
}
</script>

