<template>
  <label class="radio">
    <input type="radio" :name="name" @change="change"><i class="fa fa-circle-o not-checked" :style="styles"></i><i class="fa fa-dot-circle-o checked" :style="styles"></i><span><slot></slot></span>
  </label>
</template>
<script>
  export default {
    name: 'Radio',
    props: {
      wrapClasses: String,
      value: {
        type: Boolean,
        default: false
      },
      name: String,
      size: {
        type: [Number, String],
        default: 20
      },
      color: {
         type: String,
        default: '#58a'
      },
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
    },
    methods: {
      change (event) {
        this.$emit('input', event.target.value)
      }
    }
  };
</script>
