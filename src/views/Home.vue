<template>
  <div class="home">
    <MatchList />
  </div>
</template>

<script>
import MatchList from '../components/MatchList.vue'
import getMatches from '../services/getMatches'

export default {
  name: 'Home',
  components: { MatchList },
  setup() { 
    const { posts, error, load } = getMatches()

    load()
    console.log(posts)
    return { posts, error }
  },
}

</script>
