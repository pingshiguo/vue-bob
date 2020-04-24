<template>
  <main class="username">
    <div class="cells">
      <div class="form-cell">
        <div class="cell-hd">真实姓名</div>
        <div class="cell-bd">
          <input type="text" class="input" placeholder="请输入真实姓名">
        </div>
      </div>
      <div class="cell is-access">
        <div class="cell-bd">
          <div class="cell-title">请选择出生日期</div>
        </div>
        <div class="cell-ft"></div>
      </div>
    </div>
    <p class="tips">提示：真实姓名需与银行卡持卡人姓名一致，否则无法提款</p>
    <a href="javascript:;" class="button">提交</a>
  </main>
</template>

<script>
  export default {
    name: 'username'
  }
</script>

<style lang="stylus" scoped>
  @import "../../stylus/mixins.styl"

  .cells
    border-radius 4px
    margin 10px

  .form-cell
    position relative
    padding 15px 10px 10px
    font-size 16px
    color #333

    &:not(:last-child)
      bottom-1px-border(#ddd)

      &:after
        right 10px
        left 10px

    .cell-hd
      margin-bottom 15px

    .input
      height 24px
      font-size 16px
      color #333

  .cell
    height 56px

  .tips
    margin 0 10px
    line-height 14px
    font-size 12px
    color #333

  .button
    margin 20px 10px
    color #fff
    background linear-gradient(90deg, #6ab5f9, #4567d0)
</style>
