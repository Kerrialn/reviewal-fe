<template>
  <div>
    <b-field label="Duration">
      <b-input
        type="text"
        placeholder="Duration in months"
        v-model="form.contract.duration"
      ></b-input>
    </b-field>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  name: "ContractConfig",
  watch: {
    duration() {
      if (!Number.isInteger(parseInt(this.form.contract.duration))) {
        this.setIsNextDisabled(true)
      } else {
        this.setIsNextDisabled(false)
      }
    },
  },
  mounted() {},
  computed: {
    ...mapGetters({
      stages: "contract/getStages",
    }),
    duration() {
      return this.form.contract.duration
    },
  },
  data() {
    return {
      form: {
        contract: {
          duration: 12,
        },
      },
    }
  },
  methods: {
    ...mapMutations({
      setIsPreiousDisabled: "contract/setIsPreviousDisabled",
      setIsNextDisabled: "contract/setIsNextDisabled",
    }),
  },
}
</script>

<style></style>
