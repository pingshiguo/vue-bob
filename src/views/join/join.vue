<template>
  <main class="join">
    <div class="cells form-cells">
      <div class="cell form-cell">
        <div class="cell-hd">
          <label class="form-label">真实姓名</label>
        </div>
        <div class="cell-bd">
          <input type="text" class="form-input" placeholder="请输入真实姓名">
        </div>
      </div>
      <div class="cell form-cell">
        <div class="cell-hd">
          <label class="form-label">QQ号码</label>
        </div>
        <div class="cell-bd">
          <input type="text" class="form-input" placeholder="请输入QQ号码">
        </div>
      </div>
      <div class="cell form-cell">
        <div class="cell-hd">
          <label class="form-label">邮箱地址</label>
        </div>
        <div class="cell-bd">
          <input type="text" class="form-input" placeholder="请输入邮箱地址">
        </div>
      </div>
      <div class="cell form-cell">
        <div class="cell-hd">
          <label class="form-label">手机号码</label>
        </div>
        <div class="cell-bd">
          <input type="text" class="form-input" placeholder="请输入手机号码">
        </div>
      </div>
      <div class="cell form-cell code-cell">
        <div class="cell-bd">
          <input type="text" class="form-input" placeholder="请输入验证码">
        </div>
        <div class="cell-ft">
          <a href="javascript:;" class="form-button">获取验证码</a>
        </div>
      </div>
    </div>
    <div class="form-tips">
      <label class="form-label">
        <input type="checkbox" class="form-checkbox">
        我已阅读并同意相关的条款和隐私政策
      </label>
    </div>
    <a href="javascript:;" class="button">提交申请</a>
  </main>
</template>

<script>
  export default {
    name: 'join'
  }
</script>

<style lang="stylus" scoped>

  .join
    padding 15px
    background #f1f4f5

  .form-tips .form-label
    display flex
    justify-content center
    align-items center
    line-height 30px
    text-align center
    font-size 12px
    color #2472ff

  .button
    margin-top 15px
    color #fff
    background #2472ff
</style>
