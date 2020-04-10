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
    justify-content center
    align-items center
    height 44px
    background #fff

    .left, .right
      position absolute
      top 0
      bottom 0
      z-index 1

    .left
      left 0

    .right
      right 0

    .title
      text-align center
      white-space nowrap
      text-overflow ellipsis
      font-size 16px
      color #333
      overflow hidden
</style>
