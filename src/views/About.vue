<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-15"></div>
    <div class="md-layout-item md-size-15"></div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutHorizontalGutter'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/src/theme/engine";

  .md-layout-item {
    height: 40px;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(red, 200);
      content: " ";
    }
  }
</style>