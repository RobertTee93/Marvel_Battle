<template>
	<div class="home">
    <h1>Welcome To The Marvel Battle Arena!</h1>
  </div>
</template>

<script>
// import SweepSummaryHome from '../components/SweepSummaryHome.vue';
export default {
	name: 'home',
	components: {
		// SweepSummaryHome
	},
	data() {
		return {
			sweeps: []
		}
	},
	mounted(){
		fetch("http://localhost:3000/api/characters/")
		.then(res => res.json())
		.then(data => this.sweeps = data)
	},
	methods: {
	}
}
</script>

<style lang="css" scoped>

h1 {
  color: white;
}

</style>
