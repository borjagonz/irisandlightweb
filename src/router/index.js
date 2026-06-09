import { createRouter, createWebHistory } from "vue-router"

import LandingIrisAndLightComponent from '../components/LandingIrisAndLightComponent.vue';
import LegalView from "../components/LegalView.vue"

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: LandingIrisAndLightComponent
    },
    {
      path: "/legal",
      component: LegalView
    }
  ],

scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
        el: to.hash,
        top: 200,
        behavior: "smooth"
        })
      }, 100)
    })
  }

  return {
    top: 0
  }
}
})

export default router