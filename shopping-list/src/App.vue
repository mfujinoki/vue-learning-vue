<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :class="i===0 ? 'active' : ''" v-for="(list, i) in shoppinglists" role="presentation" :key="i">
        <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
    </ul>
    <div class="tab-content">
      <div :class="i===0 ? 'active' : ''" v-for="(list, i) in shoppinglists" :key="i" class="tab-pane" role="tabpanel" :id="list.id">
        <shopping-list-component :id='list.id' :items="list.items" @changeTitle="onChangeTitle"></shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListComponent from './components/ShoppingListComponent'
import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
import _ from 'underscore'

export default {
  components: {
    ShoppingListComponent,
    ShoppingListTitleComponent
  },
  data () {
    return {
      shoppinglists: [
        {
          id: 'groceries',
          title: 'Groceries',
          items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }]
        },
        {
          id: 'clothes',
          title: 'Clothes',
          items: [{ text: 'black dress', checked: false }, { text: 'all stars', checked: false }]
        }
      ]
    }
  },
  methods: {
    onChangeTitle (id, text) {
      _.findWhere(this.shoppinglists, { id: id }).title = text
    }
  }
}
</script>

<style scoped>

</style>
