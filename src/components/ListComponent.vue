<template lang="html">
  <li v-on:click="handleClick">{{ beer.name }}</li>
</template>

<script>
export default {
  name: 'list-component',
  props: ['beer']
}
</script>

<style lang="css" scoped>
</style>
