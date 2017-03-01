export default {
  methods: {
    fill (event) {
      if (event.target.name) {
        this.$emit('fill', { name: event.target.name, value: event.target.value })
      }
    }
  }
}
