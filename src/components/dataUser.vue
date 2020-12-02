<template>
    <div class="block">
        <div class="block__wrap">
            <router-link class="btn__add" :to="{name:'page-edit'}">Add user</router-link>
            <router-link class="btn__back" :to="{name:'page-home'}">Go home</router-link>
        </div>
        <div class="search">
            <p class="search-para">Search</p>
            <input type="search" class="search-input" v-model="search" placeholder="search name" />
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
                        <button class="btn__delete" @click="deteleUser(item.id)">delete</button>
                        <router-link class="btn__edit" :to="{name:'page-edit', query:{item}}">edit</router-link>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
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
}
.search {
    margin: 20px auto;
}
.search-input {
    margin: 5px;
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
    width: 80px;
    padding: 13px 10px;
    margin: 0 auto;
    margin-top: 40px;
    font-size: 18px;
    color: #000000;
    background: rgb(96, 210, 30);
    border-radius: 11px;
    border: none;
    transition: .3s all;
    text-decoration: none;
}
.btn__back:hover {
    background: rgb(66, 146, 19);
    color: #ffffff;
}
 th, td{
    border: 1px solid black;
    padding: 12px;
    min-width: 10%;

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
.btn__delete{
    min-width: 70px;
    max-width: 90px;
    border: none;
    background: rgb(255, 1, 1);
    border-radius: 11px;
    color: #fff;
    padding: 3px 19px;
    margin: 0 auto;
    transition: .2s ease;
}
.btn__delete:hover{
    background: rgb(146, 24, 24);
}
.btn__edit{
    min-width: 50px;
    max-width: 60px;
    border: none;
    background: rgb(19, 211, 19);
    border-radius: 11px;
    color: #fff;
    padding: 3px 19px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    transition: .2s ease-in;
}
.btn__edit:hover{
    background: rgb(29, 145, 5);
}
.btn__add{
    padding: 20px 85px;
    background: rgb(7, 234, 1);
    color: #444;
    margin-top: 50px;
    border-radius: 11px;
    font-size: 25px;
    transition: .3s ease;
}
.btn__add:hover{
    background: rgb(29, 145, 5);
    color: #fff;
}
a{
    text-decoration: none;
}
</style>
