<template>
  <div class="home">
    <MatchList :matches="matches"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import MatchList from '../components/MatchList.vue'
import getMatches from '../services/getMatches'

export default {
  name: 'Home',
  components: { MatchList },
  setup() { 
    const { matches, error, load } = getMatches()
    //debugger
    load()
    //console.log("new home"+Math.floor(Math.random() * 10000))
    return { matches, error }
    
    // const matches = ref([
    // {
    //   "id": 1,
    //   "this": "Vue",
    //   "that": "React",
    //   "thisVote": 2,
    //   "thatVote":2
    // },
    // {
    //   "id": 2,
    //   "this": "Dog",
    //   "that": "Cat",
    //   "thisVote": 2,
    //   "thatVote":2
    // }
    // ])
    // return { matches }
  },
}

</script>
