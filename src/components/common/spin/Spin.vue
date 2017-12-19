<template>
  <transition name="fade">
    <div class="spin-wrapper" :class="[{'spin-fullscreen': isFullScreen}, size]">
      <div class="spin-mask" v-if="isMask"></div>
      <div class="spin-container" :class="[size]">
        <div v-if="isBallScale" class="ball-scale-multiple">
            <div :class="[size]"></div>
            <div :class="[size]"></div>
            <div :class="[size]"></div>
        </div>
        <div v-else class="text-spin">
          <svg v-if="!isPureText" class="spin-circle" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
          </svg>
          <div class="row-text">
            <slot>{{text}}</slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      isFullScreen: {
        default: false
      },
      isMask: {
        default: false
      },
      text: {
        default: ''
      },
      size: {
        default: ''
      },
      type: {
        default: ''
      },
      isPureText: {
        default: false
      }
    },
    computed: {
      isBallScale () {
        return this.type === 'dot'
      }
    }
  }
</script>
