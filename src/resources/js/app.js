import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ListComponent from "./components/ListComponent";
import store from './store';
import CreateComponent from "./components/CreateComponent";
import UpdateComponent from "./components/UpdateComponent";
import App from "./components/AppComponent";
import axios from 'axios';
import VueAxios from 'vue-axios';
import NotFoundComponent from "./components/NotFoundComponent";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = '/api';

const routes = [
    { path: '/', name: 'list', component: ListComponent },
    { path: '/create', name: 'create', component: CreateComponent },
    { path: '/update/:id', name: 'update', component: UpdateComponent, props: true },
    { path: '*', component: NotFoundComponent },
];

const router = new VueRouter({
    routes,
});

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
