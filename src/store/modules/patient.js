// import axios from 'axios'

// const defaultUrl = "http://localhost:5003/"


export default {
    namespaced: true,
    state: {
        patient: null,
        lstPatient: [],
    },
    getters: {
    },
    actions: {
        async listAll(store) {
                try {
                    // const response = await axios.get(`${defaultUrl}/doctors`)
                    // return response
                    
                    store.state.lstPatient = [
                        { Nome: 'João', email: 'email1@gmail.com', idade: 35 },
                        { Nome: 'Maria', email: 'email2@gmail.com', idade: 22 },
                        { Nome: 'Pedro', email: 'email3@gmail.com', idade: 43 },
                        { Nome: 'Ana', email: 'email4@gmail.com', idade: 12 },
                        { Nome: 'Carlos', email: 'email5@gmail.com', idade: 35 },
                        { Nome: 'Mariana', email: 'email6@gmail.com', idade: 21 },
                        { Nome: 'Lucas', email: 'email7@gmail.com', idade: 28 },
                        { Nome: 'Fernanda', email: 'email8@gmail.com', idade: 35 },
                        { Nome: 'Paulo', email: 'email9@gmail.com', idade: 22 },
                        { Nome: 'Juliana', email: 'email0@gmail.com', idade: 43 },
                        { Nome: 'Gustavo', email: 'email1@gmail.com', idade: 12 },
                        { Nome: 'Camila', email: 'email2@gmail.com', idade: 35 },
                        { Nome: 'Rafael', email: 'email3@gmail.com', idade: 21 },
                        { Nome: 'Patrícia', email: 'email4@gmail.com', idade: 28 },
                        { Nome: 'Rodrigo', email: 'email5@gmail.com', idade: 35 },
                        { Nome: 'Bruna', email: 'email6@gmail.com', idade: 22 },
                        { Nome: 'Fábio', email: 'email7@gmail.com', idade: 43 },
                        { Nome: 'Larissa', email: 'email8@gmail.com', idade: 12 },
                        { Nome: 'Vinícius', email: 'email9@gmail.com', idade: 35 },
                        { Nome: 'Renata', email: 'email0@gmail.com', idade: 21 },
                        { Nome: 'Felipe', email: 'email1@gmail.com', idade: 28 },
                        { Nome: 'Daniela', email: 'email2@gmail.com', idade: 35 },
                        { Nome: 'André', email: 'email3@gmail.com', idade: 22 },
                        { Nome: 'Simone', email: 'email4@gmail.com', idade: 43 },
                        { Nome: 'Thiago', email: 'email5@gmail.com', idade: 12 },
                        { Nome: 'Roberta', email: 'email6@gmail.com', idade: 35 },
                        { Nome: 'Ricardo', email: 'email7@gmail.com', idade: 21 },
                        { Nome: 'Gabriela', email: 'email8@gmail.com', idade: 28 }
                    ]
                    
                } catch (error) {
                    return false
                }
        },
        async addPatient(store) {
            try {
                store.state.patients.push(store.state.patient)
                return true
            } catch (error) {
                return false
            }
        }
    },
    mutations: {
    }
}