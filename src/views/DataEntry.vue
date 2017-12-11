<template>
  <div class="by-container">
    <div class="by-content">
      <h1>数据输入</h1>
    </div>
    <div class="by-content">
      <h2>表单元素</h2>
      <div class="row">
        <h3>单选</h3>
        <Radio name="test">A</Radio>
        <Radio name="test">B</Radio>
      </div>
      <div class="row">
        <h3>多选</h3>
        <Checkbox name="test2">AA</Checkbox>
        <Checkbox name="test2">BB</Checkbox>
      </div>
      <div class="row">
        <h3>下拉选择</h3>
        <select>
          <option value="null">请选择</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="33456">33</option>
        </select>
        <zSelect :items="fruits" v-model="fruitsSelected">
          <!--<zOption slot="first" slot-scope="{index, selectItem}" firstValue="null" :index="index" :selectItem="selectItem">请选择</zOption>-->
          <zOption slot="item" slot-scope="{item, index, currentIndex, selectItem}" :item="item" :index="index" :currentIndex="currentIndex" :selectItem="selectItem" @selected="selectOptionSelected">
            <i class="icon-heart"></i>{{item.text}}
          </zOption>
        </zSelect>
        <div>选中:{{fruitsSelected}}</div>
      </div>
    </div>
    <div class="by-content">
      <h2>日期 时间</h2>
      <div class="row">
        <h3>日期</h3>
        <zDatePicker v-model="date"></zDatePicker><span>{{date}}</span>
      </div>
      <div class="row">
        <h3>时间</h3>
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
        <h2>滑条</h2>
        <div>音量</div>
        <zSlider v-model="voice"></zSlider>
        <div>亮度</div>
        <zSlider v-model="brightness"></zSlider>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DataEntry',
    data () {
      return {
        date: new Date().toString(),
        bootTime: '08:00',
        shutdownTime: '18:00',
        voice: 50,
        brightness: 50,
        fruits: [
//          {value: null, text:'请选择'},
          {value:'apple-id', text:'apple', active: true},
          {value:'banana-id', text:'banana', selected: true},
          {value:'orange-id', text:'orange', disabled: true},
          {value:'pear-id', text:'pear'}],
        fruitsSelected: 'apple-id',
        treeData: [{name: '中国', id: 1, children: [{name: '上海', id: 2, children: [{name: '花木路', id: 100}]}, {name: '北京', id: 3, children: [{name: '朝阳路', id: 300}]}, {name: '长沙', id: 4}]},
          {name: '法国', id: 5, children: [{name: '巴黎', id: 6}, {name: '马赛', id: 7}, {name: '里昂', id: 8}]}],
        selectedId: -1,
        selectedDepth: -1
      }
    },
    methods: {
      selectOptionSelected (item) {
        console.log('list item selected...', item)
      }
    }
  }
</script>
