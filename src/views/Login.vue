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
            <v-facebook-login app-id="486937362414266"></v-facebook-login>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VFacebookLogin from "vue-facebook-login-component"
import VueRecaptcha from "vue-recaptcha"
import { mapActions, mapGetters } from "vuex"
export default {
  name: "Login",
  components: {
    VueRecaptcha,
    VFacebookLogin,
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
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    onVerify() {
      this.isDisabled = false
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
</style>
