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
      <label @click.stop="selectItem(item)">
        <!--<Checkbox :name="name" :value=""></Checkbox><span class="name">{{item.name}}</span>-->
        <input :name="name" :value="depth + '-' + item.id" type="checkbox"/><span class="name">{{item.name}}</span>
      </label>
    </div>
    <ul v-if="isOpen && isHasChildren" class="children-tree-container">
      <tree-select-item v-for="itemData in item.children" :depth="depth+1" :item="itemData" :key="itemData.id" :name="name"></tree-select-item>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'TreeSelectItem',
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
      name: {
        default: ''
      }
    },
    methods: {
      toggleOpen () {
        if (!this.isHasChildren) {
          return
        }
        this.isOpen = !this.isOpen
      },
      isCurrentItem (item) {
        return (this.selectedId === item.id) && (this.selectedDepth === this.depth)
      },
      selectItem (item) {
        console.log(item)
      }
    }
  }
</script>
