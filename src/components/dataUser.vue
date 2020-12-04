<template>
    <div class="mb-0">
        <div class="block">
            <div class="block__wrap">
                <b-button variant="success" class="mr-2">
                    <router-link class="btn__back" :to="{name:'page-edit'}">Add user</router-link>
                </b-button>
                <b-button variant="success">
                    <router-link class="btn__back" :to="{name:'page-home'}">Go home</router-link>
                </b-button>
            </div>
            <div class="search">
                <p class="search-para">Search</p>
                <b-form-input type="search" class="search-input" v-model="search" placeholder="search name" />
                <p class="search-para">{{ search }}</p>
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>surname</th>
                        <th>address</th>
                        <th>phone</th>
                        <th>sparePhone</th>
                        <th>email</th>
                        <th>spareEmail</th>
                        <th>action</th>
                    </tr>
                    <tr v-for="item in searchHandler" :key="item.id">
                        <td>{{item.id + 1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.surname}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.phone}}</td>
                        <td>{{item.sparePhone}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.spareEmail}}</td>
                        <td>
                            <b-button variant="danger" @click="deteleUser(item.id)">delete</b-button>
                            <router-link variant="success" class="btn__edit" :to="{name:'page-edit', query:{item}}">edit</router-link>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'page-user',
    data() {
        return {
            search:'',
            data: []
        }
    },
    created() {
        this.data = this.$store.getters.getList
    },
    computed: {
      searchHandler() {
        return this.data.filter(elem => {
            return elem.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    },
    methods:{
        deteleUser(item){
            return this.$store.dispatch("deleteUser", item)
        },
    }
}
</script>

<style scoped>
.block{
    text-align: center;
    margin-top: 100px;
}
.search {
    margin: 20px auto;
}
.search-input {
    margin: 5px;
    width: 400px;
    height: 35px;
    margin: auto;
    padding: 5px 10px;
    color: #000000;
}
.search-para {
    color: #0b0e10;
    font-size: 21px;
    margin: 10px;
}
.btn__back{
    display: block;
    width: 100%;
    color: #ffffff;
    transition: .3s all;
    text-decoration: none;
}
 th, td{
    border: 1px solid black;
    padding: 12px;
    min-width: 10%;
}
 tr:nth-child(even) {
     background: #f1ffff
 }
 tr:nth-child(odd) {
    background: #fff7f7
 }


table {
    border-collapse: collapse;
    margin: 0 auto;
    margin-bottom: 50px;
    min-width: 95%;
}
.block__wrap{
    margin-top: 50px;
}

.btn__edit{
    min-width: 50px;
    max-width: 67px;
    border: none;
    background: rgb(19, 211, 19);
    border-radius: 3px;
    color: #fff;
    padding: 5px 18px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    transition: .2s ease-in;
}
.btn__edit:hover{
    background: rgb(29, 145, 5);
}

a{
    text-decoration: none;
}
</style>
