<template>
   <div class="scroll-wrapper">
     <div class="scroll-container" :style="{height: height + 'px'}"
          @scroll="handleScroll" @wheel="onWheel" ref="scrollContainer">
       <div v-if="showTopLoader" class="scroll-loader" ref="topLoader">
         <Spin></Spin>
       </div>
       <div class="scroll-content" ref="scrollContent">
         <slot></slot>
       </div>
       <div v-if="showBottomLoader" class="scroll-loader" ref="bottomLoader">
         <Spin></Spin>
       </div>
     </div>
   </div>
</template>

<script>
  import Spin from '../spin'
  import {throttle} from 'lodash'

  const dragConfig = {
    sensitivity: 10,
    minimumStartDragOffset: 5, // minimum start drag offset
  }

  const noop = () => Promise.resolve()

  export default {
    name: 'Scroll',
    data () {
      const distanceToEdge = this.calculateProximityThreshold()
      return {
        lastScroll: 0,
        showTopLoader: false,
        showBottomLoader: false,
        showBodyLoader: false,
        isLoading: false,
        reachedTopScrollLimit: true,
        reachedBottomScrollLimit: false,
        topRubberPadding: 0,
        bottomRubberPadding: 0,
        rubberRollBackTimeout: false,
        handleScroll: () => {},
        topProximityThreshold: distanceToEdge[0],
        bottomProximityThreshold: distanceToEdge[1]
      }
    },
    components: {
      Spin
    },
    props: {
      height: {
        type: [Number, String],
        default: 300
      },
      onReachTop: {
        type: Function
      },
      onReachBottom: {
        type: Function
      },
      onReachEdge: {
        type: Function
      },
      distanceToEdge: [Number, Array]
    },
    methods: {
      waitOneSecond () {
        return new Promise(resolve => {
          setTimeout(resolve, 1000)
        })
      },
      calculateProximityThreshold () {
        const dte = this.distanceToEdge
        if (typeof dte === 'undefined') {
          return [20, 20]
        }
        return Array.isArray(dte) ? dte : [dte, dte]
      },
      reset () {
        [
          'showTopLoader',
          'showBottomLoader',
          'showBodyLoader',
          'isLoading',
          'reachedTopScrollLimit',
          'reachedBottomScrollLimit'
        ].forEach(prop => (this[prop] = false));

        this.lastScroll = 0;
        this.topRubberPadding = 0;
        this.bottomRubberPadding = 0;
        clearInterval(this.rubberRollBackTimeout);
      },
      onCallback (dir) {
        console.log('onCallback:', dir)
        this.isLoading = true
        this.showBodyLoader = true
        if (dir > 0) {
          this.showTopLoader = true
          this.topRubberPadding = 20
        } else {
          this.showBottomLoader = true
          this.bottomRubberPadding = 20

          // to force the scroll to the bottom while height is animating
          let bottomLoaderHeight = 0
          const container = this.$refs.scrollContainer
          const initialScrollTop = container.scrollTop
          for(let i = 0; i < 20; i++){
            setTimeout(() => {
              bottomLoaderHeight = Math.max(
                bottomLoaderHeight,
                this.$refs.bottomLoader.getBoundingClientRect().height
              )
              container.scrollTop = initialScrollTop + bottomLoaderHeight
            }, i * 50)
          }
        }

        const callbacks = [this.waitOneSecond(), this.onReachEdge ? this.onReachEdge(dir) : noop()];
        callbacks.push(dir > 0 ? this.onReachTop ? this.onReachTop() : noop() : this.onReachBottom ? this.onReachBottom() : noop());

        let tooSlow = setTimeout(() => {
          this.reset();
        }, 5000);

        Promise.all(callbacks).then(() => {
          clearTimeout(tooSlow);
          this.reset();
        });
      },
      onWheel (event) {
         if (this.isLoading) {
           return
         }
//         get the wheel direction
        const wheelDelta = event.wheelDelta ? event.wheelDelta : -(event.detail || event.deltaY)
        this.stretchEdge(wheelDelta)
      },
      stretchEdge(direction) {
        clearTimeout(this.rubberRollBackTimeout);
        if (!this.onReachEdge) {
          if (direction > 0) {
            if (!this.onReachTop) {
              return
            }
          } else {
            if (!this.onReachBottom) {
              return
            }
          }
        }

//        if the scroll is not strong enough,lets reset it
        this.rubberRollbackTimeout = setTimeout(() => {
          if (!this.isLoading) {
            this.reset()
          }
        }, 250)

//        to give the feeling its ruberish and can be puled more to start loading
        if (direction > 0 && this.reachedTopScrollLimit) {
          console.log('%c-----------------------------------------------------------', 'background-color:#58a;color:#fff;font-size:30px;')
//          加速度变慢？
          console.log(this.topRubberPadding, this.topProximityThreshold)
          this.topRubberPadding += 5
//          this.topRubberPadding += 5 - this.topRubberPadding / 5
          if (this.topRubberPadding > this.topProximityThreshold) {
            this.onCallback(1)
          }
        } else if (direction < 0 && this.reachedBottomScrollLimit) {
          console.log('%c-----------------------------------------------------------', 'background-color:#e66;color:#fff;font-size:30px;')
          this.bottomRubberPadding += 6
//          this.bottomRubberPadding += 6 - this.bottomRubberPadding / 4
          console.log(this.bottomRubberPadding, this.bottomProximityThreshold)
          if (this.bottomRubberPadding > this.bottomProximityThreshold) {
            this.onCallback(-1)
          }
        } else {
          this.onScroll()
        }
      },
      onScroll() {
        console.log('------------------------------------------------onScroll')
        if (this.isLoading) {
          return
        }
        const el = this.$refs.scrollContainer
        const scrollDirection = Math.sign(this.lastScroll - el.scrollTop)
        const displacement = el.scrollHeight - el.clientHeight - el.scrollTop

        const topNegativeProximity = this.topPromixityThreshold < 0 ? this.topProximityThreshold : 0
        const bottomNegativeProximity = this.bottomProximityThreshold < 0 ? this.bottomProximityThreshold : 0

        console.log('scrollDirection:', scrollDirection)
        if (scrollDirection === -1 && displacement + bottomNegativeProximity <= dragConfig.sensitivity) {
          console.log('reachedBottomScrollLimit...')
          this.reachedBottomScrollLimit = true
        } else if (scrollDirection >= 0 && el.scrollTop + topNegativeProximity <= 0) {
          this.reachedTopScrollLimit = true
        } else {
          this.reachedTopScrollLimit = false
          this.reachedBottomScrollLimit = false
          this.lastScroll = el.scrollTop
        }
      }
    },
    created () {
      this.handleScroll = throttle(this.onScroll, 150, {leading: false})
    }
  }
</script>
