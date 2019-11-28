<template lang="html">
  <div>

    <li v-on:click="handleClick">{{ beer.name }}</li>
    <label for="checkbox">Add to favourites</label>
    <input v-on:change="handleChange" type="checkbox" :value="checked">
  </div>
</template>

<script>
import FavouriteBeer from './FavouriteBeer.vue'
import { eventBus } from '../main.js'
export default {
  name: 'list-component',
  props: ['beer'],
  data(){
    return {
      checked: [],
    }
  },
  methods: {
    handleClick(){
      eventBus.$emit('beer-selected', this.beer)

    },
    handleChange(){
      console.log(this.beer)
      eventBus.$emit('favourite-beers', this.beer)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
