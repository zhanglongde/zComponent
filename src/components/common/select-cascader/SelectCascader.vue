<template>
  <div class="select-cascader">
    <select-cascader-item v-for="itemData in deviceGroupData" :selectedSystemDeviceGroupId="selectedSystemDeviceGroupId" :depth="0" :item="itemData" :key="itemData.id" :queryDeviceTree="queryDeviceTree" :selectedDepth="selectedDepth"></select-cascader-item>
  </div>
</template>

<script>
  import SelectCascaderItem from './SelectCascaderItem.vue'
  export default {
    name: 'SelectCascader',
    data () {
      return {
      }
    },
    components: {
      'select-cascader-item': SelectCascaderItem
    },
    props: {
      Data: {
        type: Array
      },
      selectItem: {
        type: Function
      },
      selectedSystemDeviceGroupId: {
        type: Number
      },
      selectedDepth: {
        type: Number
      }
    },
    computed: {
      options () {
      }
    }
  }
</script>
