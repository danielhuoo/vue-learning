import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.component("namelist", {
	template: "<li>My name is {{myName.v}}</li>",
	props: ["myName"]
});

new Vue({
	render: h => h(App)
}).$mount("#app");
