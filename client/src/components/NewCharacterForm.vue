<template lang="html">
  <div id="form-container">
    <form v-on:submit="addCharacter">

      <div class="form-item">
        <label for="adminPassword">Admin Password:</label>
        <input type="text" id="adminPassword" v-model="adminPassword" placeholder="Enter password to add character!" required>
      </div>

      <div class="form-item">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" placeholder="Enter Name:" required>
      </div>

      <div class="form-item">
        <label for="health">Health:</label>
        <input type="number" id="health" v-model="health" placeholder="1000" required>
      </div>

      <div class="form-item">
        <label for="moveOneName">Move 1: </label>
        <input type="text" id="moveOneName" v-model="moveOneName" placeholder="Enter First Move Name" required>
      </div>

      <div class="form-item">
        <label for="moveOnePower">Move 1 Power: </label>
        <input type="number" v-model="moveOnePower">
      </div>

      <div class="form-item">
        <label for="moveTwoName">Move 2: </label>
        <input type="text" id="moveTwoName" v-model="moveTwoName" placeholder="Enter First Move Name" required>
      </div>

      <div class="form-item">
        <label for="moveTwoPower">Move 2 Power: </label>
        <input type="number" v-model="moveTwoPower">
      </div>

      <div class="form-item">
        <label for="moveThreeName">Move 3: </label>
        <input type="text" id="moveThreeName" v-model="moveThreeName" placeholder="Enter First Move Name" required>
      </div>

      <div class="form-item">
        <label for="moveThreePower">Move 3 Power: </label>
        <input type="number" v-model="moveThreePower">
      </div>

      <div class="form-item">
        <label for="moveFourName">Move 4: </label>
        <input type="text" id="moveFourName" v-model="moveFourName" placeholder="Enter First Move Name" required>
      </div>

      <div class="form-item">
        <label for="moveFourPower">Move 4 Power: </label>
        <input type="number" v-model="moveFourPower">
      </div>

      <div class="form-item">
        <label for="img">Image Url:</label>
        <input type="text" id="img" v-model="img" placeholder="Enter Name Url..." required>
      </div>

      <div class="form-item">
        <label for="icon">Icon:</label>
        <input type="text" id="icon" v-model="icon" placeholder="Enter Name:" required>
      </div>

      <div class="form-item">
        <label for="archetype">Archetype</label>
        <input type="text" id="archetype" v-model="archetype" placeholder="Hero or Villain?" required>
      </div>

      <div class="form-item">
        <input type="submit">
      </div>

    </form>
  </div>
</template>

<script>
import { eventBus } from "../main.js"
export default {
  name: "NewCharacterForm",
  data(){
    return {
      adminPassword: "",
      name: "",
      health: 0,
      moveOneName: "Punch",
      moveOnePower: 0,
      moveTwoName: "Kick",
      moveTwoPower: 0,
      moveThreeName: "",
      moveThreePower: 0,
      moveFourName: "",
      moveFourPower: 0,
      allMoves: {},
      img: "",
      icon: "",
      archetype: ""
    }
  },
  methods: {
    addCharacter(e){
      e.preventDefault()

      if (this.adminPassword == "marvel0307"){
        const moves = {}
          moves[this.moveOneName] = this.moveOnePower,
          moves[this.moveTwoName] = this.moveTwoPower,
          moves[this.moveThreeName] = this.moveThreePower,
          moves[this.moveFourName] = this.moveFourPower

          this.allMoves = moves

        if (this.name === "" || this.health === "") return;
        const character = {
          name: this.name,
          health: this.health,
          moves: this.allMoves,
          img: this.img,
          icon: this.icon,
          archetype: this.archetype
        }

        fetch("http://localhost:3000/characters", {
          method: "POST",
          body: JSON.stringify(character),
          headers: { "Content-Type": "application/json" }
        })
        .then(result => result.json())
        .then(result => eventBus.$emit("character-added", result))
        this.name = ""
        this.health = 0
        this.moveOneName = "Punch"
        this.moveOnePower = 0
        this.moveTwoName = "Kick"
        this.moveTwoPower = 0
        this.moveThreeName = ""
        this.moveThreePower = 0
        this.moveFourName = ""
        this.moveFourPower = 0
        this.img = ""
        this.icon = ""
        this.archetype = ""
      }
    }
  }
}
</script>

<style lang="css" scoped>

#form-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.form-item label {
  display: block;
}

</style>
