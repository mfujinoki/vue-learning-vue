<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :class="i===0 ? 'active' : ''" v-for="(list, i) in shoppinglists" role="presentation" :key="i">
        <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class="i===0 ? 'active' : ''" v-for="(list, i) in shoppinglists" :key="i" class="tab-pane" role="tabpanel" :id="list.id">
        <shopping-list-component :id='list.id' :title="list.title" :items="list.items"></shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListComponent from './components/ShoppingListComponent'
import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
import store from './vuex/store'
import { mapGetters, mapActions } from 'vuex'
import _ from 'underscore'

export default {
  store,
  components: {
    ShoppingListComponent,
    ShoppingListTitleComponent
  },
  computed: mapGetters({
    shoppinglists: 'getLists'
  }),
  methods: _.extend({},
    mapActions(['populateShoppingLists', 'createShoppingList']),
    {
      addShoppingList() {
        let list = {
          title: 'New Shopping List',
          items: []
        }
        this.createShoppingList(list)
      }
    }
  ),
  mounted () {
    this.populateShoppingLists()
  }
}
</script>

<style scoped>
  .container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
</style>

