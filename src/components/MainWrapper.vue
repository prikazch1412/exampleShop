<template>
    <section class="main-section">
        <!-- <h1>{{title}}</h1> -->
        <p class="greet">Це лише односторінковий додаток, створений за відео-уроками.<br>
         На даний момент складається з кількох компонентів, деякі з них, навіть, відображені всередині іншого.<br>
         При створенні цього ДИВА ПРИРОДИ використано Vue.js, Vuex, Vue-Router, трохи HTML та JavaScript, а також CSS, хоча налаштовано SCSS, але поки що 
         в ньому жодної потреби
        </p>
        <div class="catalog__list">
            <catalog-item 
            v-for="product in this.$store.state.products.slice(0, 3)" 
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
            >
            </catalog-item>
        </div>
    </section> 
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import CatalogItem  from "./CatalogItem.vue";

export default {
    components:{
        CatalogItem
    },
    props: {},
    data(){
        return{
            title: 'Головна'
        }
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

<style lang="css" scoped>
.main-section {
    background:#fff;
    width:86%;
    height: 80%;
    border: 2px goldenrod solid;
    margin: 20px auto;
    padding: 15px;
    border-radius:10px;
    box-shadow: 5px 5px 15px grey;
}
</style>