<template>
  <div class="help">
    <vue-wangeditor id="editor"></vue-wangeditor>
  </div>
</template>

<script>
  import vueWangeditor from 'vue-wangeditor'
  export default {
    name: 'Help',
    components: {
      'vue-wangeditor': vueWangeditor
    }
}
</script>

<style lang="scss" scoped>
</style>