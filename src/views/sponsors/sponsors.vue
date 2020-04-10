<template>
  <main class="sponsors">
    <ul class="sponsor-list">
      <li
        v-for="(item, index) in sponsors"
        :key="index"
        class="sponsor-item"
        @click="$router.push('/sponsors/' + index)">
        <img :src="item" alt="">
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    name: 'sponsors',
    data () {
      return {
        sponsors: [
          'https://static.xaqlt.com/imgs/banner/fcc3b5955fce3b251c70a50794a54eef3fa11fe8.png',
          'https://static.xaqlt.com/imgs/banner/a5ef54895749313d431a4bc7a1c5349fc0910780.png',
          'https://static.xaqlt.com/imgs/banner/b69197cb5ce7851ece01b05c0613c506ed77efe6.png',
          'https://static.xaqlt.com/imgs/banner/0e07783e782837ab3965579f9d7966f546781ab9.png'
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .sponsor-list
    margin 16px 16px 26px
    overflow hidden

  .sponsor-item
    width 100%
    height 192px
    border-radius 4px
    overflow hidden

    & + .sponsor-item
      margin-top 16px
</style>
