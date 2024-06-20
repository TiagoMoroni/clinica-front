import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios';
import VueAxios from 'vue-axios';

loadFonts()

const axiosInstance = axios.create({
    baseURL: "https://vocal-snail-meet.ngrok-free.app",
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.response.use((response) => {
    return response
}, async (error) => {
    if (401 != error.response.status && Object.prototype.hasOwnProperty.call(error, "message"))
        return Promise.reject(error)

    if (!error.response) {
        router.push("/login")
        return Promise.reject(error)
    }

    if (401 === error.response.status)
        router.push("/login")
    return Promise.reject(error)
})

axiosInstance.interceptors.request.use(async config => {
    let newToken = localStorage.getItem("token");
    let auth = null
    if (config.headers.common.Authorization) {
        auth = config.headers.common.Authorization.split("Bearer ")[1]
    }
    if (newToken && auth && newToken != auth) {
        config.headers.common.Authorization = "Bearer " + newToken
    }
    // 	const source = CancelToken.source()
    // 	config.CancelToken = source.token
    // 	if (!(await store.dispatch("login/check")) && store.state.login.userLogged){
    // 		source.cancel("sessão expirou")
    // 		router.push("/logoff")
    // 	}
    return config
}, error => {
    return Promise.reject(error)
})

store.axios = axios;

const app = createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)

app.config.globalProperties.$axios = [...axiosInstance];

app.use(VueAxios, axios).use(store).use(router).mount('#app');
