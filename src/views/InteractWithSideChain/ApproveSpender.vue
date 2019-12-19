<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">{{ $t('headline.approve_spender') }}</h1>
      <p class="mt-2 text-powerchain-gray font-medium"
         v-html="$t('approve.smart_contract', { smartContractLink: smartContractLink } )"></p>
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
      <div class="mt-8" v-if="lastApproval">
        <div class="flex items-center">
          <Check size="xxs"></Check>
          <p class="ml-4 text-md font-bold">{{ lastApproval.tokens }} NET tokens approved to be manipulated by smart
            contract</p>
        </div>
        <p class="ml-8 text-md text-powerchain-gray">
          <a class="hover:text-secondary" :href="etherScan(lastApproval.transaction)" target="_blank">{{ getSpender(lastApproval.transaction) }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import ApproveSpenderInput from '../../components/ApproveSpenderInput'
  import Check from '../../components/Check'
  import {etherScanAddress, etherScanTransaction, getpowerChainRegistryAddress} from '../../utils'
  import {getSpender} from '../../transactionUtils'
  import Tooltip from '../../components/Tooltip'
  import WithErrorMessage from '../../components/WithErrorMessage'

  export default {
  components: { ApproveSpenderInput, Check, Tooltip },
  mixins: [WithErrorMessage],
  inject: ['ethereum'],
  props: {
    network: {
      type: String,
      default: 'ropsten'
    },
    chain: {
      type: String
    }
  },
  computed: {
    smartContractLink () {
      return etherScanAddress(this.network, getpowerChainRegistryAddress(this.network))
    }
  },
  data () {
    return {
      tokens: null,
      processing: false,
      lastApproval: null
    }
  },
  methods: {
    getSpender (transaction) {
      return getSpender(transaction)
    },
    etherScan (transaction) {
      return etherScanTransaction(this.network, transaction.transactionHash)
    },
    async handleApproval () {
      this.processing = true;
      try {
        const response = await this.ethereum.approve(this.tokens);
        this.lastApproval = {
          tokens: this.tokens,
          transaction: response
        }
      } catch (e) {
        this.handleError()
      } finally {
        this.processing = false
      }
    }
  }
}
</script>
