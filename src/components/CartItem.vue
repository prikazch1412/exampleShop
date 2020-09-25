<template>
    <div class="cart-item">
        <img :src=" require('../assets/images/' + cart_item_data.image)" alt="img">
        <div class="cart-item__info">    
            <p>Назва: {{cart_item_data.name}}</p>
            <p>Ціна: {{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="cart-item__quantity">
            <button @click="deleteFromCart">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
       cart_item_data: {
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
        deleteFromCart(){
            this.$emit('deleteFromCart');
        }
    },
    mounted(){
        this.$set(this.cart_item_data, 'quantity', 1);
    }
}
</script>

<style lang="scss">
    .cart-item{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        img{
        width: 100px;
        height: 100px; 
    }
        .quantity__btn {
        cursor: pointer;
        }
        .quantity__tools {
        user-select: none;
        }
    }
</style>