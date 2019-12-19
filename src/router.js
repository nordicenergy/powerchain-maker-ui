import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome'
import RegisterChooseNetwork from './views/RegisterSideChain/ChooseNetwork'
import InteractWithSideChain from './views/InteractWithSideChain/InteractWithSideChain'
import MintTestTokens from './views/RegisterSideChain/MintTestTokens'
import MintTransactions from './views/RegisterSideChain/MintTransactions'
import ApproveSpender from './views/RegisterSideChain/ApproveSpender'
import InteractApproveSpender from './views/InteractWithSideChain/ApproveSpender'
import ApproveTransactions from './views/RegisterSideChain/ApproveTransactions'
import RegisterChain from './views/RegisterSideChain/RegisterChain'
import RegistrationCompleted from './views/RegisterSideChain/RegistrationCompleted'
import ProvideSidechainId from './views/InteractWithSideChain/ProvideSidechainId'
import Vesting from './views/InteractWithSideChain/Vesting'
import Deposits from './views/InteractWithSideChain/Deposits'
import Mining from './views/InteractWithSideChain/Mining'
import { isNumeric } from './utils'
import VestInChain from './views/InteractWithSideChain/VestInChain'
import VestInChainCompleted from './views/InteractWithSideChain/VestInChainCompleted'
import DepositInChain from './views/InteractWithSideChain/DepositInChain'
import DepositInChainCompleted from './views/InteractWithSideChain/DepositInChainCompleted'
import WithdrawVesting from './views/InteractWithSideChain/WithdrawVesting'
import WithdrawVestingCompleted from './views/InteractWithSideChain/WithdrawVestingCompleted'
import WithdrawDeposit from './views/InteractWithSideChain/WithdrawDeposit'
import WithdrawDepositCompleted from './views/InteractWithSideChain/WithdrawDepositCompleted'
import ConfirmVestInChain from './views/InteractWithSideChain/ConfirmVestInChain'
import ConfirmDepositWithdrawal from './views/InteractWithSideChain/ConfirmDepositWithdrawal'
import InteractMintTestTokens from './views/InteractWithSideChain/MintTestTokens'
import InstallMetaMask from './views/InstallMetaMask'
import AddressAutomator from './views/AddressAutomator'
import MainnetNotAvailable from './views/MainnetNotAvailable'

Vue.use(Router)

export default (ethereum) => {
  const router = new Router({
    routes: [
      {
        path: '/',
        name: 'welcome',
        component: Welcome
      },
      {
        path: '/register/choose-network',
        component: RegisterChooseNetwork,
        name: 'register.network'
      },
      {
        path: '/register/networks/:network/mint-test-tokens',
        component: MintTestTokens,
        name: 'register.mint_test_tokens',
        props: true
      },
      {
        path: '/register/networks/:network/mint-transactions',
        component: MintTransactions,
        name: 'register.minted_test_tokens',
        props: true
      },
      {
        path: '/register/networks/:network/approve-spender',
        component: ApproveSpender,
        name: 'register.approve_spender',
        props: true
      },
      {
        path: '/register/networks/:network/approve-transactions',
        component: ApproveTransactions,
        name: 'register.approve_transactions',
        props: true
      },
      {
        path: '/register/networks/:network/new-chain',
        component: RegisterChain,
        name: 'register.new_chain',
        props: true
      },
      {
        path: '/register/networks/:network/chains/:chain/completed',
        component: RegistrationCompleted,
        name: 'register.completed',
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain',
        name: 'interact',
        component: InteractWithSideChain,
        props: true
      },
      {
        path: '/interact/provide-sidechain-id',
        name: 'interact.provide_sidechain_id',
        component: ProvideSidechainId
      },
      {
        path: '/interact/networks/:network/chains/:chain/vesting',
        name: 'interact.vesting',
        component: Vesting,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/vest-in-chain',
        name: 'interact.vest_in_chain',
        component: VestInChain,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/vest-in-chain-completed',
        name: 'interact.vest_in_chain_completed',
        component: VestInChainCompleted,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/withdraw-vesting',
        name: 'interact.withdraw_vesting',
        component: WithdrawVesting,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/withdraw-vesting-completed',
        name: 'interact.withdraw_vesting_completed',
        component: WithdrawVestingCompleted,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/confirm-vest',
        name: 'interact.confirm_vest',
        component: ConfirmVestInChain,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/deposits',
        name: 'interact.deposits',
        component: Deposits,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/deposit-in-chain',
        name: 'interact.deposit_in_chain',
        component: DepositInChain,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/deposit-in-chain-completed',
        name: 'interact.deposit_in_chain_completed',
        component: DepositInChainCompleted,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/withdraw-deposit',
        name: 'interact.withdraw_deposit',
        component: WithdrawDeposit,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/withdraw-deposit-completed',
        name: 'interact.withdraw_deposit_completed',
        component: WithdrawDepositCompleted,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/confirm-deposit-withdrawal',
        name: 'interact.confirm_deposit_withdrawal',
        component: ConfirmDepositWithdrawal,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/mining',
        name: 'interact.mining',
        component: Mining,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/approve',
        name: 'interact.approve_spender',
        component: InteractApproveSpender,
        props: true
      },
      {
        path: '/interact/networks/:network/chains/:chain/mint-test-tokens',
        name: 'interact.mint_test_tokens',
        component: InteractMintTestTokens,
        props: true
      },
      {
        path: '/install-metamask',
        name: 'install.metamask',
        component: InstallMetaMask
      },
      {
        path: '/address-automator',
        name: 'address.automator',
        component: AddressAutomator
      },
      {
        path: '/information',
        name: 'not_available_on_mainnet',
        component: MainnetNotAvailable
      },
      {
        path: '*',
        redirect: { name: 'welcome' }
      }
    ]
  })

  function validNetworkOrRedirect (to, next, redirectName) {
    const isSpecificNetowrk = to.fullPath.indexOf('networks') !== -1
    if (isSpecificNetowrk) {
      if (!Object.prototype.hasOwnProperty.call(to.params, 'network')) {
        next({ name: redirectName })
      }

      if (to.params.network !== ethereum.getNetworkName()) {
        next({ name: redirectName })
      }
    }
  }

  router.beforeEach((to, from, next) => {
    if (to.name !== 'not_available_on_mainnet') {
      next({ name: 'not_available_on_mainnet' })
    }

    if (ethereum === null && to.name !== 'install.metamask') {
      next({ name: 'install.metamask' })
    }

    const isInteracting = to.matched.some(route => route.name.indexOf('interact') !== -1)
    if (isInteracting) {
      const isSpecificChain = to.fullPath.indexOf('chains') !== -1
      if (isSpecificChain) {
        if (!Object.prototype.hasOwnProperty.call(to.params, 'chain')) {
          next({ name: 'interact.provide_sidechain_id' })
        }
        if (!isNumeric(to.params.chain)) {
          next({ name: 'interact.provide_sidechain_id' })
        }
      }

      validNetworkOrRedirect(to, next, 'interact.provide_sidechain_id')
    }

    const isRegistering = to.matched.some(route => route.name.indexOf('register') !== -1)
    if (isRegistering) {
      validNetworkOrRedirect(to, next, 'register.network')
    }

    next()
  })

  return router
}
