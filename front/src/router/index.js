import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import LifeLeaseIndex from '@/components/life-lease/LifeLeaseIndex'
import LifeLeaseExponation from '@/components/life-lease/LifeLeaseExponation'
import LifeLeaseEstimation from '@/components/life-lease/LifeLeaseEstimation'
import LifeLeaseAnnuity from '@/components/life-lease/LifeLeaseAnnuity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/life-lease',
      name: 'LifeLeaseIndex',
      component: LifeLeaseIndex
    },
    {
      path: '/life-lease/exponation',
      name: 'LifeLeaseExponation',
      component: LifeLeaseExponation
    },
    {
      path: '/life-lease/estimation',
      name: 'LifeLeaseEstimation',
      component: LifeLeaseEstimation
    },
    {
      path: '/life-lease/annuity',
      name: 'LifeLeaseAnnuity',
      component: LifeLeaseAnnuity
    }
  ]
})
