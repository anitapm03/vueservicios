import axios from 'axios';
import Global from './../Global';

export default class ServiceCoches {

    getMetodoParametros(param1) {
        //dentro del metodo devolvemos la promesa
        return new Promise(function(resolve){
            resolve ("ok "+ param1)
        })
    }

    getCoches(){
        return new Promise(function(resolve){
            var request = "/webresources/coches";
            var url = Global.urlApi + request;
            var coches = [];
            axios.get(url).then(response => {
                coches = response.data;
                resolve(coches);
            })
        })
    } 

    // getCoches() {
        
    //     var request = "/webresources/coches";
    //     var url = Global.urlApi + request;
    //     var coches = [];

    //     axios.get(url).then(response => {
    //         coches = response.data;
    //         //console.log(coches)
    //     })

    //     return coches;
    // }
}