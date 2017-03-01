<template>
  <div class='step-four-component'>
    <h5>Récapitulatif de ma demande</h5>

    <div class='row'>
      <div class='col s12'>
        <p>Personne concernée : {{ concernedPerson }}</p>
        <p>Email : {{ form.email }}</p>
        <p>Téléphone : {{ form.phone }}</p>
        <p>Date de naissance : {{ form.birthDate }}</p>
        <p>Budget estimé : {{ form.budget }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['form'],
  computed: {
    concernedPerson () {
      let civility = this.displayCivility(this.form.civility)
      let fullname = `${civility} ${this.form.firstname} ${this.form.lastname}`

      if (this.form.applicant !== 'self') {
        civility = this.displayCivility(this.form.applicantCivility)
        fullname = `${civility} ${this.form.applicantFirstname} ${this.form.applicantLastname}`
      }

      return fullname
    }
  },
  methods: {
    displayCivility (civility) {
      return { female: 'Mme', male: 'M' }[civility]
    }
  }
}
</script>

<style scoped>
</style>
