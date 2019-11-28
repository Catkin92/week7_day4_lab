<template>
  <div>
    <h1>Beer!</h1>
    <beer-list :beers="beers"></beer-list>

  </div>
</template>

<script>
import BeerList from './components/BeerList.vue'
import BeerDetail from './components/BeerDetail.vue'


export default {
  data(){
    return {
      beers: [],
      selectedBeer: null
    }
  },
  components: {
    "beer-list": BeerList,
    "beer-detail": BeerDetail
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
