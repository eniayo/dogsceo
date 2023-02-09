import axios from 'axios';

let currentDog = JSON.parse(localStorage.getItem('currentDog'));
const state = () => ({
    dogs: [],
    currentDog: currentDog ? currentDog : null,
    loading: false,
    query: ""
  })
  
  // getters
  const getters = {
    allDogs: (state) => {
        return state.dogs.filter(dog => {
            return dog.name.toLowerCase().includes(state.query.toLowerCase())
        });
    },
    getCurrentDog: (state) => {
        return state.currentDog;
    },
    getSearchQuery: (state) => {
        return state.query;
    }
  }
  
  // actions
  const actions = {
    async get50Dogs () {
        return await axios.get('https://dog.ceo/api/breeds/image/random/50')
        .then( response => {
            return response.data.message
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },
    async getAllDogs ({ dispatch, commit }) {
        const dogs50 = await dispatch('get50Dogs')
        console.log('first', dogs50)
        commit('toggleLoader', { status: true})

        await axios.get('https://dog.ceo/api/breeds/image/random/50')
        .then( response => {
            const dogs50_2 = response.data.message;
            console.log('second', dogs50_2)

            commit('setDogs', {
                dogs50,
                dogs50_2
            })
            commit('toggleLoader', { status: false})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    },

    async searchDogs({ commit}, query){
        await commit('setSearchDogs', query)
    }
  }
  
  // mutations
  const mutations = {
    setDogs (state, payload) {
      const dogs = payload.dogs50.concat(payload.dogs50_2);
      state.dogs = dogs.map( value => {
        const nameURL = value.replace("https://images.dog.ceo/breeds/", "");

        return {
            'url': value,
            'name': nameURL.split("/")[0]
        }
      })
    },
    setCurrentDog(state, payload) {
        localStorage.setItem('currentDog', JSON.stringify(payload.dog));
        state.currentDog = payload.dog
    },
    toggleLoader(state, payload){
        state.loading = payload.status
    },
    setSearchDogs(state, query){
        state.query = query
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }