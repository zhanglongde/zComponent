<template>
  <div class="by-container">
    <div class="by-content">
      <h1>通用组件</h1>
    </div>
    <div class="by-content">
      <h2>无限加载</h2>
      <Scroll :on-reach-edge="loadData">
        <div class="scroll-item" v-for="item in list">
          {{ item }}
        </div>
      </Scroll>
    </div>
  </div>
</template>
<style>
  .scroll-container{
    border: 1px solid #ccc;
    border-radius:2px;
    padding: 0 10px;
  }
  .scroll-item{
    height:50px;
    line-height:50px;
  }
</style>
<script>
  export default {
    name: 'CommonScroll',
    data () {
      return {
        list: [1,2,3,4,5,6,7,8,9,10]
      }
    },
    methods: {
      loadData (dir) {
        return new Promise(resolve => {
          setTimeout(() => {
            if (dir > 0) {
              const first = this.list[0];
              for (let i = 1; i < 11; i++) {
                this.list.unshift(first - i);
              }
            } else {
              const last = this.list[this.list.length - 1];
              for (let i = 1; i < 11; i++) {
                this.list.push(last + i);
              }
            }
            resolve();
          }, 500);
        });
      }
    }
  }
</script>
