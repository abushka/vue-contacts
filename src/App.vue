<template>
  <div id="app">
      <div class="mar-top">
          <b-navbar toggleable="lg" type="dark" variant="dark">
              <b-navbar-brand :to="{name:'page-home'}">Home</b-navbar-brand>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                      <b-navbar-brand :to="{name:'page-user'}">Users</b-navbar-brand>
                  </b-navbar-nav>
                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">
                      <b-nav-item-dropdown right class="ml-3">
                          <!-- Using 'button-content' slot -->
                          <template #button-content>
                              <em>Abushka</em>
                              <b-avatar class="ml-2" src="https://placekitten.com/300/300"></b-avatar>
                          </template>
                          <b-dropdown-item href="#">Profile</b-dropdown-item>
                          <b-dropdown-item href="http://t.me/YaJ75" target="_blank" active>My Telegram 👨‍💻</b-dropdown-item>
                          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                      </b-nav-item-dropdown>
                  </b-navbar-nav>
              </b-collapse>
          </b-navbar>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App',
  components: {
  },
  methods: {
    setDataToLocalStorage () {
      localStorage.setItem('data', JSON.stringify(this.list))
    }
  },
  computed: {
    list () {
      return this.$store.getters.getList
    },
  },
  mounted () {
    window.addEventListener('beforeunload', this.setDataToLocalStorage)
  },
  beforeDestroy () {
    window.removeEventListener('beforeunload', this.setDataToLocalStorage)
  },
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mar-top {
    position: fixed;
    top: 0;
    width: 100%;
}
</style>
