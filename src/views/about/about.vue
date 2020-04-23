<template>
  <main class="about">
    <div class="logo">
      <img src="https://www.bob2020.com/assets/aboutus/logo_day.png" alt="">
    </div>
    <div class="desc">
      <p>BOB是全球领先的合法博彩公司</p>
      <p>拥有官方颁发的许可证并受其监督运营</p>
    </div>
    <div class="license">
      <img src="https://www.bob2020.com/assets/aboutus/license.png">
    </div>
  </main>
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style lang="stylus" scoped>

  .about
    background #f3f6f6

  .logo
    width 325px
    margin 40px auto 50px

    img
      width 100%

  .desc
    line-height 1.5
    text-align center
    font-size 14px
    color #333

    p + p
      font-size 12px

  .license
    width 287px
    margin 65px auto 0
</style>
