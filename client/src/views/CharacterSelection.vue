<template lang="html">
  <div>
    <h1>Select a Character</h1>
    <character-select :characters="characters"></character-select>
  </div>

</template>

<script>
import CharacterSelect from "../components/CharacterSelect.vue"
export default {
  name: "CharacterSelectionScreen",
  data(){
    return {
      characters: null
    }
  },
  components: {
    CharacterSelect
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
