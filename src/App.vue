<template>
  <div id="app">
    <!-- spinner  -->
    <spinner v-show="isLoad"></spinner>
    <!-- end spinner  -->
    <app-header></app-header>
     <transition enter-active-class="animated fadeIn">
       <router-view></router-view>
     </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Spinner from './components/widgets/Spinner'
import Header from './components/widgets/Header'
import Footer from './components/widgets/Footer'

export default {
  name: "App",
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'spinner': Spinner,
  },
  computed: {
    isLoad() {
      return this.$store.getters.getIsLoad;
    }
  }
};
</script>

<style>
</style>
