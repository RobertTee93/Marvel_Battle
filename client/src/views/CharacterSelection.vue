<template lang="html">
  <div>
    <h1>Select a Character</h1>
    <character-select-battle :characters="characters"></character-select-battle>
  </div>

</template>

<script>
import CharacterSelectBattle from "../components/CharacterSelectBattle.vue"
export default {
  name: "CharacterSelectionScreen",
  data(){
    return {
      characters: null
    }
  },
  components: {
    CharacterSelectBattle
  },
  mounted(){
		fetch("http://localhost:3000/characters/")
		.then(res => res.json())
		.then(data => this.characters = data)
	}
}
</script>

<style lang="css" scoped>

h1 {
  text-align: center;
}

</style>
