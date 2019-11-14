<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'

export default {
  components: {
    'v-header': MHeader,
    'v-tab': Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

#app
  color: $color-theme
</style>
