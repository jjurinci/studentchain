<template>
<nav class="navbar navbar-expand-lg">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item logo">
          <a class="nav-link" href="#">
            <img src="../assets/logo.png" height="52" width="192"/>
          </a>
      </li>
    </ul>

    <ul id="centerItems" class="navbar-nav mx-auto">
        <li :class="[$route.path == '/' ? 'nav-item active' : 'nav-item']">
            <router-link to="/" class="nav-link"> MARKETPLACE</router-link>
        </li>
        <li :class="[$route.path == '/problem_status' ? 'nav-item active' : 'nav-item']">
            <router-link to="/problem_status" class="nav-link"> PROBLEM STATUS</router-link>
        </li>
        <li :class="[$route.path == '/faq' ? 'nav-item active' : 'nav-item']">
            <router-link to="/faq" class="nav-link"> FAQ</router-link>
        </li>
        <li :class="[$route.path == '/contact' ? 'nav-item active' : 'nav-item']">
            <router-link to="/contact" class="nav-link"> CONTACT</router-link>
        </li>
    </ul>

    <ul class="navbar-nav ml-auto">
        <li v-if="!currentUser"
            :class="[$route.path == '/login' ? 'nav-item active' : 'nav-item']">
            <router-link to="/login" class="nav-link"> Login</router-link>
        </li>
         <li v-if="!currentUser" @click="changeTab('register')" 
            :class="[$route.path == '/register' ? 'nav-item active' : 'nav-item']">
            <router-link to="/register" class="nav-link"> Register</router-link>
        </li>

        <li v-if="currentUser" @click="changeTab('login')"
            :class="[$route.path == '/profile' ? 'nav-item active' : 'nav-item']">
            <router-link :to="{name: 'Profile', params: {user_id: currentUser.id}}" class="nav-link">
              {{currentUser.username}}
            </router-link>
        </li>
         <li v-if="currentUser" class="nav-item">
            <a @click="logout" href="" class="nav-link"> logout</a>
        </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    data(){
      return {
        activeTab : "marketplace",
        currentUser: null
      }
    },

    methods:{
      changeTab(){
        this.activeTab = this.$route.name;
      },

      logout(){
        localStorage.removeItem('user')
        this.$router.push({name: 'Login'})
      }
    },

    mounted(){
      this.currentUser = JSON.parse(localStorage.getItem('user'))
    },
}
</script>

<style lang="scss" scoped>
//Upper navbar color: #32373B
.navbar{
    background-color: #32373B;
    font-size:17px;
    font-family: "Monospace", "Verdana";
}

.navbar a, .navbar li{
    color: white;
}

#centerItems li{
    font-size: 19px;
    margin-right: 100px;
}

.active{
    border-bottom: 1px solid white;
}

.logo{
    font-size:24px;
}
</style>