<template lang="html">
  <div class="">

    <h1>Character Info</h1>
    <characters></characters>


  </div>
</template>

<script>
import Characters from "../components/Characters.vue"
export default {
  name: "CharacterInfo",
  components: {
    Characters
  }
}
</script>

<style lang="css" scoped>

h1 {
  text-align: center;
}

</style>
