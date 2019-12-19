<template>
  <div>
    <div class="flex flex-col items-center">
      <span class="text-powerchain-gray text-sm font-medium">{{ $t('step') }} 3/4</span>
      <h1 class="font-powerchain text-3xl font-bold">{{ $t('headline.approve_spender') }}</h1>
      <div class="mt-6">
        <div class="mt-2">
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
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">{{ $t('button.mint_tokens') }}</BackButton>
      <NextButton @click.native="next">{{ $t('button.register_chain') }}</NextButton>
    </div>
  </div>
</template>

<script>
  import BackButton from '../../components/BackButton'
  import NextButton from '../../components/NextButton'
  import Check from '../../components/Check'
  import {mapGetters} from 'vuex'
  import {etherScanTransaction} from '../../utils'
  import {getSpender} from '../../transactionUtils'

  export default {
  components: { NextButton, BackButton, Check },
  props: {
    network: {
      type: String,
      default: 'ropsten'
    }
  },
  computed: {
    ...mapGetters([
      'lastApproval'
    ])
  },
  methods: {
    etherScan (transaction) {
      return etherScanTransaction(this.network, transaction.transactionHash)
    },
    previous () {
      this.$router.push({ name: 'register.mint_test_tokens' })
    },
    next () {
      this.$router.push({ name: 'register.new_chain', params: { network: this.network } })
    },
    getSpender (transaction) {
      return getSpender(transaction)
    }
  }
}
</script>
