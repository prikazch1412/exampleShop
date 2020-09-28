import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations:{
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if(!state.cart.find(item => item.article == product.article)) {
                
            // }
            // if(state.cart.indexOf(product)==-1){
                state.cart.push(product);
            }
            else{
                alert("Вже додано до корзини")
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1);
        },
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
        },
        ADD_TO_CART({commit}, product){
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index){
            commit('REMOVE_FROM_CART', index);
        },
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        },
        CART(state){
            return state.cart;
        }
    }
})

export default store;