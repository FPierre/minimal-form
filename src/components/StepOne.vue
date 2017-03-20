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
      input#firstname.validate(type='text', name='firstname', @change='fill')
      label(for='firstname') Pr&eacute;nom

    .input-field.col.s12.m6
      input#lastname.validate(type='text', name='lastname', @change='fill')
      label(for='lastname') Nom

  .row
    .input-field.col.s12
      input#email.validate(type='email', name='email', required='', @change='fill')
      label(for='email', data-error='format invalide', data-success='format valide') Email *

  .row
    .input-field.col.s12
      input#phone.validate(type='tel', name='phone', @change='fill')
      label(for='phone', data-error='format invalide', data-success='format valide') Téléphone
</template>

<script>
// import $ from 'jquery'

import StepsInputs from '../mixins/StepsInputs.js'

export default {
  mixins: [StepsInputs]
}
</script>

<style scoped>
</style>
