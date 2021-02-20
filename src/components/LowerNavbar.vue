<template>
<nav class="navbar navbar-expand-lg">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto">
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
  </div>
</nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.navbar{
    background-color: #404447;
    font-size:21px;
    font-family: "monospace", "Verdana";
}

.navbar a, .navbar li{
    color: white;
}

.navbar-nav li{
    margin-right: 100px;
}

.active{
    border-bottom: 1px solid white;
}
</style>