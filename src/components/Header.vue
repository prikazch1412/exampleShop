<template>
    <header class="header">
        <router-link :to="'/'">
            <button>Головна</button>
        </router-link>
        <router-link :to="'/catalog'">
            <button>Каталог</button>
        </router-link>
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <button>Корзина</button>
        </router-link>
        </header>    
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters([
            'CART'
        ])
    },
}
</script>
<style scoped>

</style>