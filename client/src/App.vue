<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-btn" to="/"><div>Home</div></router-link>
      <router-link class="nav-btn" to="/select-character"><div>Battle</div></router-link>
      <!-- <router-link class="nav-btn" to="/character-edit"><div>Character Manager</div></router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
html {
  color: white;
  background: url("https://images2.alphacoders.com/589/thumb-1920-589553.png") no-repeat center center fixed ;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

* {
  font-family: 'Quicksand', sans-serif;
}

</style>

<style scoped>

#nav {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
}

#nav a:hover {
  background: #f50404;
}

.nav-btn {
  width: 200px;
  height: 50px;
  text-decoration: none;
  border: 1px solid white;
  text-align: center;
  margin: 0 5px;
}

.nav-btn div {
  display: inline-block;
  text-decoration: none;
  color: white;
  margin-top: 15px;
}

</style>
