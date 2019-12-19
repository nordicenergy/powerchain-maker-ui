<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">Confirm vest in chain</h1>
    </div>
    <div class="mt-8">
      <span class="uppercase text-sm text-powerchain-gray font-medium">Chain id:</span>
      <span class="uppercase text-sm ml-2">{{ chain }}</span>
    </div>
    <div class="mt-2">
      <router-link class="inline-block mt-4 text-sm font-medium text-secondary hover:underline" :to="{ name: 'interact.provide_sidechain_id' }">Change chain id</router-link>
    </div>
    <div v-if="lastConfirmVestInChain" class="mt-8">
      <div class="mt-2">
        <div class="flex items-center">
          <Check size="xxs"></Check>
          <p class="ml-4 text-md font-bold">Vesting successfully confirmed</p>
        </div>
        <p class="ml-8 text-md text-powerchain-gray">
          <a class="hover:text-secondary" :href="etherScan(network, lastConfirmVestInChain.transaction)" target="_blank">{{
            lastConfirmVestInChain.transaction.from
            }}</a>
        </p>
      </div>
    </div>
    <div class="relative mt-12 flex justify-between">
      <BackButton @click.native="previous">Back to Vesting menu</BackButton>
      <ConfirmButton @click.native="handleAction">Confirm vest</ConfirmButton>
      <Tooltip v-if="errorMessage" class="absolute top-0 right-0 -mr-48 -mt-6">
        <template slot="headline">MetaMask Error</template>
        <template slot="text">{{ errorMessage }}</template>
      </Tooltip>
    </div>
  </div>
</template>

<script>
  import ConfirmButton from '../../components/ConfirmButton'
  import BackButton from '../../components/BackButton'
  import WithEtherScan from '../../components/WithEtherScan'
  import Check from '../../components/Check'
  import Tooltip from '../../components/Tooltip'
  import WithErrorMessage from '../../components/WithErrorMessage'

  export default {
  mixins: [WithEtherScan, WithErrorMessage],
  inject: ['ethereum'],
  props: {
    chain: {
      type: String
    },
    network: {
      type: String
    }
  },
  components: { BackButton, ConfirmButton, Check, Tooltip },
  data () {
    return {
      tokens: null,
      processing: false,
      lastConfirmVestInChain: null
    }
  },
  methods: {
    async handleAction () {
      this.processing = true;
      try {
        const response = await this.ethereum.confirmVestInChain(this.chain);
        this.lastConfirmVestInChain = {
          chain: this.chain,
          transaction: response
        }
      } catch (e) {
        this.handleError()
      } finally {
        this.processing = false
      }
    },
    previous () {
      this.$router.push({ name: 'interact.vesting', params: { chain: this.chain, network: this.network } })
    }
  }
}
</script>
