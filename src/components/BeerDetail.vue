<template lang="html">
  <div id="beer-detail">
    <h1>{{ beer.name }}</h1>
    <p>{{ beer.tagline }}</p>
    <p>Description: {{ beer.description }}</p>
    <img :src="beer.image_url" alt="beer">
    <h3>Food Pairings:</h3>
    <ul>
      <li v-for="food in beer.food_pairing">{{ food }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'beer-detail',
  props: ['beer']
}
</script>

<style lang="css" scoped>
</style>
