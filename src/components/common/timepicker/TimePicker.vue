<template>
  <div class="time-picker-box" :style="[{'position': positionWrapper}]">
    <div class="ipt-wrapper">
      <input type="text" @focus="focusIpt" @input="timeChange" @keydown.esc.stop="" :class="iptClass" v-model="timeData">
    </div>
    <div class="list-group" v-if="isList">
      <ul class="hour-list scroll-v">
        <li v-for="hour in hourList" @click="selectHour(hour)" :class="[{'selected': hour === selectedHour}]">{{hour}}</li>
      </ul>
      <ul class="minute-list scroll-v">
        <li v-for="minute in minuteList" @click="selectMinute(minute)" :class="[{'selected': minute === selectedMinute}]">{{minute}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TimePicker',
    data () {
      return {
        timeData: this.value,
        selectedHour: '',
        selectedMinute: '',
        hourList: [],
        minuteList: [],
        isList: false
      }
    },
    props: {
      value: String,
      iptClass: {
        type: String,
        default: ''
      },
      positionWrapper: {
        type: String,
        default: 'relative'
      }
    },
    methods: {
      timeChange () {
        // this.$emit('input', this.timeData)
      },
      closeList () {
        this.isList = false
      },
      openList () {
        this.isList = true
      },
      focusIpt () {
        this.openList()
      },
      updateTime () {
        if (this.selectedHour && this.selectedMinute) {
          this.timeData = this.selectedHour + ':' + this.selectedMinute
          this.$emit('input', this.timeData)
        }
      },
      selectHour (hour) {
        this.selectedHour = hour
        this.updateTime()
      },
      selectMinute (minute) {
        this.selectedMinute = minute
        this.updateTime()
      }
    },
    watch: {
      value (newData) {
        this.timeData = newData
      }
    },
    created () {
      this.hourList = [...new Array(24)].map((v, i) => {
        return i < 10 ? '0' + i : i + ''
      })
      this.minuteList = [...new Array(60)].map((v, i) => {
        return i < 10 ? '0' + i : i + ''
      })
    },
    mounted () {
      window.addEventListener('click', (e) => {
        if (this.$el.contains(e.target)) {
          return
        }
        // 不在区域内，点击=>隐藏
        this.closeList()
      }, true)
    }
  }
</script>
