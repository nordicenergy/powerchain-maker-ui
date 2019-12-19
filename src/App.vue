<template>
    <main class="flex items-center justify-center w-full overflow-y-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import NavigationRouteLink from './components/NavigationRouteLink'
  import RegisterSteps from './views/RegisterSideChain/RegisterSteps'
  import InteractionSideMenu from './views/InteractWithSideChain/InteractionSideMenu'
  import {etherScanAddress, getpowerChainRegistryAddress} from './utils'
  import Details from './components/Details'
  import {mapGetters} from 'vuex'

  export default {
  inject: ['ethereum'],
  components: { NavigationRouteLink, RegisterSteps, InteractionSideMenu, Details },
  created () {
    this.$store.dispatch('setNetwork', this.ethereum.getNetworkName())
  },
  computed: {
    ...mapGetters([
      'network'
    ]),
    isRegistering () {
      if (!Object.prototype.hasOwnProperty.call(this.$route, 'name')) {
        return false
      }

      return this.$route.name.indexOf('register') !== -1
    },
    isInteracting () {
      if (!Object.prototype.hasOwnProperty.call(this.$route, 'name')) {
        return false
      }

      return this.$route.name.indexOf('interact') !== -1
    },
    smartContractLink () {
      return etherScanAddress(this.network, getpowerChainRegistryAddress(this.network))
    },
    hasChainId () {
      if (!Object.prototype.hasOwnProperty.call(this.$route, 'params')) {
        return false
      }

      if (!Object.prototype.hasOwnProperty.call(this.$route.params, 'chain')) {
        return false
      }

      return this.$route.params.chain
    }
  }
}
</script>
