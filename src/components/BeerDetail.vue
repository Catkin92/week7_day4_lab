<template lang="html">
  <div id="beer-detail" v-if="beer">
    <h1>{{ beer.name }}</h1>
    <p><i>{{ beer.tagline }}</i></p>
    <p><b>Description:</b> {{ beer.description }}</p>
    <h3>Food Pairings:</h3>
    <ul>
      <li v-for="food in beer.food_pairing">{{ food }}</li>
    </ul>
    <img :src="beer.image_url" alt="beer">
  </div>
</template>

<script>
export default {
  name: 'beer-detail',
  props: ['beer']
}
</script>

<style lang="css" scoped>

#beer-detail {
  font-family: monospace;
  font-size: 15px;
  color: lime;
}
</style>
