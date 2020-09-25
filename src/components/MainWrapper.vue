<template>
    <section class="main-wrapper">
        <h1>{{title}}</h1>
        <router-view></router-view>

    </section> 
</template>

<script>

export default {

    props: {},
    data(){
        return{
            title: 'Головна'
        }
    },

   
}
</script>

<style lang="css" scoped>

</style>