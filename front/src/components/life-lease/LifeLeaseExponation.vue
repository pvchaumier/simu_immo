<template>
  <div class="life-lease-exponation container section">

    <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <router-link :to="{ name: 'LifeLeaseIndex' }" class="breadcrumb">Viager</router-link>
          <router-link :to="{ name: 'LifeLeaseExponation' }" class="breadcrumb">Comment estimer ?</router-link>
        </div>
      </div>
    </nav>

    <h2 class="center-align">Estimation</h2>

    <p>Voici quelques définitions pour commencer:</p>
    <ul>
      <li><strong>valeur vénale</strong> (VV): c'est le prix d'achat si le bien était vendu tout de suite</li>
      <li><strong>décôte</strong> (D): c'est le montant pour prendre en compte l'occupation du logement (si occupation il y a)</li>
      <li><strong>bouquet</strong> (B): c'est la somme versée au moment de la signature du viager</li>
      <li><strong>rente</strong> (R): c'est le montant donné par mois au vendeur</li>
    </ul>

    <p>Pour estimer un viager, il faut calculer deux points:</p>
    <ul>
      <li>la <strong>valeur du viager</strong>: montant qu'on va devoir payé</li>
      <li>la <strong>répartition entre bouquet et rente</strong>: comment va se dérouler le paiement</li>
    </ul>


    <div class="divider"></div>
    <h4>Valeur d'un viager</h4>

    <p>La valeur d'un viager correspond à la valeur vénale moins la décôte. Par exemple, si un appartement est évalué à 100 000€ et que la décôte est de 40 000€, l'acheteur va devoir payé 100 000 - 40 000 = 60 000€</p>

    <p>Estimer la valeur vénale est le travail d'expert immobilier. Cela dit, certaines plateformes comme <a href="http://www.meilleursagents.com/">Meilleurs agents</a> peuvent fournir une première approximation.</p>

    <p>Estimer la décôte est plus simple: elle correspond à la valeur d'usage. Pour faire simple, la valeur d'usage est égale au montant du loyer que paierait un locataire s'il habitait dans l'appartement durant l'espérance de vie restant au vendeur.</p>

    <p>Prenons un exemple. Une personne de 80 ans souhaite vendre son appartement en viager. L'appartement est estimé à 300 000 € et le loyer est de 1000€/mois soit 12 000€/an. D'après les tables de l'<a href="http://www.insee.fr/fr/statistiques/2045139?sommaire=2045470&q=table+mortalit%C3%A9">INSEE</a> le vendeur a une espérance de vie de 11,10 ans. Ainsi, la décôte sera de 11,1 * 12 000 = 133 200€. La valeur du viager est donc de 300 000 - 133 200 = 166 800€.</p>

    <p>Si le viager est libre, il n'y a bien évidemment pas de décôte et la valeur du bien correspond à la valeur vénale.</p>


    <div class="divider"></div>
    <h4>Répartition entre bouquet et rente</h4>

    <p>Encore une fois, l'estimation se fait à l'aide de l'espérance de vie du vendeur. Il faut que le bouquet plus la rente donnée durant l'espérance de vie du vendeur correspondent à la valeur du viager.</p>

    <p>En reprenant l'exemple précédent, la valeur est de 166 800€. Ainsi, le bouquet plus la rente payée durant 11,1 ans doit correspondre à cette valeur.</p>

    <ul>
      <li>Cas 1: pas de rente, la valeur du bouquet sera de 166 800€.</li>
      <li>Cas 2: pas de bouquet, la valeur de la rente sera de 166 800 / 11,1 = 15 027€/an = 1 252€/mois.</li>
      <li>Cas 3: le plus fréquent il s'agit d'un mélange des deux. Par exemple pour un bouquet de 50 000€, la rente devra être de 876€/mois.</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'life-lease-exponation'
}
</script>

<style scoped lang='scss'>
  li {
    margin-left: 10px;
  }
  strong {
    font-weight: 600;
  }
  nav {
    padding-left: 10px;
  }
</style>
