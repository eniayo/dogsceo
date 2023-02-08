import index from "../../api";
import axios from 'axios';

const state = () => ({
    dogs: [],
    currentDog: null
  })
  
  // getters
  const getters = {
    allDogs: (state) => {
        return state.dogs;
    },
    getCurrentDog: (state) => {
        return state.currentDog
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
        
        await axios.get('https://dog.ceo/api/breeds/image/random/50')
        .then( response => {
            const dogs50_2 = response.data.message;
            console.log('second', dogs50_2)

            commit('setDogs', {
                dogs50,
                dogs50_2
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
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
        state.currentDog = payload.dog
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }