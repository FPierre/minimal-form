<template>
  <div id='app'>
    <!-- <img src='./assets/logo.png'> -->

    <div class='container'>
      <form autocomplete='off'>
        <div class='row'>
          <div class='col s12 m5'>
            <div class='card-panel'>
              <div class='row'>
                <div class='col s12'>
                  {{ currentStep }} / {{ step }}
                </div>
              </div>

              <component :is='currentView'></component>

              <div class='row'>
                <div class='col s6'>
                  <a class='waves-effect waves-light btn' @click='back'>Back</a>
                </div>

                <div class='col s6'>
                  <a class='right waves-effect waves-light btn' @click='next'>Next</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'

import 'normalize.css'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'

export default {
  name: 'app',
  data () {
    return {
      currentStep: 1,
      step: 4,
      steps: [StepOne, StepTwo],
      currentView: StepOne
    }
  },
  components: {
    StepOne,
    StepTwo
  },
  methods: {
    next () {
      this.currentView = this.steps[this.currentStep++]
    },
    back () {
      this.currentView = this.steps[this.currentStep--]
    }
  }
}
</script>

<style>

</style>
