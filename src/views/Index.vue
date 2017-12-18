<template>
  <div class="by-container index">
    <div class="by-content">
      <ul class="component-list">
        <li>
          <router-link to="common">
            <h2>通用组件</h2><icon type="icon-arrow-right"></icon>
          </router-link>
        </li>
        <li>
          <router-link to="data-entry">
            <h2>数据输入组件</h2><icon type="icon-arrow-right"></icon>
          </router-link>
        </li>
        <li>
          <router-link to="data-display">
            <h2>数据展示组件</h2><icon type="icon-arrow-right"></icon>
          </router-link>

        </li>
        <li>
          <router-link to="container">
            <h2>容器组件</h2><icon type="icon-arrow-right"></icon>
          </router-link>
        </li>
      </ul>
      <div>
        <img src="../assets/images/wechat.jpg" style="width:300px;"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data () {
      return {
      }
    }
  }
</script>
