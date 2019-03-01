<template>
  <div>
    <h2>{{ title }}</h2>
    <add-item-component @add="addItem" :items="items"></add-item-component>
    <items-component :items="items"></items-component>
    <div class="footer">
      <hr/>
      <change-title-component :value="title" @changeTitle="onChangeTitle"></change-title-component>
    </div>
  </div>
</template>

<script>
import AddItemComponent from './AddItemComponent'
import ItemsComponent from './ItemsComponent'
import ChangeTitleComponent from './ChangeTitleComponent'

export default {
  components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent
  },
  data: function () {
    return {
      items: [{text: 'Bananas', checked: true},
        {text: 'Apples', checked: false}],
      title: 'My Shopping List',
      newItem: ''
    }
  },
  methods: {
    addItem (text) {
      this.items.push({
        text: text,
        checked: false
      })
    },
    onChangeTitle (text) {
      this.$emit('changeTitle', this.id, text)
    }
  },
  props: ['id', 'title', 'items']
}
</script>

<style scoped>
  .footer {
    font-size: 0.7em;
    margin-top: 40vh;
  }
</style>
