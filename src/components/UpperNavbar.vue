<template>
<nav class="navbar navbar-expand-lg">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item logo">
          <router-link to="/" class="nav-link">
            <img src="../assets/logo.png" height="52" width="192"/>
          </router-link>
      </li>
    </ul>

    <ul id="centerItems" class="navbar-nav mx-auto">
        <li :class="[$route.path == '/' ? 'nav-item active' : 'nav-item']">
            <router-link to="/" class="nav-link">
              <i class="fas fa-store-alt"></i> MARKETPLACE
            </router-link>
        </li>
        <li :class="[$route.path == '/problem_status' ? 'nav-item active' : 'nav-item']">
            <router-link to="/problem_status" class="nav-link">
              <i class="far fa-list-alt"></i> PROBLEM STATUS
            </router-link>
        </li>
        <li :class="[$route.path == '/faq' ? 'nav-item active' : 'nav-item']">
            <router-link to="/faq" class="nav-link">
              <i class="fas fa-question-circle"></i> FAQ
            </router-link>
        </li>
        <li :class="[$route.path == '/contact' ? 'nav-item active' : 'nav-item']">
            <router-link to="/contact" class="nav-link">
              <i class="far fa-address-card"></i> CONTACT
            </router-link>
        </li>
    </ul>

    <ul class="navbar-nav ml-auto">
        <li v-if="!currentUser"
            :class="[$route.path == '/login' ? 'nav-item active' : 'nav-item']">
            <router-link to="/login" class="nav-link"> Login</router-link>
        </li>
         <li v-if="!currentUser" 
            :class="[$route.path == '/register' ? 'nav-item active' : 'nav-item']">
            <router-link to="/register" class="nav-link"> Register</router-link>
        </li>

        <li v-if="currentUser"
            :class="[$route.path == ('/profile/' + currentUser._id) ? 'nav-item active' : 'nav-item']">
            <router-link :to="{name: 'Profile', params: {user_id: currentUser._id}}" class="nav-link">
              <i class="far fa-user"></i> {{currentUser.username}}
            </router-link>
        </li>
         <li v-if="currentUser" class="nav-item">
            <a @click="logout" href="" class="nav-link"><i class="fas fa-sign-out-alt"></i> logout</a>
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
    font-family: "Verdana", "Monospace";
}

.navbar a, .navbar li{
    color: white;
}

#centerItems li{
    font-size: 16px;
    margin-right: 80px;
}

i {
  font-size: 20px;
  vertical-align: middle !important;
  margin-right: 1px;
}

.active{
    border-bottom: 1px solid white;
}

.logo{
    font-size:24px;
}
</style>