<template>
  <header class="app-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="title">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'app-bar'
  }
</script>

<style lang="stylus" scoped>

  .app-bar
    position fixed
    top 0
    right 0
    left 0
    z-index 1
    display flex
    align-items center
    height 44px
    background #fff

    .left, .right
      flex-shrink 0
      width 44px
      height 44px

    .title
      width 100%
      line-height 36px
      text-align center
      white-space nowrap
      text-overflow ellipsis
      font-size 16px
      color #333
      overflow hidden
</style>
