<template>
  <div class="steps-box">
    <div class="steps-bar">
      <div class="joint"></div>
      <div class="indicator-box">
        <div v-for="(stepOrder,index) in steps" :class="['indicator', {'active':index < step}]">{{stepOrder}}</div>
      </div>
    </div>
    <div class="steps-title">{{stepsTitle}}</div>
  </div>
</template>

<script>
  export default {
    name: 'steps',
    data () {
      return {
        steps: [...new Array(this.stepNum)].map((v, i) => {
          let num = i+1
          if (this.isSame) {
            return i < 10 ? '0' + num : num + ''
          }
          return num
        })
      }
    },
    props: {
      step: {
        type: Number,
        default: 1
      },
      stepNum: {
        type: Number,
        default: 2
      },
      stepsTitle: {
        type: String,
        default: ''
      },
      isSame: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
