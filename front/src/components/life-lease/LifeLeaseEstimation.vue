<template>
  <div class="life-lease-estimation container section">

    <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <router-link :to="{ name: 'LifeLeaseIndex' }" class="breadcrumb">Viager</router-link>
          <router-link :to="{ name: 'LifeLeaseExponation' }" class="breadcrumb">Comment estimer ?</router-link>
        </div>
      </div>
    </nav>

    <h2 class="center-align">Estimation de la valeur</h2>

    <form class="col s12">
        <div class="row">
          <div class="input-field col s3">
            <input
              id="venal-value" type="number" class="validate"
              v-model.trim="venalValue"
            >
            <label for="venal-value" data-error="entrez un chiffre">Valeur vénale</label>
          </div>
          <div class="input-field col s3">
            <input
              id="rent" type="number" class="validate"
              v-model.trim="rent"
            >
            <label for="rent" data-error="entrez un chiffre">Loyer mensuel</label>
          </div>
          <div class="input-field col s3">
            <input
              id="age" type="number" class="validate"
              v-model.trim="age"
            >
            <label for="age" data-error="entrez un chiffre">Age du vendeur</label>
          </div>
          <div class="col s3 switch center-align">
            <label>
              Libre
              <input type="checkbox" v-model="occupied" value="false">
              <span class="lever"></span>
              Occupé
            </label>
          </div>
        </div>

      </form>

      <div class="simu-result" v-if="value && lifeExp">
        <div>la valeur du viager est de <strong>{{ value }} €</strong></div>
        <div>l'espérance de vie du vendeur est de <strong>{{ lifeExp }} ans</strong></div>
      </div>
  </div>
</template>

<script>
// sources
// http://www.insee.fr/fr/statistiques/2045139?sommaire=2045470&q=table+mortalit%C3%A9
var LIFE_EXP = {
  60: 27.68,
  61: 26.80,
  62: 25.92,
  63: 25.05,
  64: 24.18,
  65: 23.31,
  66: 22.45,
  67: 21.58,
  68: 20.73,
  69: 19.88,
  70: 19.03,
  71: 18.20,
  72: 17.36,
  73: 16.54,
  74: 15.73,
  75: 14.92,
  76: 14.13,
  77: 13.35,
  78: 12.58,
  79: 11.83,
  80: 11.10,
  81: 10.38,
  82: 9.69,
  83: 9.02,
  84: 8.39,
  85: 7.78,
  86: 7.20,
  87: 6.66,
  88: 6.15,
  89: 5.66,
  90: 5.21,
  91: 4.80,
  92: 4.42,
  93: 4.08,
  94: 3.76,
  95: 3.46,
  96: 3.20,
  97: 2.97,
  98: 2.76,
  99: 2.58,
  100: 2.44
}

export default {
  name: 'life-lease-estimation',

  data () {
    return {
      message: '',
      venalValue: '',
      age: '',
      bouquet: '',
      rent: '',
      occupied: 'true'
    }
  },

  computed: {
    value: function () {
      if (this.venalValue && this.age) {
        var val = this.venalValue
        if (this.occupied) {
          val -= 12 * LIFE_EXP[this.age] * this.rent
        }
        return val.toFixed(2)
      }
    },
    lifeExp: function () {
      if (this.age && this.age >= 60) {
        return LIFE_EXP[this.age]
      }
    }
  }
}
</script>

<style scoped lang='scss'>
  nav {
    padding-left: 10px;
  }
  form .row:last-child {
    display: flex;
    align-items: baseline;
  }
</style>
