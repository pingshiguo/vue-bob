<template>
  <div class="login">
    <img src="../../assets/images/login-logo.png" alt="" class="login-logo">
    <section class="login-content">
      <div class="content-title">
        <span class="btn btn-title active">登录</span>
        <span class="btn btn-title">注册</span>
      </div>
      <div class="content-input">
        <div class="cell">
          <div class="cell-hd">
            <img src="../../assets/images/icon_money_in.png" alt="">
          </div>
          <div class="cell-bd">
            <input type="text" placeholder="请输入用户名">
          </div>
          <div class="cell-ft"></div>
        </div>
        <div class="cell">
          <div class="cell-hd">
            <img src="../../assets/images/icon_money_in.png" alt="">
          </div>
          <div class="cell-bd">
            <input type="text" placeholder="请输入密码">
          </div>
          <div class="cell-ft">
            <img src="../../assets/images/icon_money_in.png" alt="">
          </div>
        </div>
      </div>
      <div class="content-btn">
        <span class="btn btn-login">登录</span>
      </div>
    </section>
    <section class="login-download">
      <div class="download-btn">
        <div class="btn-img"></div>
        <div class="btn-content">
          <p class="title">综合App客户端</p>
          <p class="download">点击下载</p>
        </div>
      </div>
      <div class="download-btn">
        <div class="btn-img"></div>
        <div class="btn-content">
          <p class="title">体育App客户端</p>
          <p class="download">点击下载</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style lang="stylus" scoped>
  @import "../../stylus/mixins.styl"

  .login
    width 100%
    display flex
    align-items center
    background url("../../assets/images/login-bg.jpg")
    background-size 100% auto
    overflow hidden

  .login-logo
    width 75%
    height auto
    padding-top 45px
    padding-bottom 10px

  .login-content
    margin 0 40px

  .content-title, .content-btn
    border-radius 25px
    border 1px solid hsla(0, 0%, 100%, .3)
    text-align center

  .btn
    width 50%;
    height 45px;
    line-height 45px
    padding 20px 40px
    font-size 18px
    border-radius 25px

  .btn-title
    color hsla(0, 0%, 100%, .3)

  .active
    color #fff;

  /*background-color hsla(0, 0%, 100%, .3)*/

  .content-btn
    background #2f79ff
    margin-top 20px

  .btn-login
    color #fff

  .login-download
    display flex
    margin 30px 0

  .download-btn
    background: hsla(0, 0%, 100%, .3);
    display flex
    border-radius 25px

  .btn-img
    width 38px
    height 38px
    background url("../../assets/images/icon_fullsite.png")
    background-size 38px
    background-repeat: no-repeat;
    background-position: 50%;

  .btn-content
    display flex
    flex-direction column
    justify-content center
    align-items center
    padding 5px

  .title
    color #fff
    font-size 12px

  .download
    color #3eefff
</style>
