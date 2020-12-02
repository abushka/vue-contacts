import Vue from 'vue'
import Vuex from 'vuex'
import defaultList from '@/static/defaultList'

Vue.use(Vuex)

export default new Vuex.Store({
    state () {
        // const items = JSON.parse(localStorage.getItem('data'));
        // const list = items || defaultList;
        const list = defaultList;

        return {
            list
        }


    },
    getters:{
        getList(state){
            return state.list
        }
    },
    mutations:{
        deleteUser(state, id){
            let index = state.list.findIndex(el => el.id == id)
            state.list.splice(index,1)
        },
        addUser(state, {name, surname, address, phone, sparePhone, email, spareEmail}){
            let id = 0;
            if(state.list.length > 0){
              id = state.list[state.list.length - 1].id + 1
            }
            state.list.push(
                {
                    id: id,
                    name: name,
                    surname: surname,
                    address: address,
                    phone: phone,
                    sparePhone: sparePhone,
                    email: email,
                    spareEmail: spareEmail
                }
            )
        },
        edit(state, item){
            let id = item.item.id;
            let user = state.list.find(item => item.id == id )
                user.email = item.email
                user.spareEmail = item.spareEmail
                user.name = item.name
                user.surname = item.surname
                user.address = item.address
                user.phone = item.phone
                user.sparePhone = item.sparePhone
        },
        addUserParse(state, item){
            let id = 0;
            if(state.list.length > 0){
              id = state.list[state.list.length - 1].id + 1
            }
            state.list.push(
                {
                    id: id,
                    name: item.name,
                    surname: item.surname,
                    address: item.address,
                    phone: item.phone,
                    sparePhone: item.sparePhone,
                    email: item.email,
                    spareEmail: item.spareEmail
                }
            )
        }
    },
    actions:{
        deleteUser(ctx, id){
            ctx.commit('deleteUser',id)
        },
        addUser(ctx,{name, surname, address, phone, sparePhone, email, spareEmail}){
            ctx.commit('addUser',{name, surname, address, phone, sparePhone, email, spareEmail})
        },
        edit(ctx,item){
            ctx.commit('edit', item)
        },
        addUserParse(ctx,item){
            ctx.commit('addUserParse', item)
        }
    }
})

