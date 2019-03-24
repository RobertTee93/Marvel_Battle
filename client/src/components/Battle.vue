<template lang="html">
  <div class="">
    <img id="player" :src="character.img" alt="">
    <p v-if="!gameOver">Health: {{ character.health }}</p>

    <img id="enemy" v-if="enemyCharacter" :src="enemyCharacter.img" alt="">
    <p v-if="enemyCharacter && !gameOver">Enemy health: {{ enemyCharacter.health }}</p>

    <div id="attack-message">
      <p >{{ attackMessage }}</p>

      <p>{{ character.moves[0] }}</p>

      <p id="game-over" v-if="gameOver">Game over {{ winner.name }} Wins!</p>
    </div>


    <div id="attack-btn" v-if="!enemyAttacking && !gameOver" v-on:click="randomAttack(character)">
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
      enemyAttacking: false,
      currentMove: null,
      currentDamage: null,
      gameOver: false,
      winner: null
    }
  },
  methods: {
    getCharacters(){
      fetch("http://localhost:3000/api/characters/")
  		.then(res => res.json())
  		.then(data => this.characters = data)
      .then(() => {
        this.getRandomEnemy()
        this.selectMove(this.character)
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
    randomAttack(attacker){
      this.selectMove(attacker)
      this.enemyCharacter.health -= this.currentDamage
      this.attackMessage = `${this.character.name} has used ${this.currentMove} for ${this.currentDamage} Damage`
      this.healthCheck()

    },
    selectMove(attacker){
      var keys = Object.keys(attacker.moves)
      this.currentMove = keys[this.randomNumberGen(keys.length)];
      this.currentDamage = attacker.moves[this.currentMove]
    },
    healthCheck(){
      if (this.character.health <= 0){
        this.gameOver = true
        this.winner = this.character
      } else if (this.enemyCharacter.health <= 0){
        this.gameOver = true
        this.winner = this.enemyCharacter
      }
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
