<template>
  <div class='step-two-component'>
    <h5>Pour qui faites-vous la demande ?</h5>

    <div class='row'>
      <div class='col s12'>
        <p>
          <input id='applicant-self' name='applicant' type='radio' value='self' @click='fill' v-model='applicant'>
          <label for='applicant-self'>Vous-même</label>
        </p>
        <p>
          <input id='applicant-other' name='applicant' type='radio' value='other' @click='fill' v-model='applicant'>
          <label for='applicant-other'>Un proche</label>
        </p>
      </div>
    </div>

    <template v-if='applicant === "other"'>
      <div class='row'>
        <div class='col s12'>
          <p>
            <input id='applicant-civility-female' type='radio' value='female' name='applicantCivility' @click='fill'>
            <label for='applicant-civility-female'>Mme</label>
          </p>
          <p>
            <input id='applicant-civility-male' type='radio' value='male' name='applicantCivility' @click='fill'>
            <label for='applicant-civility-male'>M.</label>
          </p>
        </div>
      </div>

      <div class='row'>
        <div class='input-field col s6'>
          <input id='applicant-firstname' type='text' class='validate' name='applicantFirstname' @change='fill'>
          <label for='applicant-firstname'>Prénom</label>
        </div>

        <div class='input-field col s6'>
          <input id='applicant-lastname' type='text' class='validate' name='applicantLastname' @change='fill'>
          <label for='applicant-lastname'>Nom</label>
        </div>
      </div>
    </template>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='birth-date' type='text' class='datepicker' name='birthDate' @change='fill'>
        <label for='birth-date'>Date de naissance</label>
      </div>
    </div>
  </div>
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
