<template>
  <div id='app'>
    <div class='container'>
      <div class='row'>
        <div class='col s12 m5 offset-m3'>
          <div class='card-panel hoverable'>
            <form autocomplete='off'>
              <div class='row'>
                <div class='col s12'>
                  <keep-alive>
                    <component :is='currentView' @fill='test' :form='form' keep-alive></component>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'normalize.css'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'

import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'
import FormProgression from './components/FormProgression'

export default {
  data () {
    return {
      steps: [StepOne, StepTwo, StepThree, StepFour],
      stepIndex: 0,
      form: {
        civility: null,
        firstname: null,
        lastname: null,
        email: null,
        phone: null,
        birthDate: null,
        budget: null,
        applicant: null,
        applicantCivility: null,
        applicantFirstname: null,
        applicantLastname: null
      }
    }
  },
  created () {
    this.$on('fill', function (data) {
      console.log('data: ', data)
    })
  },
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    FormProgression
  },
  computed: {
    currentStep () { let index = this.stepIndex; return ++index },
    numberSteps () { return this.steps.length },
    currentView () { return this.steps[this.stepIndex] },
    isFirstStep () { return this.currentStep === 1 },
    isLastStep () { return this.currentStep === this.numberSteps }
  },
  methods: {
    next () { if (this.stepIndex < this.numberSteps - 1) this.stepIndex++ },
    back () { this.stepIndex-- },
    test (data) {
      const name = data['name']

      if (this.form[name] !== undefined) {
        this.form[name] = data['value']
      }
    }
  }
}
</script>

<style scoped>
.card-panel {
  min-height: 650px;
}

.input-field label {
  color: #000;
}

/* label focus color */
.input-field input[type=text]:focus + label,
.input-field input[type=email]:focus + label {
  color: #000;
}

/* label underline focus color */
.input-field input[type=text]:focus,
.input-field input[type=email]:focus {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}

/* valid color */
/*.input-field input[type=text].valid,
.input-field input[type=email].valid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}*/

/* invalid color */
/*.input-field input[type=text].invalid,
.input-field input[type=email].invalid {
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 0 #000;
}*/
</style>
