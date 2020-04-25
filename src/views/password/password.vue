<template>
  <main class="password">
    <div class="cells form-cells">
      <div class="cell form-cell">
        <div class="cell-hd">
          <label class="form-label">原始密码</label>
        </div>
        <div class="cell-bd">
          <input type="password" class="form-input" placeholder="请输入原始密码">
        </div>
      </div>
      <div class="cell form-cell">
        <div class="cell-hd">
          <label class="form-label">新密码</label>
        </div>
        <div class="cell-bd">
          <input type="password" class="form-input" placeholder="请输入新密码">
        </div>
      </div>
      <div class="cell form-cell">
        <div class="cell-hd">
          <label class="form-label">确认新密码</label>
        </div>
        <div class="cell-bd">
          <input type="password" class="form-input" placeholder="请确认新密码">
        </div>
      </div>
    </div>
    <a href="javascript:;" class="button">提交</a>
  </main>
</template>

<script>
  export default {
    name: 'password'
  }
</script>

<style lang="stylus" scoped>

  .password
    padding 15px

  .form-cell
    height 40px
    box-shadow none
    line-height 40px

    & + .form-cell
      margin-top 10px

  .form-label
    line-height 40px

  .form-input
    height 40px

  .button
    margin-top 10px
    color #fff
    background linear-gradient(90deg, #6ab5f9, #4567d0)
</style>
