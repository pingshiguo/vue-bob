<template>
  <main class="home">
    <swiper class="swiper" :options="options">
      <swiper-slide class="swiper-item">
        <img src="../../assets/images/banner_01.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/banner_02.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="notice-bar">
      <div class="notice-icon">
        <img src="../../assets/images/notice_icon.png" alt="">
      </div>
      <div class="notice-content">
        这是一条公告
      </div>
    </div>
    <div class="user-bar">
      <div class="user-top">
        <div class="user-name">
          ping001
          <img src="../../assets/images/icon_vip_leval.png" alt="">
        </div>
        <div class="user-money">
          中心钱包：
          <div class="money">
            &yen;
            <strong>0.00</strong>
          </div>
        </div>
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
    <div class="game-nav-bar">
      <a
        v-for="(item, index) in navs"
        :key="index"
        href="javascript:;"
        class="game-nav-item"
        :class="{'is-active': index === activeIndex}"
        @click="handleChangeActive(index)">
        <div v-if="index === activeIndex" class="game-nav-content">
          <div class="game-nav-title">{{item.title}}</div>
          <div class="game-nav-desc">{{item.desc}}</div>
        </div>
        <div v-else class="game-nav-content">
          {{item.title.slice(0, 2)}}
        </div>
      </a>
    </div>
    <div ref="scroller" class="game-list">
      <div
        v-for="item in 10"
        :key="item"
        ref="item"
        class="game-item"
        style="background-image: url(https://www.bob2020.com/assets/home/gameList/card_sports_bob.png)">
        <div class="game-item-hd">
          <div class="star">
            <img src="../../assets/images/icon_star_active.png" alt="">
          </div>
        </div>
        <div class="game-item-bd">
          <div class="game-title">BOB体育</div>
          <div class="game-desc">
            625 {{item}}
            <span>体育赛事</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import '../../stylus/swiper.styl'

  export default {
    name: 'home',
    components: {
      Swiper,
      SwiperSlide
    },
    data () {
      return {
        options: {
          loop: true,
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        banners: [
          '../../assets/images/banner_01.jpg',
          '../../assets/images/banner_02.jpg',
          '../../assets/images/banner_03.jpg',
          '../../assets/images/banner_04.jpg',
          '../../assets/images/banner_05.jpg',
          '../../assets/images/banner_06.jpg'
        ],
        navs: [
          {
            title: '体育赛事',
            desc: 'SPORTS EVENTS'
          },
          {
            title: '真人娱乐',
            desc: 'LIVE CASINO'
          },
          {
            title: '电子竞技',
            desc: 'ELECTRONIC SPORTS'
          },
          {
            title: '棋牌游戏',
            desc: 'BOARD GAMES'
          },
          {
            title: '彩票游戏',
            desc: 'LOTTERY GAME'
          },
          {
            title: '电子游艺',
            desc: 'SLOT MACHINES'
          }
        ],
        activeIndex: 0
      }
    },
    methods: {
      handleChangeActive (index) {
        this.activeIndex = index
        this.$refs.scroller.scrollTop = this.$refs.item[index].offsetTop - 45
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .home
    padding-bottom 0

  .swiper, .swiper-item, .swiper-item img
    width 100%
    height 185px

  .notice-bar
    position absolute
    top 185px
    right 0
    left 0
    z-index 1
    display flex
    align-items center
    height 26px
    padding 0 14px
    margin-top -26px
    background url(../../assets/images/notice_bar.png) no-repeat
    background-size cover

  .notice-icon
    width 26px
    height 19px
    margin-right 6px

  .notice-content
    flex 1
    height 26px
    line-height 26px
    font-size 12px
    color #fff

  .user-bar
    height 90px
    padding 0 19px
    color #39404d
    background url(../../assets/images/user_bar.png) no-repeat
    background-size 100% auto

  .user-top
    display flex
    justify-content space-between
    align-items center
    height 34px
    font-size 12px

  .user-name, .user-money
    display flex
    align-items center

  .user-name
    padding-left 3px
    line-height 12px

    img
      width 32px
      height 12px
      margin-left 2px

  .user-money
    padding-left 10px

    .money strong
      display inline-block
      margin-left 2px
      line-height 20px
      font-size 20px
      font-weight 700

  .user-nav-bar
    display flex
    align-items center
    height 46px

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

  .games
    position absolute
    top 275px
    right 0
    bottom 0
    left 0
    z-index 1
    display flex
    flex-direction column
    overflow hidden
    overflow-y auto
    -webkit-overflow-scrolling touch

  .game-nav-bar
    position absolute
    top 275px
    right 0
    left 0
    z-index 1
    display flex
    width 100%
    height 41px
    margin-bottom 1px

  .game-nav-item
    position relative
    display flex
    flex 1 1 auto
    padding-bottom 7px
    background-repeat no-repeat
    background-size 102% 100%
    transition all .2s

    &.is-active
      flex 0 0 auto
      width 113px
      background-image url(../../assets/images/game_nav_item_active.png)

      .game-nav-content
        animation-name scale
        color #fff
        background transparent

        &:after
          display none

  .game-nav-content
    position relative
    display flex
    flex-direction column
    justify-content center
    align-items center
    width 100%
    text-align center
    font-size 14px
    color #666
    background #fff
    animation-duration .5s

    &:after
      content ''
      position absolute
      left 0
      bottom 0
      display inline-block
      width 100%
      height 2px
      background linear-gradient(0, #e8ecee, #999)
      opacity .2
      transform translateY(100%)

  .game-nav-title
    padding-top 10px

  .game-nav-desc
    width 200%
    font-size 12px
    transform scale(.5)

  .game-list
    position absolute
    top 275px
    right 0
    bottom 0
    left 0
    padding 45px 10px 52px
    overflow hidden
    overflow-y auto
    scroll-behavior smooth
    -webkit-overflow-scrolling touch

  .game-item
    position relative
    display flex
    height 100px
    margin-bottom 6px
    font-size 18px
    color #fff
    background-repeat no-repeat
    background-size 100% auto

  .game-item-hd
    position relative
    flex 1

    .star
      position absolute
      top 0
      left 0
      z-index 1
      display flex
      justify-content center
      align-items center
      width 52px
      height 38px

      img
        width 16px
        height 14px

  .game-item-bd
    flex 1.1

  .game-title
    margin-top 8px

  .game-desc
    margin-top 3px
    font-size 22px

    span
      display inline-block
      margin-left 2px
      font-size 12px
      color #39404d

  @keyframes scale
    0%
      transform scale(0)

    100%
      transform scale(1)
</style>
