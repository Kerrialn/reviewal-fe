<template>
  <div>
    <div class="columns">
      <div class="column">
        <b-field>
          <b-select
            expanded
            placeholder="Property type"
            v-model="form.contract.property.type"
          >
            <option value="Flat / Apartement">Flat / Apartement</option>
            <option value="House">House</option>
          </b-select>
        </b-field>
      </div>
      <div class="column">
        <b-field>
          <b-input
            type="text"
            placeholder="Property square meters"
            v-model="form.contract.property.sqm"
          ></b-input>
        </b-field>
      </div>
    </div>

    <b-field>
      <b-input
        type="text"
        placeholder="Property rent"
        v-model="form.contract.property.rent"
      ></b-input>
    </b-field>

    <b-field>
      <b-switch v-model="form.contract.property.isFurnished">
        Furnished property?
      </b-switch>
    </b-field>

    <b-field>
      <b-input
        type="textarea"
        placeholder="Address"
        v-model="form.contract.property.address"
      ></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "Landlord",
  data() {
    return {
      form: {
        contract: {
          property: {
            type: "Flat / Apartement",
            rent: "",
            address: "",
            isFurnished: true,
            sqm: "",
          },
        },
      },
    }
  },
}
</script>

<style></style>
