<template>
  <input type="range" min="0" max="100" step="1" value="0" @input="rangeChange" v-model="rangeData">
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'Slider',
    data () {
      return {
        rangeData: this.value
      }
    },
    props: {
      value: Number
    },
    methods: {
      changeStyle (v) {
        let target = this.$el
        let val = v || $(target).val()
        let valPercentage = (val - $(target).attr('min')) / ($(target).attr('max') - $(target).attr('min'))
        $(target).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + valPercentage + ', #007bff), ' + 'color-stop(' + valPercentage + ', #E4E4E4)' + ')')
      },
      rangeChange () {
        this.changeStyle()
        this.$emit('input', parseInt(this.rangeData))
      }
    },
    watch: {
      value (newData) {
        this.changeStyle(newData)
        this.rangeData = newData
      }
    },
    mounted () {
      this.changeStyle()
    }
  }
</script>
