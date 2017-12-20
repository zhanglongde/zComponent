<template>
  <div class="by-container">
    <div class="by-content">
      <h1>通用组件</h1>
    </div>
    <div class="by-content">
      <h2>加载转轮</h2>
      <div>
        <Spin size="xs"></Spin>
        <Spin size="sm"></Spin>
        <Spin></Spin>
        <Spin size="lg"></Spin>
        <Spin size="xl"></Spin>
        <Spin>加载更多...</Spin>
        <Spin style="margin-left:100px;" :isPureText="true">加载更多...</Spin>
      </div>
      <div>
        <Spin size="xs" type="dot"></Spin>
        <Spin size="sm" type="dot"></Spin>
        <Spin type="dot"></Spin>
        <Spin size="lg" type="dot"></Spin>
        <Spin size="xl" type="dot"></Spin>
      </div>
    </div>
    <div class="by-content">
      <h2>图表结构</h2>
      <zCircle :percent="80" :size="100">
        <span style="font-size:24px">80%</span>
      </zCircle>
      <zCircle :percent="100" stroke-color="#5cb85c">
        <Icon type="fa fa-check" size="30" style="color:#5cb85c"></Icon>
      </zCircle>
      <zCircle :percent="35" stroke-color="#ff5500" :size="160">
        <span class="demo-Circle-inner">
            <Icon type="fa fa-remove" size="30" style="color:#ff5500"></Icon>
        </span>
      </zCircle>
    </div>
    <div class="by-content">
      <div>
        <h2>Switch 开关</h2>
        <label>是否</label>{{isAutoSwitch}}
        <zSwitch on="是" off="否" size="md" v-model="isAutoSwitch" :checked="checked" @change="switchChange" type="switch switch-text switch-pill switch-info"></zSwitch>
      </div>
    </div>
    <div class="by-content">
      <h2>树形结构</h2>
      <h3>单选</h3>
      <Tree :Data="treeData" :selectTreeItem="selectTreeItem" :selectedId="selectedId" :selectedDepth="selectedDepth"></Tree>
      <h3>多选</h3>
      <TreeSelect :Data="treeData" name="test"></TreeSelect>
    </div>
    <div class="by-content">
      <h2>无限加载</h2>
      <zButton @click="goScrollPage">enter</zButton>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Common',
    data () {
      return {
        checked: false,
        isAutoSwitch: false,
        treeData: [{name: '中国', id: 1, children: [{name: '上海', id: 2, children: [{name: '花木路', id: 100}]}, {name: '北京', id: 3, children: [{name: '朝阳路', id: 300}]}, {name: '长沙', id: 4}]},
          {name: '法国', id: 5, children: [{name: '巴黎', id: 6}, {name: '马赛', id: 7}, {name: '里昂', id: 8}]}],
        selectedId: -1,
        selectedDepth: -1,
        list: [1,2,3,4,5,6,7,8,9,10]
      }
    },
    methods: {
      switchChange (e) {
        console.log('switchChange...')
        console.log(e)
      },
      selectTreeItem (item, depth) {
        console.log(item, depth)
        this.selectedId = item.id
        this.selectedDepth = depth
      },
      goScrollPage () {
        this.$router.push({path: '/Scroll'})
      }
    }
  }
</script>
