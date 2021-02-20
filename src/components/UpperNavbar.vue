<template>
<nav class="navbar navbar-expand-lg">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item logo">
          <a class="nav-link" href="#">StudentChain</a>
      </li>
    </ul>

    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
          Post a problem, pay with crypto
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
    font-family: "monospace", "Verdana";
}

.navbar a, .navbar li{
    color: white;
}

.logo{
    font-size:24px;
}
</style>