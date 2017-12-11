<template>
  <div class="by-container">
    <div class="by-content">
      <h1>数据展示</h1>
    </div>
    <div class="by-content">
      <h2>icon</h2>
      <Icon type="fa fa-heart" size="20" color="#58a"></Icon>
    </div>
    <div class="by-content">
      <h2>徽章</h2>
      <badge><i slot="icon" class="icon-tag"></i>test</badge>
      <badge><i slot="icon" class="icon-heart"></i> test <span slot="before">hello</span></badge>
    </div>
    <div class="by-content">
      <h2>步骤条</h2>
      <steps :step="2" :stepNum="5" :stepsTitle="'请按照步骤完成所有设置'"></steps>
    </div>
    <div class="by-content">
      <h2>消息</h2>
      <zButton @click="testPluginMessage">测试message插件</zButton>
      <zButton @click="testPluginAlert">测试alert插件</zButton>
      <zButton @click="testPluginConfirm">测试confirm插件</zButton>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DataDisplay',
    data () {
      return {}
    },
    methods: {
      testPluginMessage () {
        this.$message({
          content: '测试message'
        })
      },
      testPluginAlert () {
        this.$alert({
          title: 'title',
          content: '测试alert'
        })
      },
      testPluginConfirm () {
        this.$confirm({
          title: 'title',
          content: '测试confirm'
        })
      }
    }
  }
</script>
