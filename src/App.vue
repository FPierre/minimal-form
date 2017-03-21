<template lang='pug'>
#app
  .container
    .row
      .col.s12.m5.offset-m3
        .card-panel.hoverable(:class='classObject')
          .card-content
            step-form-send(v-if='formSend')
            form(autocomplete='off' v-else)
              .steps
                .row
                  .col.s12
                    keep-alive
                      component(:is='currentView', @fill='fill', :form='form')

              .actions
                .row
                  .col.s12
                    form-progression(:number-steps='numberSteps', :current-step='currentStep')

                .row
                  .col.s6
                    a.waves-effect.waves-light.btn-flat(@click='back', v-if='!isFirstStep') Précédent

                  .col.s6
                    button.right.waves-effect.waves-light.btn(@click.prevent='submit' v-if='isLastStep') Envoyer
                    a.btn.right.waves-effect.waves-light.blue.darken-3(@click="next", v-else) Suivant
</template>

<script>
import bus from './bus'

import 'normalize.css'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'

import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import StepFour from './components/StepFour'
import StepFormSend from './components/StepFormSend'
import FormProgression from './components/FormProgression'

export default {
  data () {
    return {
      steps: [StepOne, StepTwo, StepThree, StepFour],
      stepIndex: 0,
      formSend: false,
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
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFormSend,
    FormProgression
  },
  computed: {
    currentStep () { return this.stepIndex + 1 },
    currentView () { return this.steps[this.stepIndex] },
    numberSteps () { return this.steps.length },
    isFirstStep () { return this.currentStep === 1 },
    isLastStep () { return this.currentStep === this.numberSteps },
    classObject () {
      return {
        'blue darken-3 white-text': this.formSend
      }
    }
  },
  mounted () {
    // Emit that validation is required on the bus
    this.$on('veeValidate', () => {
      bus.$emit('validate')
    })

    // Listen on the bus for changers to the child components error bag and merge in/remove errors
    bus.$on('errors-changed', (newErrors, oldErrors) => {
      newErrors.forEach(error => {
        if (!this.errors.has(error.field)) {
          this.errors.add(error.field, error.msg)
        }
      })

      if (oldErrors) {
        oldErrors.forEach(error => {
          this.errors.remove(error.field)
        })
      }
    })
  },
  methods: {
    next () {
      // bus.$emit('validate')

      if (this.stepIndex < this.numberSteps - 1) {
        this.stepIndex++
      }
    },
    back () {
      this.stepIndex--
    },
    submit () {
      console.log('submit')
      // this.currentView = StepFormSend
      // this.currentView = null

      this.formSend = true
    },
    fill (data) {
      const inputName = data['name']

      if (this.form[inputName]) {
        this.form[inputName] = data['value']
      }
    }
  }
}
</script>

<style scoped>
.card-panel .card-content {
  height: 620px;
}

.card-panel .steps {
  min-height: 500px;
}

.card-panel .actions {

}
</style>
