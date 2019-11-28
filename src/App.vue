<template>
  <div>
    <h1>Beer!</h1>
    <beer-list :beers="beers"></beer-list>
    <beer-detail :beer="selectedBeer"></beer-detail>
    <favourite-beer :checked="checked"></favourite-beer>
  </div>
</template>

<script>
import {eventBus} from './main.js'
import BeerList from './components/BeerList.vue'
import BeerDetail from './components/BeerDetail.vue'
import FavouriteBeer from './components/FavouriteBeer.vue'

export default {
  name: 'app',
  data(){
    return {
      beers: [],
      selectedBeer: null,
      checked: []
    }
  },
  components: {
    "beer-list": BeerList,
    "beer-detail": BeerDetail,
    "favourite-beer": FavouriteBeer
  },
  mounted(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(beers => this.beers = beers)

    eventBus.$on('beer-selected', (beer) => {
      this.selectedBeer = beer

    eventBus.$on('favourite-beers', (beer) => {
      this.checked.push(beer)
    })
    })
  }
}
</script>

<style>


</style>
