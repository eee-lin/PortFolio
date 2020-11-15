<template>
  <div id="app">
    <v-app>
      <TheNavigation />

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>

      <v-footer app>
        <!-- フッターメニュー -->
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue"
export default {
  components: {
    TheNavigation,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
