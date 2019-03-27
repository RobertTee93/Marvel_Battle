<template lang="html">
  <div id="character-select-grid">
    <div v-for="character of characters" class="character-select-icon">
      <router-link :to="{ name: 'battle-screen', params: {character: character} }">
      <img :src="getIcon(character)" :alt="character.name">
      </router-link>
    </div>

  </div>

</template>

<script>
export default {
  name: "CharacterSelect",
  props: ["characters"],
  methods: {
    getIcon(character){
      return require("../assets/icons/" + character.icon)
    }
  }
}
</script>

<style lang="css" scoped>

#character-select-grid {
  display: flex;
  justify-content: center;
  margin: 0 300px;
  flex-wrap: wrap;
  margin-top: 50px;
}

.character-select-icon {
  width: 80px;
  height: 80px;
  border: white 2px solid;
  background-color: #404040cc;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(20px 20px 30px #222);
}

.character-select-icon:hover {
  background: #f50404;
}

.character-select-icon img {
  width: 80px;
  height: 80px;
}

</style>
