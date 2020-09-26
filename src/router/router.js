import Vue from 'vue'
import Router from 'vue-router'

import Catalog  from "../components/Catalog.vue";
import Cart from "../components/Cart.vue";
import MainWrapper  from "../components/MainWrapper.vue";

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainWrapper
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: Catalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
            props: true
        }
    ]
})

export default router;