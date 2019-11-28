<template lang="html">
  <div>
    <h1>Favourite Beers:</h1>
      <ul>
        <li v-for="beer in checked">{{ beer.name }}</li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'favourite-beer',
  props: ['beer', 'checked']
}
</script>

<style lang="css" scoped>
</style>
