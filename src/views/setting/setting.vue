<template>
  <main class="setting">
    <div class="cells is-show-divider">
      <div class="cell is-access">
        <div class="cell-bd">
          <div class="cell-title">手机号码</div>
        </div>
        <div class="cell-ft">用于找回密码</div>
      </div>
      <div class="cell is-access">
        <div class="cell-bd">
          <div class="cell-title">邮箱地址</div>
        </div>
        <div class="cell-ft"></div>
      </div>
      <div class="cell is-access">
        <div class="cell-bd">
          <div class="cell-title">修改密码</div>
        </div>
        <div class="cell-ft">用于账号登录</div>
      </div>
    </div>

    <div class="cells">
      <div class="cell is-access">
        <div class="cell-bd">
          <div class="cell-title">银行卡管理</div>
        </div>
        <div class="cell-ft">用于提款</div>
      </div>
    </div>

    <div class="cells is-show-divider">
      <div class="cell">
        <div class="cell-bd">
          <div class="cell-title">夜间模式</div>
        </div>
      </div>
      <div class="cell">
        <div class="cell-bd">
          <div class="cell-title">免转钱包</div>
        </div>
        <div class="cell-ft">切换场馆，自动到账</div>
      </div>
    </div>

    <div class="cells">
      <div class="cell is-access">
        <div class="cell-bd">
          <div class="cell-title">关于我们</div>
        </div>
        <div class="cell-ft"></div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'setting'
  }
</script>

<style lang="stylus" scoped>

  .cells
    border-radius 5px
    margin 15px 15px 0
</style>
