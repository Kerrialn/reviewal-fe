<template>
  <div>
    <div class="search-wrapper">
      <input
        autofocus
        class="search-input"
        @keyup.enter="search()"
        v-model="form.premise"
        size="is-large"
        expanded
        placeholder="Property number or name"
      />

      <input
        class="search-input"
        @keyup.enter="search()"
        v-model="form.floor"
        size="is-large"
        expanded
        placeholder="Floor"
      />

      <input
        class="search-input"
        @keyup.enter="search()"
        v-model="form.line_one"
        size="is-large"
        expanded
        placeholder="Street address"
      />

      <div
        disabled="disabled"
        :class="[
          'search-input',
          'dropdown-display',
          'clickable',
          { grey: form.city == '' },
        ]"
        @click="dropdown = !dropdown"
      >
        {{ form.city || "City" }}
      </div>

      <input
        class="search-input"
        @keyup.enter="search()"
        v-model="form.postal_code"
        size="is-large"
        expanded
        placeholder="Postal code"
      />
    </div>

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
            form.city = null
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
          form.city = city.name
          dropdown = false
        "
      >
        {{ city.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
const cities = require("@/assets/data/cities.json")

export default {
  name: "SearchForm",
  data() {
    return {
      form: {
        premise: "",
        floor: null,
        line_one: "",
        city: "",
        postal_code: "",
        country_code: "",
      },
      keyword: "",
      dropdown: false,
      cities: cities,
    }
  },
  watch: {
    city() {
      this.search()
    },
  },
  computed: {
    city() {
      return this.form.city
    },
  },
  methods: {
    ...mapActions({
      searchAddress: "address/search",
    }),
    async search() {
      await this.searchAddress(this.form)
    },
  },
}
</script>

<style scoped>
.grey {
  color: #777;
}
.dropdown-display {
  white-space: nowrap;
  overflow-x: hidden;
}

.select-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

.search-wrapper {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc !important;
  border-radius: 3px;
}

.search-input {
  text-align: center;
  min-width: 100px;
  font-size: 24px;
  border-radius: 3px;
  padding: 20px;
  border: 0px solid transparent;
  box-shadow: none;
  border-color: transparent;
}

.search-input:focus {
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  box-shadow: none;
  outline: none;
  width: 100%;
}

@media (max-width: 800px) {
  .search-wrapper {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
  .search-input {
    align-self: 100%;
    width: 100%;
  }
}
</style>
