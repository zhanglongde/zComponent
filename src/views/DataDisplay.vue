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
      <zButton @click="testPluginBanner">测试banner插件</zButton>
      <zButton @click="testPluginAlert">测试alert插件</zButton>
      <zButton @click="testPluginConfirm">测试confirm插件</zButton>
      <zButton @click="testPluginToastr">测试toastr插件</zButton>
    </div>
    <div class="by-content">
      <h2>轻提示</h2>
      <label><input type="text" v-model="maxToasts">maxToasts</label>
      <br>
      <label><input type="text" v-model="position">position</label>

      <h3>选项</h3>
      <label><input type="text" v-model="theme">theme
      </label>
      <br>
      <label><input type="text" v-model="timeLife">timeLife</label>
      <br>
      <!--<label><input type="checkbox" v-model="closeBtn"> closeBtn</label>-->
      <label><Checkbox v-model="closeBtn"></Checkbox>closeBtn</label>
      <hr>

      <button type="button" name="button" @click="showTime">SHOW TIME</button>
      <button type="button" name="button" @click="closeAll">Close all</button>
      <toast ref='toast'></toast>
    </div>
    <div class="by-content">
      <Tooltip content="Tooltip Test">
        <zButton>Tooltip down</zButton>
      </Tooltip>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DataDisplay',
    data () {
      return {
        maxToasts: 6,
        position: 'bottom right',
        theme: 'error',
        timeLife: 3000,
        closeBtn: false
      }
    },
    watch: {
      'delayOfJumps': 'resetOptions',
      'maxToasts': 'resetOptions',
      'position': 'resetOptions'
    },
    methods: {
      testPluginMessage () {
        this.$message({
          content: '测试message'
        })
      },
      testPluginBanner () {
        this.$banner({
          content: '测试banner',
          callback: function () {
            console.log('end...')
          }
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
      },
      testPluginToastr () {
        this.$toastr('success', 'i am a toastr success', 'hello')
//        this.$toastr.info({
//           message:'i am a toastr success',
//           title: 'hello'
//        })
//        this.$toastr.success({
//           message:'i am a toastr success',
//           title: 'hello'
//        })
//        this.$toastr.warning({
//           message:'i am a toastr success',
//           title: 'hello'
//        })

        this.$toastr('add',
          { title: 'Heyy',
            msg: '',
            clickClose: false,
            timeout: 10000,
            position: 'toast-top-left',
            type: 'info' })
      },
      resetOptions() {
        this.$refs.toast.setOptions({
          delayOfJumps: this.delayOfJumps,
          maxToasts: this.maxToasts,
          position: this.position
        })
      },
      showTime() {
        this.$refs.toast.showToast(new Date, {
          theme: this.theme,
          timeLife: this.timeLife,
          closeBtn: this.closeBtn
        })
      },
      closeAll() {
        this.$refs.toast.closeAll()
      }
    },
    mounted() {
      this.resetOptions()
    }
  }
</script>
