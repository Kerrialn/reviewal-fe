<template>
  <div id="app">
    <navbar />
    <b-loading v-model="isLoading"></b-loading>

    <router-view class="router-view" />

    <footer class="footer">
      <div class="columns">
        <div class="column is-10-mobile is-6-desktop">
          Copyright © {{ year }} reviewal.org
        </div>
        <div class="column is-10-mobile is-6-desktop">
          <router-link tag="a" :to="{ name: 'About' }">About</router-link>
          |
          <router-link tag="a" :to="{ name: 'Format' }">Formating</router-link>
          |
          <router-link tag="a" :to="{ name: 'Terms' }"
            >Privacy policy</router-link
          >
          |
          <router-link tag="a" :to="{ name: 'Terms' }"
            >Terms of use</router-link
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import { mapGetters } from "vuex"
export default {
  components: { Navbar },
  name: "App",
  computed: {
    ...mapGetters({
      isLoading: "getLoading",
    }),
    year() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-view {
  min-height: 100vh;
}

.margin-top-3 {
  margin-top: 30px;
}
.margin-bottom-3 {
  margin-bottom: 30px;
}
.margin-top-5 {
  margin-top: 50px !important;
}

.material-icons {
  line-height: inherit !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.m-0 {
  margin: 0;
}

footer {
  padding: 10px;
}
.recaptcha {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
