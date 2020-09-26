<template>
    <div class="cart">
        <router-link :to="'/catalog'">
            <div class="link_to_cart">назад</div>
        </router-link>
        <div class="link_to_cart">Зараз в корзині: {{CART.length}}</div>
        <h1>Корзина</h1>
            <cart-item 
            v-for="(item, index) in cart_data" 
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            />    
    </div>    
</template>
<script>
import CartItem  from "./CartItem.vue";
import {mapActions, mapGetters} from 'vuex'

export default {
    components:{
        CartItem
    },
    data(){
        return{

        }
    },
    props: {
        cart_data: {
            type: Array,
            default(){
                return []
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index);
        }
    },
    computed:{
        ...mapGetters([
            'CART'
        ])
    },
}
</script>