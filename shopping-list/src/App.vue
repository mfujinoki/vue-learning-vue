<template>
  <div id="app" class="container"> 
    <ul class="nav nav-tabs" role="tablist"> 
      <li :class="i===0 ? 'active' : ''" v-for="(list, i) in shoppinglists" role="presentation" :key="i"> 
        <a :href="'#' + list.id" :aria-controls="list.id" role="tab" data-toggle="tab">{{list.title}}</a> 
      </li> 
    </ul> 
    <div class="tab-content"> 
      <div :class="i===0 ? 'active' : ''" v-for="(list, i) in shoppinglists" :key="i" class="tab-pane" role="tabpanel" :id="list.id"> 
        <shopping-list-component :title="list.title" :items="list.items"></shopping-list-component>
      </div> 
    </div> 
  </div>
</template>

<script>
import ShoppingListComponent from './components/ShoppingListComponent'

export default {
  components: {
    ShoppingListComponent
  },
  data() {
    return {
      shoppinglists: [
        {
          id: "groceries",
          title: "Groceries",
          items: [{ text: "Bananas", checked: true }, { text: "Apples", checked: false }]
        },
        {
          id: "clothes",
          title: "Clothes",
          items: [{ text: "black dress", checked: false }, { text: "all stars", checked: false }]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

