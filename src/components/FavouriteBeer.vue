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
h1, ul {
  font-family: monospace;
  color: aqua;
}
ul {
  font-size: 15px;
}
</style>
