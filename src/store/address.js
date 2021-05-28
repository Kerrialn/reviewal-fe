import axois from 'axios'
import store from './index'
import { ToastProgrammatic as Toast } from 'buefy'


export default {
  namespaced: true,
  state:{
    addresses: [],
    search: null,
    address: {},
  },
  getters:{
    getAddress(state){
      return state.address
    },
    getSearch(state){
      return state.search
    },
    getAddresses(state){
      return state.addresses
    }
  },
  actions:{
    async store({commit}, form){
      console.log(form);
      store.commit('setLoading', true)
      await axois.post('addresses', form).then((response)=>{
        commit('setAddresses', response.data.addresses)
        commit('setSearch', response.data.search)
        store.commit('setLoading', false)
      })
      store.commit('setLoading', false)
    },
    async search({commit}, form){

      commit('setSearch', form)

      store.commit('setLoading', true)
      await axois.post('search',form).then((response)=>{
        commit('setAddresses', response.data)
        store.commit('setLoading', false)
      })
      .catch((error)=>{
        if (error.response) {
        Toast.open({duration: 5000, message: error.response.data.message, type: 'is-danger'})
        }
      }).finally(()=>{
        store.commit('setLoading', false)
      })
    },
    async fetchAddress({commit}, id){
      store.commit('setLoading', true)
      await axois.get('addresses/' + id ).then((response)=>{
        console.log(response.data);
        commit('setAddress', response.data)
        store.commit('setLoading', false)
      }).catch((error)=>{
        if (error.response) {
        Toast.open({duration: 5000, message: error.response.data.message, type: 'is-danger'})
        }
      })
      store.commit('setLoading', false)
    }
  },
  mutations: {
    setAddress(state, newAddressState){
      state.address = newAddressState
    },
    setSearch(state, newSearchState){
      state.search = newSearchState
    },
    setAddresses(state, newAddressesState){
      state.addresses = newAddressesState
    }
  },
}