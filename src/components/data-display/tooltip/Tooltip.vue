<template>
  <div class="tooltip-container-wrapper">
    <slot></slot>
    <div class="tooltip-container tooltip-container-s up">
      <div class="tooltip-item">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Tooltip',
    props: {
      content: ''
    }
  };
</script>
