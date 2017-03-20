<template lang='pug'>
.step-three-component
  h5 Budget estimé alloué à ma demande

  .row
    .input-field.col.s12
      p.range-field
        input(type='range', min='0', max='1000', name='budget')
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
