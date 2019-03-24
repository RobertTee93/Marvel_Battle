<template lang="html">
  <div>
    <img id="player" :src="character.img" alt="">
    <p v-if="!gameOver">Health: {{ character.health }}</p>

    <img id="enemy" v-if="enemyCharacter" :src="enemyCharacter.img" alt="">
    <p v-if="enemyCharacter && !gameOver">Enemy health: {{ enemyCharacter.health }}</p>

    <div id="attack-message">
      <p >{{ attackMessage }}</p>

      <p id="game-over" v-if="gameOver">Game over {{ winner.name }} Wins!</p>
    </div>

    <div id="pokemon-one-health">
      <div :style="{width: this.character.health / this.healthBarModifier + '%' }"></div>
    </div>

    <div id="attack-btn" v-if="!enemyAttacking && !gameOver" v-on:click="randomAttack()">
      <p>Attack</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Battle",
  props: ["character"],
  data(){
    return {
      healthBarModifier: 1,
      characters: null,
      enemyCharacter: null,
      enemyHealthBarModifier: 1,
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
      .then(() => {
        this.getHealthBarDefaults()
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
      this.selectMove(this.character)
      this.enemyCharacter.health -= this.currentDamage
      this.attackMessage = `${this.character.name} has used ${this.currentMove} for ${this.currentDamage} Damage`
      this.healthCheck()
      this.enemyAttacking = true;
      this.enemyAttack()


    },
    selectMove(attacker){
      var keys = Object.keys(attacker.moves)
      this.currentMove = keys[this.randomNumberGen(keys.length)];
      this.currentDamage = attacker.moves[this.currentMove]
    },
    healthCheck(){
      if (this.character.health <= 0){
        this.gameOver = true
        this.winner = this.enemyCharacter
      } else if (this.enemyCharacter.health <= 0){
        this.gameOver = true
        this.winner = this.character
      }
    },
    enemyAttack(){
      setTimeout(() => {
        if (!this.gameOver){
          this.selectMove(this.enemyCharacter)
          this.character.health -= this.currentDamage
          this.attackMessage = `${this.enemyCharacter.name} has used ${this.currentMove} for ${this.currentDamage} Damage`
          this.healthCheck()
          this.enemyAttacking = false;
        }
      }, 2000)
    },
    getHealthBarDefaults(){
      this.healthBarModifier = this.character.health / 100
      this.enemyHealthBarModifier = this.enemyCharacter.health / 100
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
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(20px 20px 30px #222);
}


#enemy {
  width: 250px;
  height: 330px;
  position:absolute;
  right: 50px;
  top: 100px;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(20px 20px 30px #222);
}

#pokemon-one-health div {
  height: 5px;
  border-radius: 5px;
  background: green;
}

#pokemon-one-health {
  width: 100px;
  border: 2px solid #fff;
  border-radius: 5px;
  position: absolute;
  top: 140px;
  left: 18px;
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
