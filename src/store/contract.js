import store from './index'
import ContractConfig from '@/components/ContractForm/ContractConfig'
import Landlord from '@/components/ContractForm/Landlord'
import Tenant from '@/components/ContractForm/Tenant'
import Property from '@/components/ContractForm/Property'
import { ToastProgrammatic as Toast } from 'buefy'
import axois from 'axios'

export default {
  namespaced: true,
  state:{
    stages: {
      isLast: false,
      current: 1,
      controls:{
        previous:{
          isDisabled: false
        },
        next:{
          isDisabled: false
        },
      },
      steps: [
        {
          id: 1,
          label: "Contract",
          component: ContractConfig,
          displayed: true,
        },
        {
          id: 2,
          label: "Landlord",
          component: Landlord,
          displayed: true,
        },
        {
          id: 3,
          label: "Tenant",
          component: Tenant,
          displayed: true,
        },
        {
          id: 4,
          label: "Property",
          component: Property,
          displayed: true,
        },
      ],
    },
    contract:{
      landlord: {},
      tenant: {},
      property: {},
      config: {
        duration: 6
      }
    }
  },
  getters:{
    getStages(state){
      return state.stages
    },
    getActive(state){
      return state.stages.active
    },
    isPreviousDisabled(state){
      return state.stages.controls.previous.isDisabled
    },
    isNextDisabled(state){
      return state.stages.controls.next.isDisabled
    },
  },
  actions:{
    previous({commit, state}) {
      if (!state.stages.controls.previous.isDisabled) {
        commit('setActive', state.stages.current-- );
      }
    },
    next({commit, state}) {
      if (!state.stages.controls.next.isDisabled) {
        commit('setActive', state.stages.current++ );
      }
    },
    async submit(_, form){
        store.commit('setLoading', true)
        return await axois.post('generate', form).then(()=>{
          Toast.open({
            message: `Review created <b>successfully</b>`,
            type: 'is-success'
          })
          store.commit('setLoading', false)
        }).catch((e)=>{
          console.log(e)
          Toast.open({
            message: e.message,
            type: 'is-danger'
          })
        }).finally(()=>{
          store.commit('setLoading', false)
        })
      },
      resetForm(){
        this.setLandlord({})
        this.setTenant({})
        this.setProperty({})
        this.setContractConfig({})
      }
    },
  mutations: {
    setActive(state, newActiveState){
      state.stages.active = newActiveState
    },
    setIsLast(state, newIsLastState){
      state.stages.isLast = newIsLastState
    },
    setIsPreviousDisabled(state, newPreviousState){
      state.stages.controls.previous.isDisabled = newPreviousState
    },
    setIsNextDisabled(state, newNextState){
      state.stages.controls.next.isDisabled = newNextState
    },
    setContractConfig(state, newContractConfigState){
      state.contract.config = newContractConfigState
    },
    setLandlord(state, newLandlordState){
      state.contract.landlord = newLandlordState
    },
    setTenant(state, newTenantState){
      state.contract.tenant = newTenantState
    },
    setProperty(state, newPropertyState){
      state.contract.property = newPropertyState
    }
  },
}