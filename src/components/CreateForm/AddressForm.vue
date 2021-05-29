<template>
  <div>
    <div class="card">
      <div class="card-content">
        <b-field>
          <b-input
            v-model="address.premise"
            placeholder="Premise number or name"
          ></b-input>
        </b-field>
        <b-field>
          <b-numberinput
            v-model="address.floor"
            placeholder="floor"
            min="0"
          ></b-numberinput>
        </b-field>

        <b-field>
          <b-input
            v-model="address.line_one"
            placeholder="Address line one"
          ></b-input>
        </b-field>

        <b-field>
          <div
            :class="['search-input', 'clickable', { grey: address.city == '' }]"
            @click="dropdown = !dropdown"
          >
            {{ address.city || "City" }}
          </div>
        </b-field>

        <div v-if="dropdown" class="select-wrapper">
          <b-tooltip type="is-light" label="close" position="is-bottom">
            <div class="select-option clickable" @click="dropdown = !dropdown">
              <b-icon icon="close" />
            </div>
          </b-tooltip>
          <b-tooltip type="is-light" label="clear filter" position="is-bottom">
            <div
              class="select-option clickable"
              @click="
                address.city = null
                dropdown = false
              "
            >
              <b-icon icon="filter-remove" />
            </div>
          </b-tooltip>
          <div
            class="select-option clickable"
            v-for="city in cities"
            :key="city.id"
            @click="
              address.city = city.name
              dropdown = false
            "
          >
            {{ city.name }}
          </div>
        </div>

        <b-field>
          <b-input
            v-model="address.postal_code"
            placeholder="postal code"
          ></b-input>
        </b-field>
        <b-field>
          <b-select
            v-model="address.country_code"
            expanded
            placeholder="country"
          >
            <option value="cz">Czechia</option>
          </b-select>
        </b-field>
        <router-link class="" :to="{ name: 'Format' }" tag="a"
          >Follow the required address format</router-link
        >
      </div>
    </div>
    <div class="column is-12 has-text-centered">
      <b-button
        @click.native="
          setAddressComponent(() =>
            import('@/components/CreateForm/AddressAutocompleteForm')
          )
        "
        label="back to address selection"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
const cities = require("@/assets/data/cities.json")

export default {
  name: "AddressForm",
  data() {
    return {
      cities: cities,
      dropdown: false,
    }
  },
  mounted() {
    this.setIsPreviousDisabled(true)
    this.isFormValid ? this.setIsNextDisabled(true) : this.complete()
  },
  watch: {
    address: {
      handler() {
        this.isFormValid ? this.setIsNextDisabled(true) : this.complete()
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      address: "createForm/getAddress",
    }),
    isFormValid() {
      return (
        !this.premise ||
        !this.line_one ||
        !this.city ||
        !this.postal_code ||
        !this.country_code
      )
    },
    premise() {
      return this.address.premise
    },
    line_one() {
      return this.address.line_one
    },
    city() {
      return this.address.city
    },
    postal_code() {
      return this.address.postal_code
    },
    country_code() {
      return this.address.country_code
    },
  },
  methods: {
    ...mapMutations({
      setAddress: "createForm/setAddress",
      setIsNextDisabled: "createForm/setIsNextDisabled",
      setIsPreviousDisabled: "createForm/setIsPreviousDisabled",
      setAddressComponent: "createForm/setAddressComponent",
    }),
    complete() {
      this.setIsNextDisabled(false)
      this.setAddress(this.address)
    },
  },
}
</script>

<style scoped>
.search-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.dropdown-display {
  white-space: nowrap;
  overflow-x: hidden;
}

.select-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.clickable:hover {
  cursor: pointer;
}

.select-option:hover {
  background-color: #ccc;
}
.select-option {
  border-radius: 3px;
  background-color: #fff;
  padding: 10px;
  margin: 3px;
  line-height: 1;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0px 0 1px rgb(10 10 10 / 2%);
  display: flex;
  align-items: center;
}
</style>
