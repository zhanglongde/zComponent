<template>
  <div class="by-container">
    <div class="by-content">
      <div>
        日期选择
        <zDatePicker v-model="date"></zDatePicker><span>{{date}}</span>
      </div>
      <div>
        <label>
          <zTimePicker v-model="bootTime"></zTimePicker><span>开机时间</span>
        </label>
        <label>
          <zTimePicker v-model="shutdownTime"></zTimePicker><span>关机时间</span>
        </label>
      </div>
    </div>
    <div class="by-content">
      <div>
        <label>是否</label>{{checked}}
        <zSwitch on="是" off="否" size="md" v-model="isAutoSwitch" :checked="checked" @change="switchChange" type="switch switch-text switch-pill switch-info"></zSwitch>
      </div>
    </div>
    <div class="by-content">
      <div>
        <div>音量</div>
        <zSlider v-model="voice"></zSlider>
        <div>亮度</div>
        <zSlider v-model="brightness"></zSlider>
      </div>
    </div>
    <div class="by-content">
      <zButton @click="testPluginMessage">测试message插件</zButton>
      <zButton @click="testPluginConfirm">测试confirm插件</zButton>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data () {
      return {
        date: new Date().toString(),
        isAutoSwitch: false,
        bootTime: '08:00',
        shutdownTime: '18:00',
        voice: 50,
        brightness: 50,
        checked: false
      }
    },
    methods: {
      switchChange (e) {
        console.log('switchChange...')
        console.log(e)
      },
      testPluginMessage () {
        this.$message({
          msg: '测试1'
        })
      },
      testPluginConfirm () {
        console.log('test')
        this.$confirm({
          title: 'title',
          content: '测试2'
        })
      }
    }
  }
</script>
