<template>
  <div>
    <div class="flex flex-col items-center">
      <span class="text-powerchain-gray text-sm font-medium">{{ $t('step') }} {{ stepNumber }}/{{ totalSteps }}</span>
      <h1 class="font-powerchain text-3xl font-bold">{{ $t('headline.approve_spender') }}</h1>
      <p class="mt-2 text-powerchain-gray font-medium"
         v-html="$t('approve.smart_contract', { smartContractLink: smartContractLink } )"></p>
      <p class="mt-2 text-powerchain-gray font-medium">
        {{ $t('approve.skip.first') }}
        <router-link class="text-secondary hover:underline"
                     :to="{ name: 'register.new_chain', params: { network: network }}">{{
          $t('approve.skip.second') }}
        </router-link>
      </p>
      <div class="mt-8 w-3/4 mx-auto">
        <label v-if="!processing" class="text-xs text-powerchain-gray font-medium">{{ $t('label.tokens') }}</label>
        <label v-else class="text-xs text-powerchain-gray font-medium">{{ $t('approve.approving_spender') }}</label>
        <div class="relative">
          <ApproveSpenderInput @approve="handleApproval" v-model="tokens" :loading="processing"
                               placeholder="NET 0"></ApproveSpenderInput>
          <Tooltip v-if="errorMessage" class="absolute top-0 right-0 -mr-48 -mt-6">
            <template slot="headline">MetaMask Error</template>
            <template slot="text">{{ errorMessage }}</template>
          </Tooltip>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton v-if="network === 'main'" @click.native="previousChooseNetwork">{{ $t('button.choose_network') }}</BackButton>
      <BackButton v-if="network === 'ropsten'" @click.native="previousMint">{{ $t('button.mint_tokens') }}</BackButton>
      <NextButton @click.native="next">{{ $t('button.register_chain') }}</NextButton>
    </div>
  </div>
</template>

<script>
  import BackButton from '../../components/BackButton'
  import NextButton from '../../components/NextButton'
  import ApproveSpenderInput from '../../components/ApproveSpenderInput'
  import Tooltip from '../../components/Tooltip'
  import WithErrorMessage from '../../components/WithErrorMessage'
  import {etherScanAddress, getpowerChainRegistryAddress} from '../../utils'

  export default {
  components: { NextButton, BackButton, ApproveSpenderInput, Tooltip },
  mixins: [WithErrorMessage],
  inject: ['ethereum'],
  props: {
    network: {
      type: String,
      default: 'ropsten'
    }
  },
  computed: {
    smartContractLink () {
      return etherScanAddress(this.network, getpowerChainRegistryAddress(this.network))
    },
    stepNumber () {
      if (this.network === 'main') {
        return '2'
      }
      return '3'
    },
    totalSteps () {
      if (this.network === 'main') {
        return '3'
      }
      return '4'
    }
  },
  data () {
    return {
      tokens: null,
      processing: false
    }
  },
  methods: {
    previousChooseNetwork () {
      this.$router.push({ name: 'register.network' })
    },
    previousMint () {
      this.$router.push({ name: 'register.mint_test_tokens', params: { network: this.network } })
    },
    next () {
      this.$router.push({ name: 'register.new_chain', params: { network: this.network } })
    },
    async handleApproval () {
      this.processing = true;
      try {
        const response = await this.ethereum.approve(this.tokens);
        this.$store.dispatch('addApproval', {
          tokens: this.tokens,
          timestamp: new Date(),
          transaction: response
        });
        await this.$router.push({ name: 'register.approve_transactions', params: { network: this.network } })
      } catch (e) {
        this.handleError();
        console.log(e)
      } finally {
        this.processing = false
      }
    }
  }
}
</script>
