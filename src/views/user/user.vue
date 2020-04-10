<template>
  <main class="user">
    <div class="banner-bar">
      <div class="banner-scroller">
        <ul class="banner-list">
          <li
            v-for="(item ,index) in banners"
            :key="index"
            class="banner-item">
            <img :src="item" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="panel card">
      <div class="panel-hd">我的功能</div>
      <div class="panel-bd">
        <div class="grids">
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_betting.png"
                alt="">
            </div>
            <div class="grid-label">投注记录</div>
          </router-link>
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_transaction.png"
                alt="">
            </div>
            <div class="grid-label">交易记录</div>
          </router-link>
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_invite.png"
                alt="">
            </div>
            <div class="grid-label">邀请奖励</div>
          </router-link>
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_opinion.png"
                alt="">
            </div>
            <div class="grid-label">意见反馈</div>
          </router-link>
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_personal.png"
                alt="">
            </div>
            <div class="grid-label">个人资料</div>
          </router-link>
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_join.png"
                alt="">
            </div>
            <div class="grid-label">加入我们</div>
          </router-link>
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_aboutus.png"
                alt="">
            </div>
            <div class="grid-label">关于我们</div>
          </router-link>
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_bob.png"
                alt="">
            </div>
            <div class="grid-label">BOB综合</div>
          </router-link>
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_bobsports.png"
                alt="">
            </div>
            <div class="grid-label">BOB体育</div>
          </router-link>
          <router-link to="/" class="grid">
            <div class="grid-icon">
              <img
                src="https://www.bob2020.com/assets/mine/3.0/icon_my_setting.png"
                alt="">
            </div>
            <div class="grid-label">设置</div>
          </router-link>
        </div>
      </div>
    </div>
    <a href="javascript:;" class="logout card">退出登录</a>
  </main>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        banners: [
          'https://static.xaqlt.com/imgs/banner/76c718e50a75196a0a0f9f75f2d9ee703600d5c4.png',
          'https://static.xaqlt.com/imgs/banner/df1e8cd450ddaea7140d16c7172fa799cea50d03.png',
          'https://static.xaqlt.com/imgs/banner/ec279a0ee867b2391443b1d4ab500036e99a3576.png'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .banner-bar
    height 66px
    margin 0 10px 10px
    overflow hidden

  .banner-scroller
    height 73.5px
    padding-bottom 7.5px
    overflow hidden
    overflow-x auto
    -webkit-overflow-scrolling touch

  .banner-list
    display flex

  .banner-item
    flex-shrink 0
    width 170px
    height 66px
    border-radius 8px
    margin-right 10px
    overflow hidden

  .panel
    height 258px
    margin 0 10px 10px

  .panel-hd
    padding-left 18px
    line-height 40px
    font-size 16px
    font-weight 700
    color #212827
    background url(https://www.bob2020.com/assets/mine/3.0/icon_my_label.png) no-repeat
    background-position left center
    background-size 3px 15px
    background-color #fbfbfb

  .panel-bd
    padding 20px 0

  .grids
    display flex
    flex-wrap wrap

  .grid
    display inline-block
    flex 0 0 25%
    height 66px

  .grid-icon
    width 24px
    height 24px
    margin 0 auto 7px

  .grid-label
    text-align center
    font-size 12px
    color #333

  .logout
    display block
    margin 0 10px 26px
    line-height 50px
    text-align center
    font-size 14px
    color #333
</style>
