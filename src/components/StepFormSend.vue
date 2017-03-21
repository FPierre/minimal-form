<template lang='pug'>
.step-form-send-component
  span {{ formState }}

  pulse-loader(:loading='loading', color='#fff', size='6px', v-if='loading')
  i.material-icons(v-else) done
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  data () {
    return {
      loading: true
    }
  },
  computed: {
    formState () {
      if (this.loading) {
        return "Formulaire en cours d'envoi"
      } else {
        return 'Formulaire envoyé'
      }
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

.step-form-send-component span {
  font-size: 2em;
}
</style>
