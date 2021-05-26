<template>
  <div class="container">
    <div class="columns is-centered is-mobile">
      <div class="column  is-4-desktop is-10-mobile">
        <div class="card">
          <div class="card-content">
            <div class="is-size-4">Register</div>
            <form @submit.prevent="submit()">
              <b-field>
                <b-input
                  type="text"
                  placeholder="Full name"
                  v-model="name"
                ></b-input>
              </b-field>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import VueRecaptcha from "vue-recaptcha"
export default {
  name: "Register",
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      isDisabled: true,
      name: "",
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
      register: "auth/register",
    }),
    onVerify() {
      this.isDisabled = false
    },
    async submit() {
      if (this.name || this.email || this.password) {
        await this.register({
          name: this.name,
          email: this.email,
          password: this.password,
        }).then(() => {
          this.$router.push({
            name: "Login",
          })
        })
      }
    },
  },
}
</script>

<style></style>
