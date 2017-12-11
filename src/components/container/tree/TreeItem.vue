<template>
  <li class="tree-item-container">
    <div class="hd d-flex align-items-center" :class="[{'active': isCurrentItem(item)}]" @click="toggleOpen">
      <div v-if="isHasChildren" class="switch-icon-box">
        <span v-if="isOpen" class="fa fa-caret-down"></span>
        <span v-else class="fa fa-caret-right"></span>
      </div>
     <div v-else class="switch-icon-box">
       <span>&nbsp;</span>
     </div>
      <span class="name" @click.stop="selectItem(item)">{{item.name}}</span>
    </div>
    <ul v-if="isOpen && isHasChildren" class="children-tree-container">
      <tree-item v-for="itemData in item.children" :depth="depth+1" :item="itemData" :key="itemData.id" :selectTreeItem="selectTreeItem" :selectedId="selectedId" :selectedDepth="selectedDepth"></tree-item>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'tree-item',
    data () {
      return {
        isOpen: false
      }
    },
    computed: {
      isHasChildren () {
        return Array.isArray(this.item.children) && (this.item.children.length > 0)
      }
    },
    props: {
      item: {
        type: Object
      },
      depth: {
        type: Number
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
    methods: {
      toggleOpen () {
        if (!this.isHasChildren) {
          return
        }
        this.isOpen = !this.isOpen
      },
      selectItem (item) {
        this.selectTreeItem(item, this.depth)
      },
      isCurrentItem (item) {
        return (this.selectedId === item.id) && (this.selectedDepth === this.depth)
      }
    }
  }
</script>
