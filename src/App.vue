<template>
  <div id="app">
    <div class="container" :class="{'is-show-footer': showFooter}">
      <router-view class="page"/>
      <transition name="slide-up">
        <tab-bar v-show="showFooter"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import TabBar from './components/tab-bar/tab-bar'

  export default {
    name: 'App',
    components: { TabBar },
    computed: {
      showFooter () {
        return this.$route.meta.showFooter
      },
      showHeader () {
        return this.$route.meta.showHeader
      },
      showBack () {
        return this.$route.meta.showBack
      },
      title () {
        return this.$route.meta.title
      }
    }
  }
</script>

<style lang="stylus">
  @import "./stylus/index.styl"

  .container
    display flex
    flex-direction column
    min-height 100vh

    &.is-show-header
      padding-top 45px

    &.is-show-footer
      padding-bottom 50px

  .page
    flex 1 0 auto
</style>
