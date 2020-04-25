<template>
  <main class="profile">
    <div class="cells">
      <div class="cell">
        <div class="cell-bd">
          <div class="cell-title">账户名称</div>
        </div>
        <div class="cell-ft">ping001</div>
      </div>
      <router-link to="/username" class="cell is-access">
        <div class="cell-bd">
          <div class="cell-title">真实姓名</div>
        </div>
        <div class="cell-ft"></div>
      </router-link>
      <div class="cell is-access">
        <div class="cell-bd">
          <div class="cell-title">VIP等级</div>
        </div>
        <div class="cell-ft">VIP0</div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'profile'
  }
</script>

<style lang="stylus" scoped>

  .cells
    border-radius 4px
    margin 10px
</style>
