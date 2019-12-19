import Vue from 'vue'
import Vuex from 'vuex'
import {APPROVE, CONFIRM_VEST, DEPOSIT, MINT, REGISTER, VEST, WITHDRAW_DEPOST, WITHDRAW_VEST} from './transactionTypes'
import config from './config'
import VuexPersistance from 'vuex-persist'

const vuexLocal = new VuexPersistance({
  key: `powerchain-sidechain-manager_v_${config.version}`,
  storage: window.localStorage
});

Vue.use(Vuex);

const SET_NETWORK = 'set_network';
const SET_APPROVAL = 'set_approval';
const SET_VEST_IN_CHAIN = 'set_vest_in_chain';
const SET_WITHDRAW_VEST_IN_CHAIN = 'set_withdraw_vest_in_chain';
const SET_CONFIRM_VEST = 'set_confirm_vest';
const SET_DEPOSIT_IN_CHAIN = 'set_deposit_in_chain';
const SET_WITHDRAW_DEPOSIT_IN_CHAIN = 'set_withdraw_deposit_in_chain';
const ADD_MINT = 'add_mint';
const ADD_TRANSACTION = 'add_transaction';
const ADD_REGISTRATION = 'add_registration';

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    network: null,
    transactions: [],
    mints: [],
    registrations: [],
    lastApproval: null,
    lastVestInChain: null,
    lastConfirmVestInChain: null,
    lastWithdrawVestInChain: null,
    lastDepositInChain: null,
    lastWithdrawDepositInChain: null
  },
  mutations: {
    [SET_NETWORK] (state, network) {
      state.network = network
    },
    [ADD_MINT] (state, mint) {
      state.mints.push(mint)
    },
    [ADD_TRANSACTION] (state, payload) {
      state.transactions.push({
        type: payload.type,
        transaction: payload.transaction
      })
    },
    [SET_APPROVAL] (state, transaction) {
      state.lastApproval = transaction
    },
    [ADD_REGISTRATION] (state, transaction) {
      state.registrations.push(transaction)
    },
    [SET_VEST_IN_CHAIN] (state, transaction) {
      state.lastVestInChain = transaction
    },
    [SET_WITHDRAW_VEST_IN_CHAIN] (state, transaction) {
      state.lastWithdrawVestInChain = transaction
    },
    [SET_CONFIRM_VEST] (state, transaction) {
      state.lastConfirmVestInChain = transaction
    },
    [SET_DEPOSIT_IN_CHAIN] (state, transaction) {
      state.lastDepositInChain = transaction
    },
    [SET_WITHDRAW_DEPOSIT_IN_CHAIN] (state, transaction) {
      state.lastWithdrawDepositInChain = transaction
    }
  },
  actions: {
    setNetwork ({ commit }, network) {
      commit(SET_NETWORK, network)
    },
    addMint ({ commit }, mint) {
      commit(ADD_MINT, mint);
      commit(ADD_TRANSACTION, {
        type: MINT,
        transaction: mint
      })
    },
    addApproval ({ commit }, approval) {
      commit(SET_APPROVAL, approval);
      commit(ADD_TRANSACTION, {
        type: APPROVE,
        transaction: approval
      })
    },
    addRegistration ({ commit }, registration) {
      commit(ADD_REGISTRATION, registration);
      commit(ADD_TRANSACTION, {
        type: REGISTER,
        transaction: registration
      })
    },
    setVestInChain ({ commit }, vestInChain) {
      commit(SET_VEST_IN_CHAIN, vestInChain);
      commit(ADD_TRANSACTION, {
        type: VEST,
        transaction: vestInChain
      })
    },
    setWithdrawVestInChain ({ commit }, withdrawVestInChain) {
      commit(SET_WITHDRAW_VEST_IN_CHAIN, withdrawVestInChain);
      commit(ADD_TRANSACTION, {
        type: WITHDRAW_VEST,
        transaction: withdrawVestInChain
      })
    },
    setConfirmVestInChain ({ commit }, confirmVestInChain) {
      commit(SET_CONFIRM_VEST, confirmVestInChain);
      commit(ADD_TRANSACTION, {
        type: CONFIRM_VEST,
        transaction: confirmVestInChain
      })
    },
    setDeposit ({ commit }, deposit) {
      commit(SET_DEPOSIT_IN_CHAIN, deposit);
      commit(ADD_TRANSACTION, {
        type: DEPOSIT,
        transaction: deposit
      })
    },
    setWithdrawDepositInChain ({ commit }, withdrawDeposit) {
      commit(SET_WITHDRAW_DEPOSIT_IN_CHAIN, withdrawDeposit);
      commit(ADD_TRANSACTION, {
        type: WITHDRAW_DEPOST,
        transaction: withdrawDeposit
      })
    }
  },
  getters: {
    network: state => state.network,
    mints: state => state.mints,
    lastApproval: state => state.lastApproval,
    lastVestInChain: state => state.lastVestInChain,
    lastConfirmVestInChain: state => state.lastConfirmVestInChain,
    lastWithdrawVestInChain: state => state.lastWithdrawVestInChain,
    lastDepositInChain: state => state.lastDepositInChain,
    lastWithdrawDepositInChain: state => state.lastWithdrawDepositInChain,
    registrations: state => state.registrations
  }
})
