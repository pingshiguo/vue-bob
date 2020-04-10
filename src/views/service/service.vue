<template>
  <main class="service">
    <div class="service-content">
      <div class="service-scroller">
        <h3 class="section-title">
          猜你想问
          <a href="javascript:;" class="refresh">
            换一换
            <img src="../../assets/images/icon_refresh.png" alt="">
          </a>
        </h3>
        <section class="section collapses card">
          <div class="collapse">
            <div class="collapse-hd">
              <div class="cell is-access">
                <div class="cell-hd">
                  <img src="../../assets/images/icon_money_transfer.png" alt="">
                </div>
                <div class="cell-bd">
                  <div class="cell-title ellipsis">转账问题</div>
                  <div class="cell-desc ellipsis">转账失败或转账成功金额消失等问题</div>
                </div>
                <div class="cell-ft"></div>
              </div>
            </div>
            <div class="collapse-bd"></div>
          </div>
          <div class="collapse">
            <div class="collapse-hd">
              <div class="cell is-access">
                <div class="cell-hd">
                  <img src="../../assets/images/icon_money_in.png" alt="">
                </div>
                <div class="cell-bd">
                  <div class="cell-title ellipsis">存款问题</div>
                  <div class="cell-desc ellipsis">存款方式或存款失败等问题</div>
                </div>
                <div class="cell-ft"></div>
              </div>
            </div>
            <div class="collapse-bd"></div>
          </div>
          <div class="collapse">
            <div class="collapse-hd">
              <div class="cell is-access">
                <div class="cell-hd">
                  <img src="../../assets/images/icon_money_out.png" alt="">
                </div>
                <div class="cell-bd">
                  <div class="cell-title ellipsis">取款问题</div>
                  <div class="cell-desc ellipsis">取款失败或取款不到账等问题</div>
                </div>
                <div class="cell-ft"></div>
              </div>
            </div>
            <div class="collapse-bd"></div>
          </div>
          <div class="collapse">
            <div class="collapse-hd">
              <div class="cell is-access">
                <div class="cell-hd">
                  <img src="../../assets/images/icon_problem_user.png" alt="">
                </div>
                <div class="cell-bd">
                  <div class="cell-title ellipsis">账号问题</div>
                  <div class="cell-desc ellipsis">登录名不存在或密码错误等问题</div>
                </div>
                <div class="cell-ft"></div>
              </div>
            </div>
            <div class="collapse-bd"></div>
          </div>
          <div class="collapse">
            <div class="collapse-hd">
              <div class="cell is-access">
                <div class="cell-hd">
                  <img src="../../assets/images/icon_problem_all.png" alt="">
                </div>
                <div class="cell-bd">
                  <div class="cell-title ellipsis">全部问题</div>
                  <div class="cell-desc ellipsis">≥100个常见问题解密（账号问题、存款问题等）</div>
                </div>
                <div class="cell-ft"></div>
              </div>
            </div>
            <div class="collapse-bd"></div>
          </div>
        </section>

        <h3 class="section-title">新手教程</h3>
        <section class="section cells card">
          <div class="cell is-access">
            <div class="cell-bd">
              <div class="cell-title">存款教程</div>
            </div>
            <div class="cell-ft"></div>
          </div>
          <div class="cell is-access">
            <div class="cell-bd">
              <div class="cell-title">取款教程</div>
            </div>
            <div class="cell-ft"></div>
          </div>
          <div class="cell is-access">
            <div class="cell-bd">
              <div class="cell-title">转账教程</div>
            </div>
            <div class="cell-ft"></div>
          </div>
          <div class="cell is-access">
            <div class="cell-bd">
              <div class="cell-title">玩法教程</div>
            </div>
            <div class="cell-ft"></div>
          </div>
        </section>
      </div>
    </div>
    <div class="buttons">
      <div class="button is-feedback">
        <img src="../../assets/images/icon_opinion.png" alt="">
        意见反馈
      </div>
      <div class="button is-service">
        <img src="../../assets/images/icon_service_night.png" alt="">
        在线客服
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'service'
  }
</script>

<style lang="stylus" scoped>
  @import "../../stylus/mixins.styl"

  .service-content
    position fixed
    top 44px
    right 0
    bottom 127px
    left 0
    z-index 1

  .service-scroller
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    overflow hidden
    overflow-y auto
    -webkit-overflow-scrolling touch

  .section-title
    margin 0 10px
    line-height 42.5px
    font-size 16px
    font-weight 400
    color #39404d

    .refresh
      float right
      display flex
      align-items center
      font-size 14px
      color #0a91fb

      img
        width 12.5px
        height 12.5px
        margin-left 10px

  .section
    margin 0 10px

  .collapse-hd
    position relative
    display flex
    align-items center
    height 70px
    bottom-1px-border(#ddd)

    &:after
      right 15px
      left 54px

  .buttons
    position fixed
    right 0
    bottom 52px
    left 0
    z-index 1
    display flex
    justify-content space-between
    align-items center
    height 75px
    padding 0 10px
    background #f5f5f9

  .button
    display flex
    justify-content center
    align-items center
    width 170px
    height 40px
    margin-top -15px
    font-size 16px
    color #fff

    &.is-feedback
      background linear-gradient(270deg, rgb(44, 185, 192) 0%, rgb(112, 233, 233) 98%)

    &.is-service
      background linear-gradient(270deg, rgb(69, 103, 208) 0%, rgb(106, 181, 249) 100%)

    img
      width 17.5px
      height 17.5px
      margin-right 7.5px
</style>
