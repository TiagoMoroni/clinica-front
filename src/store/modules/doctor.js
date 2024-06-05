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
        async get() {
            try {
                const response = await axios.get(`${defaultUrl}/doctor`)
                return response
            } catch (error) {
                return false
            }
        },

    },
    mutations: {
    }
}