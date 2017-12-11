<template>
  <div :class="wrapClasses">
    <input :type="type">
  </div>
</template>
<script>
  export default {
    name: 'Input',
    props: {
      type: String,
      wrapClasses: String
    }
  };
</script>
