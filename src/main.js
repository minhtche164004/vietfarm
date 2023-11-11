import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Antd from 'ant-design-vue';
// import the package
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueAwesomePaginate from "vue-awesome-paginate";
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
const toastOption = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
}
// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
import "@/assets/css/styles.css"
createApp(App).use(router).use(store).use(Toast, toastOption).use(CoolLightBox).use(Antd).use(VueAwesomePaginate).mount("#app");
