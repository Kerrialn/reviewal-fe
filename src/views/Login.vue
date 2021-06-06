<template>
  <div class="container">
    <div class="columns is-centered is-mobile">
      <div class="column  is-4-desktop is-10-mobile">
        <div class="card">
          <div class="card-content">
            <form @submit.prevent="submit">
              <div class="is-size-4">Login</div>
              <b-field>
                <b-input
                  type="email"
                  placeholder="E-mail address"
                  v-model="email"
                ></b-input>
              </b-field>
              <b-field>
                <b-input
                  type="password"
                  placeholder="Password"
                  v-model="password"
                ></b-input>
              </b-field>
              <vue-recaptcha
                @verify="onVerify"
                class="recaptcha"
                :sitekey="key"
                loadRecaptchaScript="true"
              ></vue-recaptcha>
              <div class="has-text-right">
                <b-button
                  :disabled="isDisabled"
                  native-type="submit"
                  class="button is-light"
                >
                  contiune
                </b-button>
              </div>
            </form>
          </div>
          <footer class="card-footer jc-c">
            <b-button
              class="facebook-btn"
              tag="a"
              target="_blank"
              :href="facebookLoginUrl"
              icon-left="facebook"
            >
              Contiune with facebook
            </b-button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import VueRecaptcha from "vue-recaptcha"
import { mapActions, mapGetters } from "vuex"
export default {
  name: "Login",
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      isDisabled: true,
      email: "",
      password: "",
    }
  },
  computed: {
    ...mapGetters({
      key: "auth/getPublicSitKey",
    }),
    facebookLoginUrl() {
      return "http://reviewal.herokuapp.com/api/auth/facebook"
    },
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    onVerify() {
      this.isDisabled = false
    },
    async socialLogin() {
      axios.get("/auth/facebook").then((response) => {
        console.log(response.data)
      })
    },
    async submit() {
      if (this.email || this.password) {
        await this.login({
          email: this.email,
          password: this.password,
        }).finally(() => {
          this.$router.push({
            name: "Dashboard",
          })
        })
      }
    },
  },
}
</script>

<style scoped>
.jc-c {
  justify-content: center;
}
.facebook-btn {
  border: 0;
  background-color: #3b5998;
  color: #ffffff;
}
.facebook-btn:hover {
  background-color: #4267b2;
  color: #ffffff;
}
</style>
