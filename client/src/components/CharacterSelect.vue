<template lang="html">
  <div id="character-select-grid">
    <div v-for="character of characters" class="character-select-icon">
      <router-link :to="{ name: 'battle-screen', params: {character: character} }">
      <img :src="character.icon" alt="img unavailable">
      </router-link>
    </div>

  </div>

</template>

<script>
export default {
  name: "CharacterSelect",
  props: ["characters"],
  methods: {
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
}

.character-select-icon img {
  width: 80px;
  height: 80px;
}

</style>
