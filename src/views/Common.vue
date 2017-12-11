<template>
  <div class="by-container">
    <div class="by-content">
      <h2>树形结构</h2>
      <Tree :Data="treeData" :selectTreeItem="selectTreeItem" :selectedId="selectedId" :selectedDepth="selectedDepth"></Tree>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data () {
      return {
        treeData: [{name: '中国', id: 1, children: [{name: '上海', id: 2, children: [{name: '花木路', id: 100}]}, {name: '北京', id: 3, children: [{name: '朝阳路', id: 300}]}, {name: '长沙', id: 4}]},
          {name: '法国', id: 5, children: [{name: '巴黎', id: 6}, {name: '马赛', id: 7}, {name: '里昂', id: 8}]}],
        selectedId: -1,
        selectedDepth: -1
      }
    },
    methods: {
      selectTreeItem (item, depth) {
        console.log(item, depth)
        this.selectedId = item.id
        this.selectedDepth = depth
      }
    }
  }
</script>
