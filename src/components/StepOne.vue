<template>
  <div class='step-one-component'>
    <span>I am a very simple card. I am good at containing small bits of information.
    I am convenient because I require little markup to use effectively.</span>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='first-name' type='text' class='validate'>
        <label for='first-name'>First name</label>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='last-name' type='text' class='validate'>
        <label for='last-name'>Last name</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step-one',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
