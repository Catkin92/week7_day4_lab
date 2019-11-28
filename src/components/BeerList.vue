<template lang="html">
  <div id="beer-list">
    <ul>
      <list-component v-for="beer in beers" :beer="beer"></list-component>
    </ul>
  </div>
</template>

<script>
import ListComponent from './ListComponent.vue';
export default {
  name: 'beer-list',
  props: ['beers'],
  components: {
    "list-component": ListComponent
  }
}
</script>

<style lang="css" scoped>
</style>
