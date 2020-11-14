<template>
  <div class="contact">
    <v-text-field
      v-model="contactForm.name"
      :rules="contactFormValidation.nameRules"
      label="名前"
      required
    ></v-text-field>
  </div>
</template>

<script>
// import { functions } from "@/firebase"

export default {
  data: () => ({
    contactForm: {
      name: "",
    },
    contactFormValidation: {
      valid: false,
      nameRules: [(v) => !!v || "名前は必須項目です"],
    },
  }),
}
</script>

<style>
.contact {
  margin: 100px 300px;
}
</style>
