<template>
  <div class="cascader">
    <div class="hd">
      <input :type="type" autocapitalize="none" class="form-control"
             @keyup.stop="keyup" @keydown.stop="keydown" v-model="iptContent" @focus="showTree" :placeholder="placeholderStr">
    </div>
    <device-group-tree v-if="isTree" :deviceGroupData="deviceGroupData" :queryDeviceTree="change"
                       :selectedSystemDeviceGroupId="selectedSystemDeviceGroupId"
                       :selectedDepth="selectedDepth"></device-group-tree>
  </div>
</template>

<script>
  import DeviceGroupTree from '../common/DeviceGroupTree.vue'
  export default {
    name: 'Cascader',
    data () {
      return {
        iptContent: '',
        isTree: false
      }
    },
    components: {
      'device-group-tree': DeviceGroupTree
    },
    props: {
      placeholderStr: {
        type: String,
        default: '请选择'
      },
      type: {
        type: String,
        default: 'text'
      },
      deviceGroupData: {
        type: Array
      },
      selectItem: {
        type: Function
      },
      selectedId: {
        type: Number
      },
      selectedDepth: {
        type: Number
      }
    },
    methods: {
      closeTree () {
        this.isTree = false
      },
      showTree () {
        this.isTree = true
      },
      keyup (e) {
      },
      keydown (e) {
      },
      change (item, depth) {
        this.selectItem(item, depth)
        this.iptContent = item.name
        this.closeTree()
      }
    },
    mounted () {
      window.addEventListener('click', (e) => {
        if (this.$el.contains(e.target)) {
          return
        }
        // 不在区域内，点击=>隐藏
        this.closeTree()
      }, true)
    }
  }
</script>
