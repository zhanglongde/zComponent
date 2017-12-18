<template>
  <div class="card">
    <!--slot优先，如果既不存在slot：header又不存在header属性，则不显示该模块-->
    <div v-if="isHeader" class="card-header">
      <slot name="header">{{header}}</slot>
    </div>
    <slot name="topImg">
      <img v-if="isTopImgSrc" :src="topImgSrc" alt="..." class="card-img-top">
    </slot>
    <div class="card-body">
      <div class="card-title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="card-text">
        <slot>{{text}}</slot>
      </div>
    </div>
    <slot name="bottomImg">
      <img v-if="isBottomImgSrc" :src="bottomImgSrc" alt="..." class="card-img-bottom">
    </slot>
    <div v-if="isFooter" class="card-footer">
      <slot name="footer">{{footer}}</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data () {
      return {
      }
    },
    props: {
      topImgSrc: {
        type: String
      },
      bottomImgSrc: {
        type: String
      },
      title: {
        type: String
      },
      text: {
        type: String
      },
      header: {
        type: String
      },
      footer: {
        type: String
      }
    },
    computed: {
      isTopImgSrc () {
        return this.topImgSrc !== undefined
      },
      isBottomImgSrc () {
        return this.bottomImgSrc
      },
      isHeader () {
        return this.header || this.$slots.header
      },
      isFooter () {
        return this.footer || this.$slots.footer
      }
    }
  }
</script>
