<template>
    <div class="catalog-item">
        <img :src=" require('../assets/images/' + product_data.image)" alt="img">
        <p class="catalog-item__name">Назва: {{product_data.name}}</p>
        <p class="catalog-item__price">Ціна: {{product_data.price}}</p>
        <button @click="sendDataToParent">додати в корзину</button>

    </div>
</template>

<script>
export default {
    props: {
        product_data:{
            type: Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return{

        }
    },
    methods:{
        sendDataToParent(){
           this.$emit('sendDataArticle', this.product_data.article)  
        }
    }
}
</script>

<style lang="scss">
.catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    img{
        width: 100px;
        height: 100px; 
    }
  }
</style>