<template>
  <div id="app">
    <transition name="slide-down">
      <app-bar v-show="showHeader">
        <go-back v-show="showBack" slot="left"/>
        {{title}}
      </app-bar>
    </transition>
    <transition name="slide-in">
      <router-view
        class="container"
        :class="{'is-show-header': showHeader, 'is-show-footer': showFooter}"/>
    </transition>
    <transition name="slide-up">
      <tab-bar v-show="showFooter"/>
    </transition>
  </div>
</template>

<script>
  import TabBar from './components/tab-bar/tab-bar'
  import AppBar from './components/app-bar/app-bar'
  import GoBack from './components/go-back/go-back'

  export default {
    name: 'App',
    components: { GoBack, AppBar, TabBar },
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
    },
    mounted () {
      document.documentElement.style.setProperty('--vh',
        `${window.innerHeight * 0.01}px`)
    }
  }
</script>

<style lang="stylus">
  @import "./stylus/index.styl"

  .container
    position relative
    display flex
    flex-direction column
    min-height 100vh

    &.is-show-header
      padding-top 44px

    &.is-show-footer
      padding-bottom 52px

  .container
    min-height calc(var(--vh, 1vh) * 100)
</style>
