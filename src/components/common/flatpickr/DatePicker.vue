<template>
  <div>
    <flat-pickr v-model="date" :config="config"></flat-pickr>
  </div>
</template>

<script>
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  export default {
    name: 'DatePicker',
    data () {
      return {
        date: this.value,
        config: {
          wrap: true, // set wrap to true only when using 'input-group'
          altFormat: 'M	j, Y',
          altInput: true,
          dateFormat: 'Y-m-d',
          onChange: function(selectedDates, dateStr, instance) {
            this.$emit('input', this.date)
          }
//          locale: 'zh', // locale for this instance only
        }
      }
    },
    props: {
      value: {
        type: String
      }
    },
    components: {
      'flat-pickr': flatPickr
    }
  }
</script>
