<template>
  <div class="flex flex-col pl-8">
    <router-link :class="changeChainIdActive" :to="{ name: 'interact.provide_sidechain_id' }" class="inline-block text-md mt-8">Change chain id</router-link>
    <div class="flex flex-col" v-if="chain && network">
      <router-link :class="vestingActiveClass" :to="{ name: 'interact.vesting', params: { chain: chain, network: network } }" class="inline-block text-md mt-8">{{ $t('interaction_menu.vesting') }}</router-link>
      <router-link :to="{ name: 'interact.vest_in_chain', params: { chain: chain, network: network } }" class="inline-block text-md text-powerchain-gray mt-4">{{ $t('interaction_menu.vest_in_chain') }}</router-link>
      <router-link :to="{ name: 'interact.withdraw_vesting', params: { chain: chain, network: network } }" class="inline-block text-md text-powerchain-gray mt-4">{{ $t('interaction_menu.withdraw_vesting') }}</router-link>
      <router-link :to="{ name: 'interact.confirm_vest', params: { chain: chain, network: network } }" class="inline-block text-md text-powerchain-gray mt-4">{{ $t('interaction_menu.confirm_vest') }}</router-link>
      <router-link :class="depositsActiveClass" :to="{ name: 'interact.deposits', params: { chain: chain, network: network } }" class="inline-block text-md text-white mt-8">{{ $t('interaction_menu.deposits') }}</router-link>
      <router-link :to="{ name: 'interact.deposit_in_chain', params: { chain: chain, network: network } }" class="inline-block text-md text-powerchain-gray mt-4">{{ $t('interaction_menu.deposit_in_chain') }}</router-link>
      <router-link :to="{ name: 'interact.withdraw_deposit', params: { chain: chain, network: network } }" class="inline-block text-md text-powerchain-gray mt-4">{{ $t('interaction_menu.withdraw_deposit') }}</router-link>
      <router-link :to="{ name: 'interact.confirm_deposit_withdrawal', params: { chain: chain, network: network } }" class="inline-block text-md text-powerchain-gray mt-4">{{ $t('interaction_menu.confirm_deposit_withdrawal') }}</router-link>
      <router-link :class="miningActiveClass" :to="{ name: 'interact.mining', params: { chain: chain, network: network } }" class="inline-block text-md text-white mt-8">{{ $t('interaction_menu.mining') }}</router-link>
      <router-link :class="approveActiveClass" :to="{ name: 'interact.approve_spender', params: { chain: chain, network: network } }" class="inline-block text-md text-white mt-8">Approve</router-link>
      <router-link v-if="network !== 'main'" :class="mintActiveClass" :to="{ name: 'interact.mint_test_tokens', params: { chain: chain, network: network } }" class="inline-block text-md text-white mt-8">Mint</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    network () {
      if (!Object.prototype.hasOwnProperty.call(this.$route, 'params')) {
        return false
      }

      if (!Object.prototype.hasOwnProperty.call(this.$route.params, 'network')) {
        return false
      }

      return this.$route.params.network
    },
    chain () {
      if (!Object.prototype.hasOwnProperty.call(this.$route, 'params')) {
        return false
      }

      if (!Object.prototype.hasOwnProperty.call(this.$route.params, 'chain')) {
        return false
      }

      return this.$route.params.chain
    },
    vestingActiveClass () {
      return this.isOneOfRoutes(['interact.vesting', 'interact.vest_in_chain', 'interact.withdraw_vesting', 'interact.confirm_vest']) ? 'text-sidebar-active' : 'text-white'
    },
    depositsActiveClass () {
      return this.isOneOfRoutes(['interact.deposits', 'interact.deposit_in_chain', 'interact.withdraw_deposit', 'interact.confirm_deposit_withdrawal']) ? 'text-sidebar-active' : 'text-white'
    },
    miningActiveClass () {
      return this.isOneOfRoutes(['interact.mining']) ? 'text-sidebar-active' : 'text-white'
    },
    approveActiveClass () {
      return this.isOneOfRoutes(['interact.approve_spender']) ? 'text-sidebar-active' : 'text-white'
    },
    changeChainIdActive () {
      return this.isOneOfRoutes(['interact.provide_sidechain_id']) ? 'text-sidebar-active' : 'text-white'
    },
    mintActiveClass () {
      return this.isOneOfRoutes(['interact.mint_test_tokens']) ? 'text-sidebar-active' : 'text-white'
    }
  },
  methods: {
    isOneOfRoutes (routes) {
      if (!Object.prototype.hasOwnProperty.call(this.$route, 'params')) {
        return false
      }

      const routeName = this.$route.name;

      return routes.indexOf(routeName) !== -1
    }
  }
}
</script>
