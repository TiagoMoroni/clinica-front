import axios from 'axios'

const defaultUrl = "http://localhost:5003/" 

export default {
    namespaced: true,
    state: {
        user: {
            userName: null,
            password: null
        },
        isAuthenticated: false,
        isRegister: false
    },
    getters: {
    },
    actions: {
        async login(store) { 
            try {
                const response = await axios.post(`${defaultUrl}/login`, {userName: store.state.userName, password: store.state.password})
                localStorage.setItem('token', response.data.token)
                store.state.isAuthenticated = true
                return true
            }
            catch (error) {
                return false
            }
        },
        async signIn(store) {
            try {
                const response = await axios.post('/register', {userName: store.state.userName, password: store.state.password})
                localStorage.setItem('token', response.data.token)
                store.state.isAuthenticated = true
                return true
            }
            catch (error) {
                return false
            }
        },
        async logout(store) {
            localStorage.removeItem('token')
            store.state.isAuthenticated = false
        }
    },
    mutations: {
    }
}