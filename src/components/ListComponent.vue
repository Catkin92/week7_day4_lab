<template lang="html">
  <div>

    <li v-on:click="handleClick">{{ beer.name }}

    <label v-on:click="handleFavouriteClick" class="fancy-checkbox" :class="isFavouritedHeart()"><font-awesome-icon icon="heart"/>
    <!-- <input v-on:change="handleChange" type="checkbox" :value="checked"> -->
    </label></li>
  </div>
</template>

<script>
import FavouriteBeer from './FavouriteBeer.vue'
import { eventBus } from '../main.js'
export default {
  name: 'list-component',
  props: ['beer', 'isChecked'],
  data(){
    return {
      checked: [],
    }
  },
  methods: {
    isFavouritedHeart() {
      if (this.isChecked) {
        return 'favourited'
      }
    },
    handleClick(){
      eventBus.$emit('beer-selected', this.beer)

    },
    handleFavouriteClick(){
      console.log(this.beer)
      eventBus.$emit('favourite-beers', this.beer)
    }
  }
}
</script>

<style lang="css" scoped>

.fancy-checkbox {
  cursor: pointer;
}

.fancy-checkbox.favourited {
  color: dodgerblue;
}

li{
    padding: 5px;
    font-family: monospace;
    font-weight: bold;
    font-size: 15px;
    color: yellow;

  }
</style>
