<template>
  <main class="service">
    <div class="box-problem">
      <div class="box-title">
        <span>猜你想问</span>
        <span>
          换一换
          <img src="../../assets/images/icon_refresh.png" class="box-icon">
        </span>
      </div>
      <div class="box-content">
        <div class="cells">
          <div class="cell is-access">
            <div class="cell-hd">
              <img src="../../assets/images/icon_money_transfer.png" alt="" class="item-icon">
            </div>
            <div class="cell-bd">
              <span>转账问题</span>
              <span>转账失败或转账成功金额消失等问题</span>
            </div>
            <div class="cell-ft"></div>
          </div>
          <div class="cell is-access">
            <div class="cell-hd">
              <img src="../../assets/images/icon_money_in.png" alt="" class="item-icon">
            </div>
            <div class="cell-bd">
              <span>存款问题</span>
              <span>存款方式或存款失败等问题</span>
            </div>
            <div class="cell-ft"></div>
          </div>
          <div class="cell is-access">
            <div class="cell-hd">
              <img src="../../assets/images/icon_money_out.png" alt="" class="item-icon">
            </div>
            <div class="cell-bd">
              <span>取款问题</span>
              <span>取款失败或取款不到账等问题</span>
            </div>
            <div class="cell-ft"></div>
          </div>
          <div class="cell is-access">
            <div class="cell-hd">
              <img src="../../assets/images/icon_problem_user.png" alt="" class="item-icon">
            </div>
            <div class="cell-bd">
              <span>账号问题</span>
              <span>登录名不存在或密码错误等问题</span>
            </div>
            <div class="cell-ft"></div>
          </div>
          <div class="cell is-access">
            <div class="cell-hd">
              <img src="../../assets/images/icon_problem_all.png" alt="" class="item-icon">
            </div>
            <div class="cell-bd">
              <span>全部问题</span>
              <span>≥100个常见问题解密（账号问题、存款问题等）</span>
            </div>
            <div class="cell-ft"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-tutorial">
      <div class="box-title">
        <span>新手教程</span>
      </div>
      <div class="box-content">
        <div class="cells">
          <div class="cell is-access">
            <div class="cell-bd"> 存款教程</div>
            <div class="cell-ft"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-btn">
      <div class="btn btn-opinion">
        <img src="../../assets/images/icon_opinion.png" alt="" class="btn-icon">
        意见反馈
      </div>
      <div class="btn btn-service">
        <img src="../../assets/images/icon_service_night.png" alt="" class="btn-icon">
        在线客服
      </div>
    </div>
  </main>
</template>

<script>
  import '../../stylus/cell.styl'

  export default {
    name: 'service'
  }
</script>

<style lang="stylus" scoped>
  .box-problem, .box-tutorial, .box-btn
    padding 0 10px

  .box-title
    font-size 15px
    color #333
    display flex
    justify-content space-between
    height 2.657rem
    line-height 2.657rem

  .box-icon
    width 12.5px
    height 12.5px

  .box-content
    border-radius 5px
    background #fff

  .item-icon
    width 24px
    height 24px

  .box-btn
    width 100%
    display flex
    flex-direction row
    justify-content space-between
    text-align center
    bottom 90px
    position absolute

  .btn
    width 170px
    height 40px
    line-height 40px
    border-radius 5px
    font-size 16px
    color #fff

  .btn-icon
    width 17.5px
    height 17.5px

  .btn-opinion
    background linear-gradient(270deg, rgb(44, 185, 192) 0%, rgb(112, 233, 233) 98%)

  .btn-service
    background linear-gradient(270deg, rgb(69, 103, 208) 0%, rgb(106, 181, 249) 100%)
</style>
