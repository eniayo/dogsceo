import { createStore } from 'vuex'
import dogs from './modules/dogs'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    dogs
  },
  strict: debug,
})