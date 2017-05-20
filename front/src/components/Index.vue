<template>
  <div class="index container section">
    <h1>Bienvenue sur SIMO</h1>
    <p>SIMO est un site de simulation et d'explications pour l'immobilier</p>
    
    <div class="divider"></div>

    <h4>Types de ventes</h4>
    <ul>
      <li><router-link :to="{ name: 'LifeLeaseIndex' }">Viager</router-link></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang='scss'>
.index {
  text-align: center;
}
</style>
