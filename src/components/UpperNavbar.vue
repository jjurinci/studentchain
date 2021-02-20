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
        <li class="nav-item active">
            <a class="nav-link" href="#"> MARKETPLACE</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"> PROBLEM STATUS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"> FAQ</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"> CONTACT</a>
        </li>
    </ul>

    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="#"> Login</a>
        </li>
         <li class="nav-item">
            <a class="nav-link" href="#"> Register</a>
        </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    
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