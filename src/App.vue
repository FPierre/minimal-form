<template>
  <div id='app'>
    <div class='container'>
      <form autocomplete='off'>
        <div class='row'>
          <div class='col s12 m5'>
            <div class='card-panel hoverable'>
              <div class='row'>
                <div class='col s12'>
                  <keep-alive>
                    <component :is='currentView' keep-alive></component>
                  </keep-alive>
                </div>
              </div>

              <div class='row'>
                <div class='col s6'>
                  <a class='waves-effect waves-light btn-flat' @click='back' v-if='!isFirstStep'>Back</a>
                </div>

                <div class='col s6'>
                  <button class='right waves-effect waves-light btn' v-if='isLastStep'>Submit</button>
                  <a class='right waves-effect waves-light blue darken-3 btn' @click='next' v-else>Next</a>
                </div>
              </div>

              <div class='row'>
                <div class='col s12'>
                  <form-progression :number-steps='numberSteps' :current-step='currentStep'></form-progression>
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
import StepThree from './components/StepThree'
import FormProgression from './components/FormProgression'

import 'normalize.css'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'

export default {
  name: 'app',
  data () {
    return {
      steps: [StepOne, StepTwo, StepThree],
      stepIndex: 0
    }
  },
  mounted () {
  },
  components: {
    StepOne,
    StepTwo,
    StepThree,
    FormProgression
  },
  computed: {
    currentStep () { let index = this.stepIndex; return ++index },
    numberSteps () { return this.steps.length },
    currentView () { return this.steps[this.stepIndex] },
    // progression () { return `${this.currentStep} / ${this.numberSteps}` },
    isFirstStep () { return this.currentStep === 1 },
    isLastStep () { return this.currentStep === this.numberSteps }
  },
  methods: {
    next () { if (this.stepIndex < this.numberSteps - 1) this.stepIndex++ },
    back () { this.stepIndex-- }
  }
}
</script>

<style>

</style>
