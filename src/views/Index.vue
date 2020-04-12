<template>
  <div>
    <home-banner></home-banner>
    <home-grids></home-grids>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import Banner from "@/views/index/Banner"
  import Grids from "@/views/index/Grids"
  import Footer from "@/views/index/Footer"

  export default {
    name: 'Index',
    components: {
      'home-banner': Banner,
      'home-grids': Grids,
      'home-footer': Footer
    }
  }
</script>

<style lang="scss" scoped>
</style>