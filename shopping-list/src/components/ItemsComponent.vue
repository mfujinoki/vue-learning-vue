<template>
    <ul>
      <item-component v-for="(item, i) in items" :item="item" :id="id" :key="i">
      </item-component>
    </ul>
</template>

<script>
import ItemComponent from './ItemComponent'
export default {
  components: {
    ItemComponent
  },
  props: ['items', 'id']
}
</script>

<style scoped>

</style>
