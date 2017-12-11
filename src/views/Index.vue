<template>
  <div class="by-container">
    <div class="by-content">
      <zButton @click="testPluginMessage">测试message插件</zButton>
      <zButton @click="testPluginConfirm">测试confirm插件</zButton>
      <Icon type="fa fa-heart" size="20" color="#58a"></Icon>
    </div>
    <div class="by-content">
      <badge><i slot="icon" class="icon-tag"></i>test</badge>
      <badge><i slot="icon" class="icon-heart"></i> test <span slot="before">hello</span></badge>
    </div>
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
      <div>表单元素</div>
      <div>
        <Radio name="test">A</Radio>
        <Radio name="test">B</Radio>
      </div>
      <div>
        <Checkbox name="test2">AA</Checkbox>
        <Checkbox name="test2">BB</Checkbox>
      </div>
      <select>
        <option value="null">请选择</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="33456">33</option>
      </select>
      <zSelect :items="fruits" v-model="fruitsSelected">
        <zOption slot="item" slot-scope="{item, index, currentIndex, selectItem}" :item="item" :index="index" :currentIndex="currentIndex" :selectItem="selectItem" @selected="selectOptionSelected">
          <i class="icon-heart"></i>{{item.text}}
        </zOption>
      </zSelect>
      <div>选中:{{fruitsSelected}}</div>
      <steps :step="1" :stepsTitle="'请按照步骤完成所有设置'"></steps>
    </div>
    <div class="by-content">
      <List :items="fruits">
        <ListItem slot="item" slot-scope="{item, index}" :item="item" :index="index" class="test" @selected="lisItemSelected">
          {{index+1}}.{{item.text}}
        </ListItem>
      </List>
      <List :items="fruits">
        <ListItem slot="item" slot-scope="{item, index}" :item="item" :index="index" class="test" @selected="lisItemSelected">
          {{item.text}}
        </ListItem>
      </List>
    </div>
    <div class="by-content">
      <Tree :Data="treeData" :selectTreeItem="selectTreeItem" :selectedId="selectedId" :selectedDepth="selectedDepth"></Tree>
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
          {value: null, text:'请选择'},
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
      },
      lisItemSelected (item) {
        console.log('list item selected...', item)
      },
      selectOptionSelected (item) {
        console.log('list item selected...', item)
      },
      selectTreeItem (item, depth) {
        console.log(item, depth)
        this.selectedId = item.id
        this.selectedDepth = depth
      }
    }
  }
</script>
