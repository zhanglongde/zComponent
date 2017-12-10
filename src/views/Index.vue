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
    <div class="by-content">
      <!--<select>-->
        <!--<option value="null">请选择</option>-->
        <!--<option value="1">1</option>-->
        <!--<option value="2">2</option>-->
        <!--<option value="3">3</option>-->
      <!--</select>-->
      <steps :step="1" :stepsTitle="'请按照步骤完成所有设置'"></steps>
      <ul class="list-group">
        <li class="list-group-item" :class="[{'active': item.value === 'apple'}, {'disabled': item.value === 'orange'}]" v-for="(item, index) in fruits">{{index + 1}}.{{item.text}}</li>
      </ul>
    </div>
    <div class="by-content">
      <badge><i slot="icon" class="icon-tag"></i>test</badge>
      <badge><i slot="icon" class="icon-heart"></i> test <span slot="before">hello</span></badge>
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
        checked: false,
        fruits: [
          {value:'apple', text:'apple'},
          {value:'banana', text:'banana'},
          {value:'orange', text:'orange'},
          {value:'pear', text:'pear'}]
      }
    },
    methods: {
      switchChange (e) {
        console.log('switchChange...')
        console.log(e)
      },
      testPluginMessage () {
        this.$message({
          content: '测试1'
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
