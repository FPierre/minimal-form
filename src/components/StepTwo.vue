<template>
  <div class='step-two-component'>
    <p>I am a very simple card. I am good at containing small bits of information.
    I am convenient because I require little markup to use effectively.</p>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='email' type='email' class='validate'>
        <label for='email'>Email</label>
      </div>
    </div>

    <div class='row'>
      <div class='input-field col s12'>
        <input id='phone' type='text' class='validate'>
        <label for='phone'>Phone</label>
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
