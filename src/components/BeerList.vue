<template lang="html">
  <div id="beer-list">
    <ul>
      <list-component v-for="beer in beers" :beer="beer"></list-component>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'beer-list',
  props: ['beers']
}
</script>

<style lang="css" scoped>
</style>
