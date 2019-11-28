<template>
  <div>

  </div>
</template>

<script>


export default {
  data(){
    return {
      beers: [],
      selectedBeer: null
    }
  },
  mounted(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(beers => this.beers = beers)
  }
}
</script>

<style>


</style>
