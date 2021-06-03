<template>
  <div class="container">
    <div class="columns is-centered is-mobile">
      <div class="column is-10-mobile is-8-desktop">
        <section>
          <div class="title is-4 m-0">Long Term Rental Contract Generator</div>
          <div v-for="step in stages.steps" :key="step.id">
            <transition name="fade" mode="out-in">
              <div v-if="stages.current === step.id">
                <div class="subtitle is-4">
                  {{ step.label }}
                </div>
                <component v-bind:is="step.component"></component>
              </div>
            </transition>
          </div>

          <div class="controls">
            <b-button
              :disabled="stages.controls.previous.isDisabled"
              @click.native="previous()"
              type="is-primary is-light"
              icon-left="chevron-left"
            >
              previous
            </b-button>
            <b-button
              v-if="!stages.isLast"
              :disabled="stages.controls.next.isDisabled"
              @click.native="next()"
              type="is-primary is-light"
              icon-right="chevron-right"
            >
              next
            </b-button>
            <b-button v-else type="is-danger is-light" @click="submit()"
              >Generate</b-button
            >
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex"
import ContractConfig from "../components/ContractForm/ContractConfig"
import Landlord from "../components/ContractForm/Landlord"
import Tenant from "../components/ContractForm/Tenant"
import Property from "../components/ContractForm/Property"
export default {
  components: {
    ContractConfig,
    Landlord,
    Tenant,
    Property,
  },
  name: "Contract",
  mounted() {
    this.setIsPreiousDisabled(true)
  },
  watch: {
    current() {
      if (this.current <= 1) {
        this.setIsPreiousDisabled(true)
      } else {
        this.setIsPreiousDisabled(false)
      }

      if (this.current >= this.stages.steps.length) {
        this.setIsLast(true)
        this.setIsNextDisabled(true)
      } else {
        this.setIsLast(false)
        this.setIsNextDisabled(false)
      }
    },
  },
  computed: {
    ...mapGetters({
      stages: "contract/getStages",
    }),
    current() {
      return this.stages.current
    },
  },
  methods: {
    ...mapMutations({
      setIsPreiousDisabled: "contract/setIsPreviousDisabled",
      setIsNextDisabled: "contract/setIsNextDisabled",
      setIsLast: "contract/setIsLast",
    }),
    ...mapActions({
      resetForm: "contract/resetForm",
      previous: "contract/previous",
      next: "contract/next",
    }),
  },
}
</script>

<style scoped>
.between {
  display: flex;
  justify-content: space-between;
}
.is-sticky {
  position: sticky;
  top: 10px;
}
.controls {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
</style>
