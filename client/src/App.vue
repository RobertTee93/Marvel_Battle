<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/select-character">Character Selection</router-link>
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

</style>
