<template>
  <div>
    <b-field>
      <search-form />
    </b-field>

    <div class="columns is-centered mt-3">
      <div class="column is-12 scroll-select">
        <div v-if="addresses">
          <div
            v-for="address in addresses"
            :key="address.id"
            :class="[
              'card',
              'mb-3',
              'cursor',
              {
                'has-background-primary has-text-white':
                  createFormAddress === address,
              },
            ]"
            @click="selectAddress(address)"
          >
            <div class="card-content">
              {{ address.premise }}, floor:
              {{ address.floor == 0 ? "G" : address.floor }},
              {{ address.line_one }}, {{ address.city }},
              {{ address.postal_code }},
              {{ address.country_code }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-12 has-text-centered">
      <b-button
        @click="
          setAddressComponent(() =>
            import('@/components/CreateForm/AddressForm')
          )
        "
        label="can't find address?"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex"
import SearchForm from "../SearchForm.vue"

export default {
  components: { SearchForm },
  name: "AddressForm",
  data() {
    return {
      keyword: null,
      selected: null,
      options: null,
      addressFormModalOpen: false,
    }
  },
  watch: {
    createFormAddress() {
      if (!this.createFormAddress) {
        this.setIsNextDisabled(true)
      } else {
        this.setIsNextDisabled(false)
      }
    },
  },
  computed: {
    ...mapGetters({
      addresses: "address/getAddresses",
      createFormAddress: "createForm/getAddress",
    }),
  },
  methods: {
    ...mapMutations({
      setAddress: "createForm/setAddress",
      setIsPreiousDisabled: "createForm/setIsPreviousDisabled",
      setIsNextDisabled: "createForm/setIsNextDisabled",
      setAddressComponent: "createForm/setAddressComponent",
    }),
    ...mapActions({
      search: "address/search",
      store: "address/store",
    }),
    async submit() {
      if (this.keyword.trim()) {
        await this.search({
          premise: this.query[0],
          floor: this.query[1],
          line_one: this.query[2],
          city: this.query[3],
          postal_code: this.query[4],
          country_code: this.query[5],
        })
      }
    },
    selectAddress(address) {
      this.selected = address
      this.setAddress(address)
    },
    async storeNewAddress() {
      await this.store(this.keyword)
      await this.search(this.keyword)
    },
  },
}
</script>

<style>
.scroll-select {
  min-height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

.cursor:hover {
  cursor: pointer;
}
</style>
