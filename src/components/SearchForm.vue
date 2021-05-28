<template>
  <div>
    <div class="search-wrapper">
      <input
        class="search-input"
        @keyup.enter="search()"
        v-model="form.premise"
        size="is-large"
        expanded
        placeholder="house name/number"
      />

      <input
        class="search-input"
        @keyup.enter="search()"
        v-model="form.floor"
        size="is-large"
        expanded
        placeholder="floor"
      />

      <input
        class="search-input"
        @keyup.enter="search()"
        v-model="form.line_one"
        size="is-large"
        expanded
        placeholder="street"
      />

      <input
        class="search-input"
        @keyup.enter="search()"
        v-model="form.city"
        size="is-large"
        expanded
        placeholder="city"
      />

      <input
        class="search-input"
        @keyup.enter="search()"
        v-model="form.postal_code"
        size="is-large"
        expanded
        placeholder="postal code"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
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
    }
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
.search-wrapper {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc !important;
  border-radius: 3px;
}

.search-input {
  text-align: center;
  min-width: 100px;
  max-width: 200px;
  font-size: 24px;
  border-radius: 3px;
  padding: 10px;
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
    flex-flow: column;
    flex-wrap: wrap;
    flex: 100%;
  }
  .search-input {
    width: 100%;
    display: block;
    flex-grow: 4;
  }
}
</style>
