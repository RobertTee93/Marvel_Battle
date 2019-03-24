<template lang="html">
  <div class="">
    <img id="player" :src="character.img" alt="">
    <p>Health: {{ character.health }}</p>

    <img id="enemy" v-if="enemyCharacter" :src="enemyCharacter.img" alt="">
    <p v-if="enemyCharacter">Enemy health: {{ enemyCharacter.health }}</p>

    <div id="attack-message">
      <p >{{ attackMessage }}</p>
    </div>


    <div id="attack-btn" v-if="!enemyAttacking" v-on:click="randomAttack">
      <p>Attack</p>
      <!-- <p v-for="(attack, key) of character.moves">{{ key }}</p> -->
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js"
export default {
  name: "Battle",
  props: ["character"],
  data(){
    return {
      characters: null,
      enemyCharacter: null,
      attackMessage: "Hello",
      enemyAttacking: false
    }
  },
  methods: {
    getCharacters(){
      fetch("http://localhost:3000/api/characters/")
  		.then(res => res.json())
  		.then(data => this.characters = data)
      .then(() => {
        this.getRandomEnemy()
      })
    },
    randomNumberGen(maxNumber){
      return Math.floor(Math.random() * maxNumber);
    },
    getRandomEnemy(){
      while (!this.enemyCharacter){
        let enemy = this.characters[this.randomNumberGen(this.characters.length)]
        if (enemy.name === this.character.name){
          enemy = this.characters[this.randomNumberGen(this.characters.length)]
        } else if (enemy !== this.character){
          this.enemyCharacter = enemy
        }
      }
    },
    randomAttack(){
    },
    selectMove(attacker){
      let move = attacker.moves[this.randomNumberGen(attacker.moves.length)]
    }
  },
  mounted(){
    this.getCharacters()
  }
}
</script>

<style lang="css" scoped>


#player {
  width: 250px;
  height: 330px;
  position:absolute;
  left: 50px;
  top: 100px;
}

#enemy {
  width: 250px;
  height: 330px;
  position:absolute;
  right: 50px;
  top: 100px;
}

#attack-btn {
  position: absolute;
  width: 200px;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  bottom: 20px;
  border: 2px solid white;

}

</style>
