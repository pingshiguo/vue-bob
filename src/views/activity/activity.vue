<template>
  <main class="activity">
    <div class="activity-banner">
      <img src="https://avatar.xaqlt.com/file1/22,ee0ffc3f87df" alt="">
    </div>
    <div class="activity-content">

    </div>
  </main>
</template>

<script>
  export default {
    name: 'activity',
    props: {
      id: ''
    }
  }
</script>

<style lang="stylus">

  .activity-banner
    position relative
    height 200px

    img
      width 100%
      height auto

  .activity-content
    position relative
    box-shadow 0 0 10px 0 rgba(4, 117, 236, .1)
    padding 20px
    margin 0 12.5px 50px
    background #fff

    &::before
      content ''
      position fixed
      top 0
      right 0
      bottom 0
      left 0
      z-index -1
      background #fff url(https://www.bob2020.com/assets/leagueActive/img_bg.png) no-repeat
      background-position top
      background-size 100%
</style>
