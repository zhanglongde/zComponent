<template>
  <div class="by-container index">
    <div class="by-content">
      <ul class="component-list">
        <li @click="go('/common')">
          <h2 >通用组件</h2><icon type="icon-arrow-right"></icon>
        </li>
        <li @click="go('/data-entry')">
          <h2>数据输入组件</h2><icon type="icon-arrow-right"></icon>
        </li>
        <li @click="go('/data-display')">
          <h2>数据展示组件</h2><icon type="icon-arrow-right"></icon>
        </li>
        <li @click="go('/container')">
          <h2>容器组件</h2><icon type="icon-arrow-right"></icon>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data () {
      return {
      }
    },
    methods: {
      go (path) {
        this.$router.push({path})
      }
    }
  }
</script>
