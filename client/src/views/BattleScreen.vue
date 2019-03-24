<template lang="html">
  <div id="battle-container">
    <battle :character="character"></battle>
  </div>
</template>

<script>
import Battle from "../components/Battle.vue"
import { eventBus } from "../main.js"
export default {
  name: "BattleScreen",
  props: ["character"],
  components: {
    Battle
  }
}
</script>

<style lang="css" scoped>

#battle-container {
  margin: auto;
  background-color: #0a0a0ac7;
  width: 80%;
  height: 500px;
  margin-top: 40px;
  position: relative;
  border-radius: 50px;
}

</style>
