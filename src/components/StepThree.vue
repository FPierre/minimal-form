<template>
  <div class='step-three-component'>
    <div class='row'>
      <div class='input-field col s12'>
        <p class='range-field'>
          <input type='range' id='test5' min='0' max='100'>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step-three',
  data () {
    return {

    }
  },
  mounted () {
    // var slider = document.getElementById('test5')
    //
    // noUiSlider.create(slider, {
    //   start: [20, 80],
    //   connect: true,
    //   step: 1,
    //   range: {
    //     'min': 0,
    //     'max': 100
    //   }
    // })
  }
}
</script>

<style scoped>
</style>
