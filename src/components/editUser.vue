<template>
	<div class="block">
		<div class="block__wrap">
			<input class="block__inp" type="text" placeholder="name" v-model="name">
			<input class="block__inp" type="text" placeholder="surname" v-model="surname">
            <input class="block__inp" type="text" placeholder="address" v-model="address">
			<input class="block__inp" type="text" placeholder="phone" v-model="phone">
            <input class="block__inp" type="text" placeholder="sparePhone" v-model="sparePhone">
			<input class="block__inp" type="text" placeholder="email" v-model="email">
            <input class="block__inp" type="text" placeholder="spareEmail" v-model="spareEmail">
		</div>
		<p v-if='error' class="color_red">name and phone fields are required</p>

        <router-link class="btn__back" :to="{name:'page-user', query:{item}}">Go Back</router-link>
		<button v-if="!item" class="btn__save" @click="addUser({name, surname, address, phone, sparePhone, email, spareEmail})">Save</button>
		<button v-if="item" class="btn__save" @click="edit({name, surname, address, phone, sparePhone, email, spareEmail, item})">Edit</button>

	</div>
</template>

<script>
export default {
	name:'page-edit',
	data(){
		return{
			name:'',
			surname:'',
            address:'',
			phone:'',
            sparePhone:'',
			email:'',
            spareEmail:'',
			item: this.$route.query.item,
			error: false
		}
	},
	methods:{
		addUser({name, surname, address, phone, sparePhone, email, spareEmail}){
			if(name.length >0 && phone.length >0){
				this.$store.dispatch("addUser", {name, surname, address, phone, sparePhone, email, spareEmail})
				{
					this.name = ''
					this.surname =''
                    this.address = ''
					this.phone =''
                    this.sparePhone = ''
					this.email =''
                    this.spareEmail = ''
				}
				this.$router.push('/')
			}
			else{
				this.error = true
			}
		},
		editUser(){
			if(this.item){
				this.name = this.item.name
				this.surname = this.item.surname
                this.address = this.item.address
				this.phone = this.item.phone
                this.sparePhone = this.item.sparePhone
				this.email = this.item.email
                this.spareEmail = this.item.spareEmail
			}
		},
		edit({name, surname, address, phone, sparePhone, email, spareEmail, item}){
			if(name.length >0 && phone.length >0){
				this.$store.dispatch("edit", {name, surname, address, phone, sparePhone, email, spareEmail, item})
				this.$router.push('/')
			}
			else{
				this.error = true
			}
		},
		addUserParse(){
			let userJson = JSON.parse(this.jsonParese)
			this.$store.dispatch("addUserParse", userJson)
		}
	},
	mounted(){
		this.editUser()
	}
}
</script>

<style scoped>
.block__inp::placeholder{
    color: #333;
    font-size: 18px;
}

.block__wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mt{
	margin-top: 25px;
}

.block__inp{
    border: none;
    width: 400px;
    height: 35px;
    border-radius: 11px;
    background: #999;
    font-size: 21px;
    padding-left: 30px;
    margin-top: 30px;
}

.btn__save{
	padding: 10px 25px;
	font-size: 21px;
	background: rgb(96, 210, 30);
	border-radius: 11px;
	border: none;
	margin: 20px 15px;
	transition: .3s all;
}

.btn__back{
    width: 80px;
    padding: 13px 10px;
    margin: 20px 15px;
    font-size: 18px;
    color: #000;
    background: rgb(96, 210, 30);
    border-radius: 11px;
    border: none;
    transition: .3s all;
    text-decoration: none;
}

.btn__save:hover{
	background: rgb(74, 160, 16);
	color: rgb(241, 204, 204);
}

.btn__back:hover {
    background: rgb(74, 160, 16);
    color: rgb(241, 204, 204);
}

.color_red{
	color: red;
}
</style>
