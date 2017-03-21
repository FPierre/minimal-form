import bus from '../bus'

export default {
  mounted () {
    // Listen on the bus for the parent component running validation
    bus.$on('validate', this.onValidate)
  },
  beforeDestroy () {
    // When destroying the element remove the listeners on the bus
    bus.$emit('errors-changed', [], this.errors.errors)
    bus.$off('validate', this.onValidate)
  },
  methods: {
    fill (event) {
      if (event.target.name) {
        this.$emit('fill', { name: event.target.name, value: event.target.value })
      }
    },
    onValidate () {
      console.log('onValidate')

      this.$validator.validateAll().then(() => {
        // eslint-disable-next-line
        alert('From Submitted!')
      }).catch(() => {
        // eslint-disable-next-line
        alert('Correct them errors!')
      })
    }
  }
}
