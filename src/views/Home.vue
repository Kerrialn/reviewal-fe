<template>
  <div class="container">
    <div class="columns is-mobile is-centered">
      <div class="column is-10-mobile is-8-desktop">
        <div class="title">Long Term rental reviews</div>
        <div class="subtitle">Search address</div>
        <search-form />
      </div>
    </div>

    <div class="columns is-mobile is-centered">
      <div class="column is-10-mobile is-8-desktop margin-bottom-5">
        <div
          class="card margin-bottom-3"
          v-for="address in addresses"
          :key="address.id"
        >
          <router-link
            tag="a"
            :to="{ name: 'Address', params: { id: address.id } }"
          >
            <div class="card-content address-card">
              <div>
                {{ address.premise }}, floor {{ address.floor }},
                {{ address.line_one }}, {{ address.city }},
                {{ address.postal_code }},
                {{ address.country_code }}
              </div>
              <nav
                class="level"
                v-if="
                  address.reviews.length > 0 &&
                    isAuthenticated &&
                    user.reviews.length
                "
              >
                <div class="level-item has-text-centered">
                  <div>
                    <p class="heading">Overall</p>
                    <b>{{ address.average.ratings.overall }}</b>
                  </div>
                </div>
              </nav>
            </div>
          </router-link>
        </div>
        <div
          v-if="addresses.length === 0 && search"
          class="title has-text-centered muted"
        >
          No addresses found
        </div>
      </div>
    </div>

    <div class="columns is-mobile is-centered">
      <div class="column is-10-mobile is-8-desktop">
        <div
          class="box has-background-primary has-text-white"
          v-if="!isAuthenticated && showWelcomeMessage"
        >
          <div class="title has-text-white between">
            <div>
              A review for full access
            </div>
            <div>
              <b-icon
                @click.native="showWelcomeMessage = !showWelcomeMessage"
                icon="close"
              />
            </div>
          </div>
          <div class="subtitle has-text-white">
            Leave one review and gain access to all reviews, free. no catch.
          </div>
          <hr />
          <div class="subtitle is-5 has-text-white">
            How it works?
          </div>
          <p class="has-text-white">
            Lookup an address and find the tenants experiences of the landlord,
            premises, surrounding area, transport access and noise pollution.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import SearchForm from "../components/SearchForm.vue"
export default {
  components: { SearchForm },
  name: "Home",
  data() {
    return {
      showWelcomeMessage: true,
    }
  },
  computed: {
    ...mapGetters({
      user: "auth/getUser",
      isAuthenticated: "auth/isAuthenticated",
      isLoading: "getLoading",
      addresses: "address/getAddresses",
      search: "address/getSearch",
    }),
  },
}
</script>

<style scoped>
.margin-bottom-5 {
  margin-bottom: 50px;
}

.muted {
  color: gray;
}
.between {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.vh-80 {
  min-height: 80vh;
}
.address-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.overall-rating span {
  font-size: 25px;
  margin-left: 3px;
}
.overall-rating {
  font-size: 18px;
  display: flex;
  align-items: center;
  line-height: 0.8;
}
</style>
