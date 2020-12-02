<template>
    <div>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur excepturi laboriosam praesentium quos recusandae sequi ut voluptates voluptatum? Aliquid aut commodi consequatur corporis cumque, dicta distinctio eligendi, expedita fuga ipsa nam nulla obcaecati odit praesentium, quaerat tempora velit! Assumenda at facere iusto nesciunt obcaecati possimus quo rerum velit voluptates?</p>
        <router-link class="btn__user" :to="{name:'page-user'}">users</router-link>
    </div>
</template>


<script>
export default{
    name: 'page-home',
    components: {
    },
    methods: {
    },
    computed: {
    }
}

</script>


<style>
div {
    margin-top: 50px;
}

p {
    color: #0b0e10;
    font-size: 21px;
    margin: 30px;
}

.btn__user{
    display: block;
    width: 80px;
    padding: 13px 10px;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 18px;
    color: #000;
    background: rgb(96, 210, 30);
    border-radius: 11px;
    border: none;
    transition: .3s all;
    text-decoration: none;
}

</style>