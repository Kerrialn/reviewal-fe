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
export default {
  name: "ContractConfig",
  data() {
    return {
      form: {
        contract: {
          duration: 12,
        },
      },
    }
  },
}
</script>

<style></style>
