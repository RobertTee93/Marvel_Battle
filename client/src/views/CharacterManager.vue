<template lang="html">
  <div>
    <div id="character-container" v-if="!newCharacter">
      <div class="character" v-for="character of this.characters">
        <p>{{ character.name  }}</p>
        <button v-on:click="deleteCharacter(character._id)">Delete</button>
      </div>
    </div>
    <button v-on:click="addCharacter()" v-if="!newCharacter">Add Character</button>
    <NewCharacterForm v-if="newCharacter"></NewCharacterForm>
  </div>
</template>

<script>
import { eventBus } from "../main.js"
import NewCharacterForm from "../components/NewCharacterForm.vue"
export default {
  name: "CharacterManager",
  data(){
    return {
      characters: null,
      newCharacter: false
    }
  },
  mounted(){
    fetch("http://localhost:3000/characters/")
    .then(res => res.json())
    .then(data => this.characters = data)

    eventBus.$on("character-added", (character) => {
      this.characters.push(character)
      this.newCharacter = false
    })
  },
  methods: {
    deleteCharacter(id){
      fetch("http://localhost:3000/characters/" + id, {
        method: "DELETE"
      })
      .then(() => {
        const index = this.characters.findIndex((character) => {
          return character._id === id
        })
        this.characters.splice(index, 1)
      })
    },
    addCharacter(){
      this.newCharacter = true
    }
  },
  components: {
    NewCharacterForm
  }
}
</script>

<style lang="css" scoped>

#character-container {
  text-align: center;
}

div {
  text-align: center;
}

</style>
