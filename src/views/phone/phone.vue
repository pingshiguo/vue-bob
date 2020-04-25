<template>
  <main class="phone">
    <div class="cells form-cells">
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
          <a href="javascript:;" class="form-button">发送验证码</a>
        </div>
      </div>
    </div>
    <a href="javascript:;" class="button">提交</a>
  </main>
</template>

<script>
  export default {
    name: 'phone'
  }
</script>

<style lang="stylus" scoped>

  .phone
    padding 15px

  .button
    margin-top 15px
    color #fff
    background linear-gradient(90deg, #6ab5f9, #4567d0)
</style>
