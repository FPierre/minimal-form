<template>
  <div class='step-two-component'>
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
      <div class='input-field col s12'>
        <input id='first-name' type='text' class='validate'>
        <label for='first-name'>Prénom</label>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s12'>
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
  </div>
</template>

<script>
export default {
  name: 'step-two',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
