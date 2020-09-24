<template>
    <div class="catalog">
        <h1>Це каталог</h1>
        <div class="catalog__list">
            <catalog-item 
            v-for="product in this.$store.state.products" 
            :key="product.article"
            :product_data="product"
            @sendDataArticle="showChild"
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
            'PRODUCTS'
        ])
    },
    methods:{
        showChild(data){
            console.log(data);
        },
        ...mapActions([
            'GET_PRODUCTS_FROM_API'
        ])
    },
    mounted(){
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style lang="scss">

.catalog{
        &__list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: 2vw;
    }
}

</style>