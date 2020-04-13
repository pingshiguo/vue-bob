<template>
  <main class="user">
    <div class="user-header">
      <div class="flex is-middle flex-item">
        <div class="user-avatar">
          <img src="https://www.bob2020.com/assets/mine/3.0/icon_notlogged_avatar.png"
               alt="">
        </div>
        <div class="flex-item">
          <div class="user-name">
            ping001
            <img src="https://www.bob2020.com/assets/mine/3.0/icon_vip0.png"
                 alt="">
          </div>
          <div class="user-desc">您已加入BOB体育<span>0</span>天</div>
          <div class="user-desc">
            <div class="progress-bar">
              <div class="progress-inner"></div>
            </div>
            <div class="progress-label">VIP</div>
          </div>
          <div class="user-desc">升级需要<span>0.00</span>流水</div>
        </div>
      </div>
    </div>
    <div class="user-body">
      <div class="user-wallet">
        <div class="user-wallet-content">
          <div class="user-wallet-title">中心钱包:</div>
          <div class="user-wallet-money">0.00</div>
        </div>
        <div class="user-nav-bar">
          <div class="user-nav-item">
            <img src="../../assets/images/icon_money_in.png" alt="">
            <div class="user-nav-label">存款</div>
          </div>
          <div class="user-nav-item">
            <img src="../../assets/images/icon_money_out.png" alt="">
            <div class="user-nav-label">取款</div>
          </div>
          <div class="user-nav-item">
            <img src="../../assets/images/icon_money_transfer.png" alt="">
            <div class="user-nav-label">转账</div>
          </div>
          <div class="user-nav-item">
            <img src="../../assets/images/icon_vip.png" alt="">
            <div class="user-nav-label">VIP详情</div>
          </div>
        </div>
      </div>
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
    </div>
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

  .user-header
    position relative
    display flex
    align-items center
    height 150px
    padding 0 10px
    background url(https://www.bob2020.com/assets/mine/3.0/floor_bg_bottom.png) no-repeat
    background-size 100% 100%

  .user-avatar
    width 64px
    height 64px
    border 2px solid #fff
    border-radius 50%
    margin-right 10px
    overflow hidden

  .user-name
    display flex
    align-items center
    line-height 18px
    font-size 14px
    color #fff

    img
      width 32px
      height 12px
      margin-left 5px

  .user-desc
    display flex
    align-items center
    width 250px
    line-height 14px
    font-size 12px
    color #aed1ff

    span
      color #fff

  .progress-bar
    position relative
    width 154px
    height 8px
    border-radius 4px
    background #3f64d8

  .progress-inner
    position absolute
    top 0
    left 0
    width 50%
    height 8px
    border-radius 4px
    background linear-gradient(90deg, #62caff, #4dd8fd)
    transition all 1s

  .progress-label
    margin-left 5px
    line-height 18px
    font-size 14px
    color #fff

  .user-body
    position relative
    top -25px

  .user-wallet
    height 150px
    padding 0 15px
    margin 0 10px 10px
    background url(https://www.bob2020.com/assets/mine/3.0/floor_bg.png) no-repeat
    background-position center center
    background-size 100% 100%

  .user-wallet-content
    height 78px
    padding-top 20px

  .user-wallet-title
    line-height 18px
    font-size 12px
    color #333

  .user-wallet-money
    line-height 24px
    font-size 20px
    color #333

  .user-nav-bar
    display flex
    align-items center
    height 70px

  .user-nav-item
    display flex
    align-items flex-start
    width 100%
    font-size 14px
    color #39404d

    img
      flex-shrink 0
      width 24px
      height 24px
      margin-right 3px

  .user-nav-label
    margin-top 5px

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
