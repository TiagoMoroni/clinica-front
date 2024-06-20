
export default {
    namespaced: true,
    state: {
        user: {
            userName: null,
        },
        lstUsers: [],
        isAuthenticated: false,
        isRegister: false
    },
    getters: {
    },
    actions: {
        async listAll(store) {
            try {
                // const response = await axios.get(`${defaultUrl}/doctors`)
                // return response
                store.state.lstUsers = [
                    { id: 1, userName: 'João', role: 0 },
                    { id: 2, userName: 'Maria', role: 1 },
                    { id: 3, userName: 'Pedro', role: 0 },
                    { id: 4, userName: 'Ana', role: 1 },
                    { id: 5, userName: 'Carlos', role: 0 },
                    { id: 6, userName: 'Mariana', role: 1 },
                    { id: 7, userName: 'Lucas', role: 0 },
                ]
                
            } catch (error) {
                return false
            }
        },
        async login(store) { 
            try {
                console.log(this)
                const response = await this.axios.post(`/api/login`, {userName: store.state.userName, password: store.state.password})
                localStorage.setItem('token', response.data.token)
                this.axios.defaults.headers.common["authorization"] = response.data.token;
                store.state.isAuthenticated = true
                return true
            }
            catch (error) {
                return false
            }
        },
        async getEmployee(store, id){
            try {
                const response = await this.axios.get(`/api/employee/${id}`)
                store.state.user = response.data
                return true
            } catch (error) {
                return false
            }
        },
        async signIn(store) {
            try {
                const response = await this.axios.post('/register', {userName: store.state.userName, password: store.state.password})
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
        },
        async addEmployee(store) {
            try {
                await this.axios.post(`/api/employee/`, store.state.user)
                return true
            } catch (error) {
                return false
            }
        }
    },
    mutations: {
    }
}