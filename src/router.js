import Vue from "vue";
import Router from "vue-router";
import DeviceLists from "./pages/DeviceLists.vue";
import DeviceDetail from "./pages/DeviceDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "device",
      component: DeviceLists
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DeviceDetail
    }
  ]
});
