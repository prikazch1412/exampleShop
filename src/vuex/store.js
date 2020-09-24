import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: []
    },
    mutations:{
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        }
    },
    actions:{
        async GET_PRODUCTS_FROM_API({commit}){
            try {
                const products = await axios('http://localhost:3000/products', {
                    method: "GET"
                });
                commit('SET_PRODUCTS_TO_STATE', products.data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        }
    }
})

export default store;