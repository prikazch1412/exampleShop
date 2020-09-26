<template>
    <div class="catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="link_to_cart">Cart: {{CART.length}}</div>
        </router-link>
        <h1>Це каталог</h1>
        <div class="catalog__list">
            <catalog-item 
            v-for="product in this.$store.state.products" 
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
            >
            </catalog-item>
        </div>
        
    </div>
</template>

<script>
import CatalogItem  from "./CatalogItem.vue";
import {mapActions, mapGetters} from 'vuex'

export default {
    components:{
        CatalogItem
    },
    data(){
        return{}
    },
    computed:{
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ])
    },
    methods:{
        addToCart(data){
            this.ADD_TO_CART(data);
           // alert("Товар "+ data.name + " додано");
        },
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ])
    },
    mounted(){
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style lang="scss">

.link_to_cart{
        position: relative;
        margin-top: 30px;
        padding: 3px;
        width: auto;
        right: 10px;
        border: solid 1px black;
}

</style>