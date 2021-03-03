import { ref } from 'vue'

const getMatches = () => {

  const matches = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/matches')
      if(!data.ok) {
        throw Error('no available data')
      }
      matches.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { matches, error, load }
}

export default getMatches