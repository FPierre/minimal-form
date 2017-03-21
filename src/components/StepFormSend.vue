<template lang='pug'>
.step-form-send-component
  pulse-loader(:loading='loading', color='#fff', size='6px', v-if='loading')
  i.material-icons(v-else) done

  button.btn.white.blue-text.text-darken-3.waves-effect(:disabled='loading') Menu
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    setTimeout(() => { this.loading = false }, 2000)
  },
  components: {
    PulseLoader
  }
}
</script>

<style scoped>
.step-form-send-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.step-form-send-component .btn{
  margin-top: 3em;
}
</style>
