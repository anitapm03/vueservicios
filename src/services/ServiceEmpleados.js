import axios from 'axios';
import Global from './../Global';

export default class ServiceCoches {

    getEmpleados(){
        return new Promise(function(resolve){
            var request = "api/empleados";
            var url = Global.urlApiEmpleados + request;
            var empleados= [];
            axios.get(url).then(response => {
                empleados = response.data;
                resolve(empleados)
            })
        })
        
    }

    findEmpleado(id){
        return new Promise(function(resolve){
            var request = "api/empleados/" + id;
            var url = Global.urlApiEmpleados + request;
            var empleado = null;

            axios.get(url).then(response =>{
                empleado = response.data;
                resolve(empleado);
            })
        })
    }

    getOficios(){

        return new Promise(function(resolve){
            var request = "api/empleados/oficios";
            var url = Global.urlApiEmpleados + request;
            var oficios = [];
            axios.get(url).then(response => {
                oficios = response.data;
                resolve(oficios)
            })
        })

    }

    getEmpleadosOficio(oficio){

        return new Promise(function(resolve){
            var request = "api/empleados/empleadosoficio/" + oficio;
                var url = Global.urlApiEmpleados + request;
                var empleados = [];
                axios.get(url).then(response => {
                    empleados = response.data;
                    resolve(empleados);
                })
        })
                
    }

}
