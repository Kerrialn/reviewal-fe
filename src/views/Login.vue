<template>
  <div class="container">
    <div class="columns is-centered is-mobile">
      <div class="column  is-4-desktop is-10-mobile">
        <form @submit.prevent="submit">
          <div class="card">
            <div class="card-content">
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
                  tag="input"
                  native-type="contiune"
                  class="button is-light"
                >
                  contiune
                </b-button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
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

<style></style>
