import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import ListComponent from "./components/ListComponent";
import store from './store';
import CreateComponent from "./components/CreateComponent";
import UpdateComponent from "./components/UpdateComponent";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const routes = [
    { path: '/', component: ListComponent },
    { path: '/create', component: CreateComponent },
    { path: '/update', component: UpdateComponent },
];

const router = new VueRouter({
    routes,
});

const app = new Vue({
    // el: '#app',
    router,
    store,
}).$mount('#app');
