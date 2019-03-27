<template lang="html">
  <div id="character-container">
    <h2>{{ character.name }}</h2>
    <img :src="require('../assets/characters/' + this.character.img)" alt="">
    <h3>Health: {{ character.health }}</h3>
    <h3>Archetype: {{character.archetype}}</h3>
    <h3>Moves</h3>
    <li v-for="(damage, key) of character.moves">{{key}}: {{damage}}</li>
  </div>
</template>

<script>
export default {
  name: "CharacterInfo",
  props: ["character"]
}
</script>

<style lang="css" scoped>

#character-container{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: auto;
  border-radius: 50px;
  border: red 1px solid;
  box-shadow: 1px 0px 20px 20px black;
  background-color: #040d11de;
  padding: 20px;
}

h3 {
  margin: 0;
}

img {
  height: 400px;
  width: 250px;
}

</style>
