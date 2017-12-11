<template>
  <div class="select">
    <div class="hd">
      <input type="text" @focus="showList" @keyup.stop="keyup" @keydown.stop="keydown" v-model="iptContent">
    </div>
    <ul class="list-group" v-if="isList" ref="list">
      <slot name="first" :index="-1" :selectItem="selectItem"></slot>
      <slot name="item" v-for="(item, index) in items" :item="item" :index="index" :currentIndex="currentIndex" :selectItem="selectItem"></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Select',
    data () {
      return {
        isList: false,
        currentIndex: this.getIndexByValue(this.value),
        iptContent:''
      }
    },
    props: {
      items: {
        type: Array,
        default: []
      },
      value: {
        default: ''
      },
      firstValue: {
        default: null
      }
    },
    watch: {
      value (newValue) {
        this.currentIndex = this.getIndexByValue(newValue)
      }
    },
    methods: {
      getIndexByValue (value) {
        return this.items.findIndex(x => x.value === value)
      },
      showList () {
        this.isList = true
      },
      hideList () {
        this.isList = false
      },
      selectItem (currentIndex) {
        if (currentIndex >= 0) {
          this.$emit('input', this.items[currentIndex].value)
          this.iptContent = this.items[currentIndex].text
        } else {
          this.$emit('input', this.firstValue)
          this.iptContent = this.$refs.list.firstChild.innerHTML
        }
        this.hideList()
      },
      keyup (e) {
        let keyCode = e.keyCode
        let LEN = this.items.length
        switch (keyCode) {
          case 38: // 上
            this.currentIndex = (this.currentIndex - 1 + LEN) % LEN
            break
          case 40: // 下
            this.currentIndex = (this.currentIndex + 1 + LEN) % LEN
            break
          case 27: // ESC
            this.hideList()
            break
          case 9: // Tab
          case 13: // ENTER
            this.selectItem(this.currentIndex)
            e.target.blur()
            break
          default:
            break
        }
      },
      keydown (e) {
        let keyCode = e.keyCode
        switch (keyCode) {
          case 38: // 上,存在列表时，屏蔽输入框文字向左，保证在列表上偏移
            if (this.items.length > 0) {
              e.preventDefault()
            }
            break
          default:
            break
        }
      }
    },
    created () {
      let item = this.items.find(x => x.value === this.value)
      this.iptContent = item ? item.text : ''
    },
    mounted () {
      window.addEventListener('click', (e) => {
        if (this.$el.contains(e.target)) {
          return
        }
        // 不在区域内，点击=>隐藏
        this.hideList()
      }, true)
    }
  }
</script>
