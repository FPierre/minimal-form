<template lang='pug'>
.step-two-component
  h5 Pour qui faites-vous la demande ?

  .row
    .col.s12
      p
        input#applicant-self(name='applicant', type='radio', value='self', @click='fill', v-model='applicant')
        label(for='applicant-self') Vous-m&ecirc;me

      p
        input#applicant-other(name='applicant', type='radio', value='other', @click='fill', v-model='applicant')
        label(for='applicant-other') Un proche

  template(v-if='applicant === "other"')
    .row
      .col.s12
        p
          input#applicant-civility-female(type='radio', value='female', name='applicantCivility', @click='fill')
          label(for='applicant-civility-female') Mme

        p
          input#applicant-civility-male(type='radio', value='male', name='applicantCivility', @click='fill')
          label(for='applicant-civility-male') M.

    .row
      .input-field.col.s6
        input#applicant-firstname.validate(type='text', name='applicantFirstname', @change='fill')
        label(for='applicant-firstname') Pr&eacute;nom

      .input-field.col.s6
        input#applicant-lastname.validate(type='text', name='applicantLastname', @change='fill')
        label(for='applicant-lastname') Nom

    .row
      .input-field.col.s12
        input#birth-date.datepicker(type='text', name='birthDate', @change='fill')
        label(for='birth-date') Date de naissance
</template>

<script>
import StepsInputs from '../mixins/StepsInputs.js'

export default {
  mixins: [StepsInputs],
  data () {
    return {
      applicant: null
    }
  },
  mounted () {
    // $('.datepicker').pickadate({
      // selectMonths: true,
      // selectYears: 15
    // })
  }
}
</script>

<style scoped>
</style>
