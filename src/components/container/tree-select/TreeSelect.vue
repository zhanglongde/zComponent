<template>
  <ul class="root-tree-container">
    <tree-select-item v-for="itemData in Data" :item="itemData" :key="itemData.id" :name="name" :depth="0"></tree-select-item>
  </ul>
</template>

<script>
  import TreeSelectItem from './TreeSelectItem.vue'
  export default {
    name: 'TreeSelect',
    data () {
      return {
      }
    },
    props: {
      Data: {
        type: Array
      },
      name: {
        default: ''
      }
    },
    components: {
      'tree-select-item': TreeSelectItem
    }
  }
</script>
