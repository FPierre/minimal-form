<template>
  <div class='step-one-component'>
    <h5>Vos informations</h5>

    <div class='row'>
      <div class='col s12'>
        <p>
          <input id='female-civility' type='radio' value='female' name='civility' @click='fill'>
          <label for='female-civility'>Mme</label>
        </p>
        <p>
          <input id='male-civility' type='radio' value='male' name='civility' @click='fill'>
          <label for='male-civility'>M.</label>
        </p>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s6'>
        <input id='firstname' type='text' class='validate' name='firstname' @change='fill'>
        <label for='firstname'>Prénom</label>
      </div>

      <div class='input-field col s6'>
        <input id='lastname' type='text' class='validate' name='lastname' @change='fill'>
        <label for='lastname'>Nom</label>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='email' type='email' class='validate' name='email' required @change='fill'>
        <label for='email' data-error='format invalide' data-success='format valide'>Email *</label>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='phone' type='tel' class='validate' name='phone' @change='fill'>
        <label for='phone' data-error='format invalide' data-success='format valide'>Téléphone</label>
      </div>
    </div>
  </div>
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
