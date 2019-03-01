<template>
    <ul> 
      <item-component v-for="(item, i) in items" :item="item" :key="i">
      </item-component> 
    </ul> 
</template>

<script>
import ItemComponent from './ItemComponent'
export default {
    components: {
        ItemComponent
    },
    props: ['items']
}
</script>

<style scoped>

</style>



