<template>
    <div class="catalog">
        <h1>Це каталог</h1>
        <div class="catalog__list">
            <catalog-item 
            v-for="product in products" 
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

export default {
    components:{
        CatalogItem
    },
    data(){
        return{
            products: [
                {
                image: "best.jpg",
                name: "Best",
                price: 2100.234234234,
                article: "T1",
                available: true,
                category: "Другое"
                },
                {
                image: "biggest.jpg",
                name: "Stadium",
                price: 3150.12312412,
                article: "T2",
                available: true,
                category: "Предметы"
                },
                {
                image: "clock.jpg",
                name: "Watch",
                price: 4200.51524,
                article: "T3",
                available: false,
                category: "Предметы"
                },
                {
                image: "dice.png",
                name: "Dice",
                price: 5300.1245512,
                article: "T4",
                available: true,
                category: "Предметы"
                },
                {
                image: "memory.png",
                name: "Memory",
                price: 6500.3522314,
                article: "T5",
                available: false,
                category: "Другое"
                },
                {
                image: "mp3.jpg",
                name: "MP3-player",
                price: 8700.4124123,
                article: "T6",
                available: true,
                category: "Предметы"
                },
                {
                image: "uploader.jpg",
                name: "Flash-player",
                price: 128.4556,
                article: "T7",
                available: true,
                category: "Другое"
                }
            ]
        }
    },
    methods:{
        showChild(data){
            console.log(data);
        }
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