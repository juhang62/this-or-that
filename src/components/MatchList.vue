<template>
<div v-for="match in matches" :key="match.id">
  <SingleMatch :match="match"/>
</div>
</template>

<script>
import SingleMatch from './SingleMatch.vue'

export default {

  props: ['matches'],
  components: { SingleMatch },
  setup(props) {

  }
}
</script>

<style>

</style>