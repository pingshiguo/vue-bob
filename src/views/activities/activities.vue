<template>
  <main class="activities">
    <nav class="nav-bar">
      <a
        v-for="(item, index) in navs"
        :key="index"
        href="javascript:;"
        class="nav-item"
        :class="{'is-active': index === active}"
        @click="active = index">
        {{item}}
      </a>
    </nav>
    <ul class="activity-list">
      <li
        v-for="item in 5"
        :key="item"
        class="activity-item"
        @click="$router.push('/activities/' + item)">
        <div class="activity-banner">
          <img src="https://avatar.xaqlt.com/file1/23,ee08bfa8fae6" alt="">
          <div class="activity-mask"></div>
        </div>
        <div class="activity-time">
          <time>2020-04-08至2020-04-20</time>
        </div>
        <div class="activity-more">
          查看详情
          <i class="more"></i>
        </div>
        <span class="activity-tag">最新活动</span>
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    name: 'activities',
    data () {
      return {
        navs: ['全部', '首存', '体育', '真人', '返水', '豪礼'],
        active: 0
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .nav-bar
    position fixed
    top 44px
    right 0
    left 0
    z-index 1
    display flex
    height 44px
    padding 0 10px
    background #fff

  .nav-item
    position relative
    width 100%
    line-height 44px
    text-align center
    font-size 14px
    color #666

    &:after
      content ''
      position absolute
      bottom 0
      left 25%
      display inline-block
      width 50%
      border-bottom 2px solid transparent
      transition all .2s
      transform-origin 50% 50%
      transform scaleX(0)

    &.is-active
      color #0a91fb

      &:after
        border-bottom-color #0a91fb
        transform scaleX(1)

  .activity-list
    margin-top 49px
    margin-bottom 26px

  .activity-item
    position relative
    height 154px
    background url(https://www.bob2020.com/assets/mine/discount/bg_card.png) no-repeat
    background-position 50%
    background-size 100% 100%
    margin-bottom -12px

  .activity-banner
    position absolute
    top 30px
    left 16px
    width 91.5%
    height 106px
    border-radius 7.5px
    overflow hidden

  .activity-mask
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(26, 28, 53, .12))

  .activity-time
    padding-top 12px
    margin-left 26px
    font-size 12px
    color #666

  .activity-more
    position absolute
    right 17.5px
    bottom 20px
    width 91px
    height 125px
    padding-top 6px
    text-align center
    font-size 12px
    color #26c2c1

    .more
      position absolute
      top 7px
      right 10px
      display inline-block
      width 10px
      height 10px
      background url(https://www.bob2020.com/assets/mine/discount/icon_go.png) no-repeat
      background-size 100% 100%

  .activity-tag
    position absolute
    top 24px
    left 21px
    display inline-block
    width 64px
    height 32px
    line-height 32px
    text-align center
    font-size 12px
    color #fff
    background url(https://www.bob2020.com/assets/mine/discount/latest_activity.png) no-repeat
    background-size 100% 100%
</style>
