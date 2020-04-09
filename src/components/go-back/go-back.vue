<template>
  <a href="javascript:;" class="go-back" @click="goBack"></a>
</template>

<script>
  export default {
    name: 'go-back',
    methods: {
      goBack () {
        this.$router.back()
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .go-back
    position relative
    display block
    width 44px
    height 44px

    &:before
      content ''
      position absolute
      top 50%
      left 50%
      width 10px
      height 10px
      border-top 2px solid #333
      border-left 2px solid #333
      transform translate(-50%, -50%) rotate(-45deg)
</style>
