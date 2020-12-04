<template>
	<div class="block mtop">
		<div class="block__wrap">
            <b-form-input class="block__inp" type="text" placeholder="name" v-model="name"></b-form-input>
			<b-form-input class="block__inp" type="text" placeholder="surname" v-model="surname"></b-form-input>
            <b-form-input class="block__inp" type="text" placeholder="address" v-model="address"></b-form-input>
			<b-form-input class="block__inp" type="tel" placeholder="phone" v-model="phone"></b-form-input>
            <b-form-input class="block__inp" type="tel" placeholder="sparePhone" v-model="sparePhone"></b-form-input>
			<b-form-input class="block__inp" type="email" placeholder="email" v-model="email"></b-form-input>
            <b-form-input class="block__inp" type="email" placeholder="spareEmail" v-model="spareEmail"></b-form-input>
		</div>
		<p v-if='error' class="color_red">name and phone fields are required</p>

        <b-button variant="success" class="mt-5 mr-1"><router-link class="btn_back" :to="{name:'page-user', query:{item}}">Go Back</router-link></b-button>
		<b-button v-if="!item" variant="success" class="mt-5" @click="addUser({name, surname, address, phone, sparePhone, email, spareEmail})">Save</b-button>
		<b-button v-if="item" variant="success" class="mt-5" @click="edit({name, surname, address, phone, sparePhone, email, spareEmail, item})">Edit</b-button>

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
.mtop {
    margin-top: 70px;
}
.block__inp::placeholder{
    color: #333;
    font-size: 18px;
}

.block__wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.block__inp{
    width: 400px;
    height: 35px;
    font-size: 21px;
    padding-left: 30px;
    margin-top: 30px;
}

.color_red{
	color: red;
}

.btn_back {
    color: #ffffff;
    text-decoration: none;
}

input::-webkit-input-placeholder {
    opacity: 0.6;
}
</style>
