import { createStore } from 'vuex'
import user from './modules/user'
import doctor from './modules/doctor'

export default createStore({
    modules: {
        user,
        doctor,
    },
})