<template>
  <div class='step-two-component'>
    <h5>Pour qui faites-vous la demande ?</h5>

    <div class='row'>
      <div class='col s12'>
        <p>
          <input id='test1' name='group1' type='radio' value='self' v-model='requestApplicant'>
          <label for='test1'>Vous-même</label>
        </p>
        <p>
          <input id='test2' name='group1' type='radio' value='other' v-model='requestApplicant'>
          <label for='test2'>Un proche</label>
        </p>
      </div>
    </div>

    <template v-if='requestApplicant === "other"'>
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
    </template>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='birth-date' type='text' class='datepicker'>
        <label for='birth-date'>Date de naissance</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step-two',
  data () {
    return {
      requestApplicant: 'self'
    }
  }
}
</script>

<style scoped>
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
