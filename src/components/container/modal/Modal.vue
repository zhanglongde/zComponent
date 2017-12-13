<template>
  <div class="modal fade fadein" :class="[{'show': onOff},{'dispaly-show': onOff}]">
    <div class="modal-dialog">
      <div class="modal-content">
        <!--<div class="modal-header">-->
        <!--</div>-->
        <!--<div class="modal-body">-->
        <!--</div>-->
        <!--<div class="modal-footer">-->
        <!--</div>-->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zModal',
    data () {
      return {
      }
    },
    props: {
      onOff: Boolean
    },
    methods: {
    }
  }
</script>
