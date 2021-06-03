<template>
  <div>
    <div class="columns">
      <div class="column">
        <b-field>
          <b-input
            type="text"
            placeholder="Landlord full legal name"
            v-model="form.contract.landlord.name"
          ></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field>
          <b-datepicker
            v-model="form.contract.landlord.dob"
            placeholder="Landlord date of birth"
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
            placeholder="Landlord ID number"
            v-model="form.contract.landlord.idNumber"
          ></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field>
          <b-input
            type="text"
            placeholder="Landlord phone number"
            v-model="form.contract.landlord.phone"
          ></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field>
          <b-input
            type="email"
            placeholder="Landlord E-mail address"
            v-model="form.contract.landlord.email"
          ></b-input>
        </b-field>
      </div>
    </div>
    <b-field>
      <b-input
        type="textarea"
        placeholder="Landlord Address"
        v-model="form.contract.landlord.address"
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
          landlord: {
            name: "",
            dob: "",
            idNumber: "",
            address: "",
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
