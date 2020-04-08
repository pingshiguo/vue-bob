<template>
  <div class="tab-bar">
    <router-link to="/" class="tab-item">
      <div class="tab-icon">
        <img src="../../assets/images/icon_discount.png" alt="">
      </div>
      <div class="tab-label">
        <span class="content">优惠</span>
      </div>
    </router-link>
    <router-link to="/" class="tab-item">
      <div class="tab-icon">
        <img src="../../assets/images/icon_message.png" alt="">
      </div>
      <div class="tab-label">
        <span class="content">客服</span>
      </div>
    </router-link>
    <router-link to="/" class="tab-item is-home is-active">
      <div class="tab-icon">
        <img src="../../assets/images/icon_logo.png" alt="">
      </div>
      <div class="tab-label">
        <span class="content">首页</span>
      </div>
    </router-link>
    <router-link to="/" class="tab-item">
      <div class="tab-icon">
        <img src="../../assets/images/icon_sponsor.png" alt="">
      </div>
      <div class="tab-label">
        <span class="content">赞助</span>
      </div>
    </router-link>
    <router-link to="/" class="tab-item">
      <div class="tab-icon">
        <img src="../../assets/images/icon_user.png" alt="">
      </div>
      <div class="tab-label">
        <span class="content">我的</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'tab-bar'
  }
</script>

<style lang="stylus" scoped>

  .tab-bar
    position fixed
    right 0
    bottom 0
    left 0
    z-index 1
    display flex
    height 52px
    background url(../../assets/images/tab_bar.png) no-repeat
    background-size 100% 100%

  .tab-item
    display flex
    flex-direction column
    justify-content flex-end
    align-items center
    width 100%

    &.is-active .tab-label .content
      color #3189fa

    &.is-home .tab-icon
      width 48px
      height 48px
      margin-bottom 7px

      img
        position absolute
        bottom 0
        z-index 1
        width 48px
        height 48px

  .tab-icon
    position relative
    width 24px
    height 24px

  .tab-label
    position relative
    flex-shrink 0
    width 100%
    height 15px

    .content
      position absolute
      top 0
      right 0
      left 0
      z-index 1
      display inline-block
      line-height 12px
      text-align center
      font-size 12px
      color #9ca1aa
      transform scale(.85)
</style>
