<template>
<nav class="navbar navbar-expand-lg">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#"> All</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"> Mathematics</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"> Programming</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"> Physics</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"> See more...</a>
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
    font-size:16px;
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