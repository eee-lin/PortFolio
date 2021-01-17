import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/arts",
    name: "arts",
    component: () =>
      import(/* webpackChunkName: "works" */ "../views/Arts.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
  },
  {
    path: "/skill",
    name: "skill",
    component: () =>
      import(/* webpackChunkName: "skill" */ "../views/Skill.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/manage",
    name: "manage",
    component: () =>
      import(/* webpackChunkName: "manage" */ "../views/Manage.vue"),
  },
  // {
  //   path: "/signup",
  //   name: "signup",
  //   component: () =>
  //     import(/* webpackChunkName: "manage" */ "@/components/Signup"),
  //   children: [
  //     {
  //       path: "manege",
  //       component: () =>
  //         import(/* webpackChunkName: "manage" */ "../views/Manage.vue"),
  //       // メタフィールド
  //       meta: { requiresAuth: true },
  //     },
  //   ],
  // },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "manage" */ "@/components/Signup"),
  },
]

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((page) => page.meta.isPublic) || Store.state.auth.token) {
//     next()
//   } else {
//     next("/login")
//   }
// })

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
