/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";


// ? === packages =====
import VuePageTitle from "vue-page-title";
import VueProgressBar from "vue-progressbar";
import VModal from "vue-js-modal";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import '../../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css'

// ? === views ====== 
// import Home from "../views/Home.vue";


Vue.use(VueRouter);

const options = {
  color: "#008000",
  failedColor: "#874b4b",
  thickness: "7px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "top",
  inverse: false,
  autoFinish: false
};


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueProgressBar, options);

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

Vue.use(VuePageTitle, {
  prefix: "Online Banking - "
  // suffix: '- My App '
});


Vue.use(VModal, {
  height: "auto",
  width: "auto",
  adaptive: true,
  scrollable: true
});



function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}





const routes = [
  

  {
    path: "/",
    name: "Home",
    component: lazyLoad("Home")
  },
 

];

const router = new VueRouter({
  mode: "history",
  routes,
  base: '/bank/',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
