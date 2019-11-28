<template>
  <div>
    <h1>Beer!</h1>
    <beer-list :beers="beers" :checked="checked"></beer-list>
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
    })

    eventBus.$on('favourite-beers', (beer) => {
      if(!this.checked.includes(beer)){
      this.checked.push(beer)}
      else {
        const foundBeer = this.checked.indexOf(beer)
        this.checked.splice(foundBeer, 1)
      }
    })
    }
  }

</script>

<style>
div {
  background-color: hotpink;

}
h1 {
  font-family: monospace;
}
h1 {
   animation-name: flash;
    animation-duration: 0.2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
}

@keyframes flash {
    from {color: hotpink;}
    to {color: black;}
}

</style>
