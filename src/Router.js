import { createRouter, createWebHistory } from 'vue-router'
import CochesComponent from './components/CochesComponent.vue';
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import HelloWorld from './components/HelloWorld.vue'
import EmpleadosOficios from './components/EmpleadosOficios.vue';
import CochesServ from './components/CochesServ.vue';
import EmpleadosServ from './components/EmpleadosServ.vue';

const myRoutes = [
    {
        path: "/", component: HelloWorld
    },
    {
        path: "/coches", component: CochesComponent
    },
    {
        path: "/empleados", component: EmpleadosDetalle
    },
    {
        path: "/oficios/:oficio", component: EmpleadosOficios
    },
    {
        path: "/cochesservice", component: CochesServ
    },
    {
        path: "/empleadosservice", component: EmpleadosServ
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;