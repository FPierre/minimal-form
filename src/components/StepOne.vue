<template>
  <div class='step-one-component'>
    <h5>Vos informations</h5>

    <div class='row'>
      <div class='col s12'>
        <p>
          <input name='group1' type='radio' id='test1'>
          <label for='test1'>Mme</label>
        </p>
        <p>
          <input name='group1' type='radio' id='test2'>
          <label for='test2'>M.</label>
        </p>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s6'>
        <input id='first-name' type='text' class='validate'>
        <label for='first-name'>Prénom</label>
      </div>

      <div class='input-field col s6'>
        <input id='last-name' type='text' class='validate'>
        <label for='last-name'>Nom</label>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='email' type='email' class='validate' required>
        <label for='email' data-error='format invalide' data-success='format valide'>Email *</label>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='phone' type='tel' class='validate'>
        <label for='phone' data-error='format invalide' data-success='format valide'>Téléphone</label>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s12'>
          <input id='birth-date' type='date' class='datepicker'>
          <label for='birth-date'>Date de naissance</label>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'step-one',
  data () {
    return {

    }
  },
  mounted () {
    $('document').ready(function () {
      $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15
      })
    })
  }
}
</script>

<style>
.input-field label {
  color: #000;
}

/* label focus color */
.input-field input[type=text]:focus + label {
  color: #000;
}

/* label underline focus color */
.input-field input[type=text]:focus {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}

/* valid color */
/*.input-field input[type=text].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}

/* invalid color */
/*.input-field input[type=text].invalid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}*/
</style>
