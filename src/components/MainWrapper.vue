<template>
    <div class="main-wrapper">
        <catalog></catalog>
        <cart></cart>
    </div> 
</template>

<script>
import Catalog  from "./Catalog.vue";
import Cart from "./Cart.vue";
export default {
    components: {
        Catalog,
        Cart
    },
    props: {},
    data(){
        return{
            title: 'Головна'
        }
    },

    computed: {

    },

    methods: {

    }
}
</script>

<style>
.main-wrapper{
    padding: 70px;
}
</style>