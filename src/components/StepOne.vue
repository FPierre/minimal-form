<template lang='pug'>
.step-one-component
  h5 Vos informations

  .row
    .col.s12
      p
        input#female-civility(type='radio', value='female', name='civility', @click='fill')
        label(for='female-civility') Mme

      p
        input#male-civility(type='radio', value='male', name='civility', @click='fill')
        label(for='male-civility') M.

  .row
    .input-field.col.s12.m6
      input#firstname.validate(type='text', name='firstname', @change='fill', v-validate="'required'")
      label(for='firstname') Prénom

    .input-field.col.s12.m6
      input#lastname.validate(type='text', name='lastname', @change='fill')
      label(for='lastname') Nom

  .row
    .input-field.col.s12
      input#email.validate(type='text', name='email', @change='fill', v-validate="'required|email'", :class="{ 'invalid': errors.has('email') }")
      label(for='email', :data-error="errors.first('email')", data-success='right') Email *

  .row
    .input-field.col.s12
      input#phone.validate(type='tel', name='phone', @change='fill')
      label(for='phone', data-error='format invalide', data-success='format valide') Téléphone
</template>

<script>
import StepsInputs from '../mixins/StepsInputs.js'

export default {
  mixins: [StepsInputs]
}
</script>

<style scoped>
.input-field input[type=text]:focus + label {
  color: #1565c0;
}

.input-field input[type=text]:focus {
  border-bottom: 1px solid #1565c0;
  box-shadow: 0 1px 0 0 #1565c0;
}    
</style>
