<template>
  <div>
    <textarea :name="name" :cols="cols" :rows="rows"></textarea>
  </div>
</template>
<script>
  export default {
    name: 'Textarea',
    props: {
      name: String,
      cols: {
        type: Number,
        default: 30
      },
      rows: {
        type: Number,
        default: 10
      }
    }
  };
</script>
