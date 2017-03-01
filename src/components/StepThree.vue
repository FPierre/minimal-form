<template>
  <div class='step-three-component'>
    <h5>Budget estimé alloué à ma demande</h5>

    <div class='row'>
      <div class='input-field col s12'>
        <p class='range-field'>
          <input type='range' min='0' max='1000' name='budget'>
        </p>
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
      budget: 500
    }
  }
}
</script>

<style scoped>
</style>
