<template>
  <ul class="root-tree-container">
    <tree-item v-for="itemData in Data" :selectedId="selectedId"  :selectedDepth="selectedDepth" :depth="0" :item="itemData" :key="itemData.id" :selectTreeItem="selectTreeItem"></tree-item>
  </ul>
</template>

<script>
  import TreeItem from './TreeItem.vue'
  export default {
    name: 'Tree',
    data () {
      return {
      }
    },
    props: {
      Data: {
        type: Array
      },
      selectedId: {
        type: Number
      },
      selectedDepth: {
        type: Number
      },
      selectTreeItem: {
        type: Function
      }
    },
    components: {
      'tree-item': TreeItem
    }
  }
</script>
