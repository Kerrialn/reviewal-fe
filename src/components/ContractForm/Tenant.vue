<template>
  <div>
    <div class="columns">
      <div class="column">
        <b-field>
          <b-input
            type="text"
            placeholder="Tenant full legal name"
            v-model="form.contract.tenant.name"
          ></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field>
          <b-datepicker
            v-model="form.contract.tenant.dob"
            placeholder="Tenant date of birth"
            icon="calendar-today"
            editable
          >
          </b-datepicker>
        </b-field>
      </div>
      <div class="column">
        <b-field>
          <b-input
            type="text"
            placeholder="Tenant ID number"
            v-model="form.contract.tenant.idNumber"
          ></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field>
          <b-input
            type="text"
            placeholder="Tenant phone number"
            v-model="form.contract.tenant.phone"
          ></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field>
          <b-input
            type="email"
            placeholder="Tenant E-mail address"
            v-model="form.contract.tenant.email"
          ></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landlord",
  data() {
    return {
      form: {
        contract: {
          tenant: {
            name: "",
            dob: "",
            idNumber: "",
            phone: "",
            email: "",
          },
        },
      },
    }
  },
}
</script>

<style></style>
