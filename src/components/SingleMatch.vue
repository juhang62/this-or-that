<template>
  <div class="match">
    <h3>{{ match.this }} vs {{match.that}}: {{match.thisVote}} vs {{match.thatVote }}</h3>
    <button @click="upThis">Vote for {{ match.this }} </button> 
    <button @click="upThat">Vote for {{match.that}}</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import updateMatch from '../services/updateMatch'

export default {
  props: ['match'],
  setup(props){
    const router = useRouter()
    const { error, sendpatch } = updateMatch()
    
    const upThis = () =>{
      const newvote = props.match.thisVote+1
      const matchifo = {
        thisVote: newvote
      }
      sendpatch(props.match.id, matchifo)
      .then(props.match.thisVote=newvote)
      //router.push({name: 'About'})
    }
    const upThat = () =>{
      const newvote = props.match.thatVote+1
      const matchifo = {
        thatVote: newvote
      }
      sendpatch(props.match.id, matchifo)
      .then(props.match.thatVote=newvote)
      //router.push({name: 'About'})
    }
    return {upThis, upThat}  
  }

}
</script>

<style>

</style>