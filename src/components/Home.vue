<template>
    <div class="mtop">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur excepturi laboriosam praesentium quos recusandae sequi ut voluptates voluptatum? Aliquid aut commodi consequatur corporis cumque, dicta distinctio eligendi, expedita fuga ipsa nam nulla obcaecati odit praesentium, quaerat tempora velit! Assumenda at facere iusto nesciunt obcaecati possimus quo rerum velit voluptates?</p>
        <b-button variant="success" class="mr-2"><router-link class="btn__user" :to="{name:'page-user'}">users</router-link></b-button>

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
.mtop {
    margin-top: 70px;
}
p {
    color: #0b0e10;
    font-size: 21px;
    margin: 30px;
}

.btn__user{
    padding: 13px 10px;
    color: #ffffff;
    transition: .3s all;
    text-decoration: none;
}
.btn__user:hover {
    color: #ffffff;
    text-decoration: none;
}

</style>