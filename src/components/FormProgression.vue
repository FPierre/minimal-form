<template>
  <div class='form-progression-component'>
    <div class='center-align'>
      <div class='step' v-for='(step, index) in numberSteps' :class='{ active: currentStep > index }'></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-progression',
  props: ['currentStep', 'numberSteps'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.step {
  display: inline-block;
  width: 9px;
  height: 9px;
  margin: auto 2px;
  background-color: #ddd;
  border-radius: 5px;
}

.step.active {
  background-color: #888;
}
</style>
