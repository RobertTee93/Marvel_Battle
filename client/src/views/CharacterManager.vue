<template lang="html">
  <div>
    <div id="character-container">
      <div class="character" v-for="character of this.characters">
        <p>{{ character.name  }}</p>
        <button v-on:click="deleteCharacter(character._id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterManager",
  data(){
    return {
      characters: null
    }
  },
  mounted(){
    fetch("http://localhost:3000/api/characters/")
    .then(res => res.json())
    .then(data => this.characters = data)
  }
}
</script>

<style lang="css" scoped>
</style>
