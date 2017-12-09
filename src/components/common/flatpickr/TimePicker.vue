<template>
  <div>
    <flat-pickr v-model="date" :config="config"></flat-pickr>
  </div>
</template>

<script>
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  export default {
    name: 'TimePicker',
    data () {
      return {
        date: this.value,
        config: {
          enableTime: true,
          noCalendar: true,

          enableSeconds: false, // disabled by default

          time_24hr: false, // AM/PM time picker is used by default

          // default format
          dateFormat: "H:i",

          // initial values for time. don't use these to preload a date
          defaultHour: 24,
          defaultMinute: 0,
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
