<template>
  <i :class="type" :style="styles"></i>
</template>
<script>
  export default {
    name: 'Icon',
    props: {
      size: [Number, String],
      color: String,
      type: String
    },
    computed: {
      styles () {
        let style = {};

        if (this.size) {
          style['font-size'] = `${this.size}px`;
        }

        if (this.color) {
          style.color = this.color;
        }

        return style;
      }
    }
  };
</script>
