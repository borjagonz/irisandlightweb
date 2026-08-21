import {
  createRouter,
  createWebHistory,
  createMemoryHistory
} from "vue-router"

import LandingIrisAndLightComponent from "../components/LandingIrisAndLightComponent.vue"
import LegalView from "../components/LegalView.vue"
import MirandaComponent from "@/components/MirandaComponent.vue"
import LandingSydneyComponent from "../components/LandingSydneyComponent.vue"


// ======================================================
// ROUTES
// ======================================================

export const routes = [

  {
    path: "/",

    component: LandingIrisAndLightComponent,

    meta: {
      title: "Iris & Light",

      description:
        "Iris & Light creates high-resolution iris photography and personalised eye artwork.",

      canonical:
        "https://irisandlight.ai/"
    }
  },


  {
    path: "/miranda",

    component: MirandaComponent,

    meta: {
      title:
        "Iris & Light — Miranda",

      description:
        "Iris photography and personalised eye artwork at Iris & Light Miranda.",

      canonical:
        "https://irisandlight.ai/miranda"
    }
  },


  {
    path: "/sydney",

    component: LandingSydneyComponent,

    meta: {
      title:
        "Iris Photography Sydney | Personalised Eye Art | Iris & Light",

      description:
        "Iris & Light creates high-resolution iris photography and personalised eye artwork for individuals, couples and families in Sydney. Visit our Miranda studio.",

      canonical:
        "https://irisandlight.ai/sydney"
    }
  },


  {
    path: "/legal",

    component: LegalView,

    meta: {
      title:
        "Legal Notice & Privacy Policy | Iris & Light",

      description:
        "Legal notice and privacy policy for Iris & Light.",

      canonical:
        "https://irisandlight.ai/legal"
    }
  }

]


// ======================================================
// ROUTER
// ======================================================

const router = createRouter({

  history: import.meta.env.SSR
    ? createMemoryHistory()
    : createWebHistory(),

  routes,


  // ====================================================
  // SCROLL BEHAVIOR
  // ====================================================

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


// ======================================================
// META PIXEL — CLIENT SIDE NAVIGATION
// ======================================================

router.afterEach(() => {

  if (
    typeof window !== "undefined" &&
    window.fbq
  ) {

    window.fbq(
      "track",
      "PageView"
    )

  }

})


export default router