<template>
  <main class="email">
    <div class="cells form-cells">
      <div class="cell form-cell">
        <div class="cell-hd">
          <label class="form-label">邮箱地址</label>
        </div>
        <div class="cell-bd">
          <input type="text" class="form-input" placeholder="请输入绑定的邮箱地址">
        </div>
      </div>
      <div class="cell form-cell code-cell">
        <div class="cell-bd">
          <input type="text" class="form-input" placeholder="请输入邮箱验证码">
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
    name: 'email'
  }
</script>

<style lang="stylus" scoped>

  .email
    padding 20px 15px

  .button
    margin-top 15px
    color #fff
    background linear-gradient(90deg, #6ab5f9, #4567d0)
</style>
