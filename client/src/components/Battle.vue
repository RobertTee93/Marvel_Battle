<template lang="html">
  <div>
    <img id="player" :src="character.img" alt="">
    <p id="player-name">{{ this.character.name }}</p>

    <img id="enemy" v-if="enemyCharacter" :src="enemyCharacter.img" alt="">
    <p id="enemy-name" v-if="enemyCharacter">{{ this.enemyCharacter.name }}</p>

    <div id="attack-message">
      <p >{{ attackMessage }}</p>

      <p id="game-over" v-if="gameOver">Game over {{ winner.name }} Wins!</p>
    </div>

    <div id="player-health" v-if="!gameOver">
      <div :style="{width: this.character.health / this.healthBarModifier + '%' }"></div>
    </div>

    <div id="enemy-health" v-if="!gameOver && enemyCharacter">
      <div :style="{width: this.enemyCharacter.health / this.enemyHealthBarModifier + '%' }"></div>
    </div>

    <div id="attack-btn" v-if="!enemyAttacking && !gameOver" v-on:click="randomAttack()">
      <p>Attack</p>
    </div>

    <div id="enemy-message" v-if="enemyAttacking && !gameOver">
      <p>{{ this.enemyCharacter.name }} is about to attack!</p>
    </div>

    <router-link id="select-character" :to="{ name: 'select-character', params: {} }" v-if="gameOver">Back to Character Select
    </router-link>

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
      attackMessage: "Fight!",
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
          this.attackMessage = `${this.enemyCharacter.name} used ${this.currentMove} for ${this.currentDamage} Damage`
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

#player-health div {
  height: 20px;
  border-radius: 15px;
  background: green;
}

#player-health {
  width: 200px;
  border: 2px solid #fff;
  border-radius: 15px;
  position: absolute;
  bottom: 30px;
  left: 80px;
}

#player-name {
  width: 200px;
  position: absolute;
  bottom: 3px;
  left: 80px;
  margin: 0;
  text-align: center;
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


#enemy-health div {
  height: 20px;
  border-radius: 15px;
  background: green;
}

#enemy-health {
  width: 200px;
  border: 2px solid #fff;
  border-radius: 15px;
  position: absolute;
  bottom: 30px;
  right: 80px;
}

#enemy-name {
  width: 200px;
  position: absolute;
  bottom: 3px;
  right: 80px;
  margin: 0;
  text-align: center;
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

#enemy-message {
  position: absolute;
  width: 200px;
  left: 0;
  right: 0;
  text-align: center;
  margin: auto;
  bottom: 20px;
}

#attack-message {
  width: 400px;
  margin: auto;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  text-align: center;
  border-radius: 30px;
  background: #ff0c0c73;
}

#select-character {
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 50%;
  text-decoration: none;
  color: white;
}

</style>
