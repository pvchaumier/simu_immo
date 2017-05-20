<template>
  <div class="life-lease-index container section">

    <h2 class="center-align">Présentation</h2>

    <p>Un <a href="https://fr.wikipedia.org/wiki/Vente_en_viager_d%27un_bien_immobilier_en_France">viager</a> (Wikipedia) est un type de vente immobilière s'étalant sur la vie du vendeur.</p>

    <p>Je ne ferai pas une explication globale des avantages/inconvénients de l'achat d'un viager, de nombreux sites le font. En revanche voici quelques explications sur l'évaluation d'un viager et un simulateur pour calculer bouquet et rente.</p>

    <ul>
      <li><router-link :to="{ name: 'LifeLeaseExponation' }">Comment estimer un viager</router-link></li>
      <li><router-link :to="{ name: 'LifeLeaseEstimation' }">Estimation de la valeur</router-link></li>
      <li><router-link :to="{ name: 'LifeLeaseAnnuity' }">Calculer une rente</router-link></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'life-lease-index'
}
</script>

<style scoped lang='scss'>

</style>
