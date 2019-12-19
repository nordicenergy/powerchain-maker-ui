<template>
  <div>
    <div class="flex flex-col items-center" style="max-width: 500px;">
      <Check size="lg"></Check>
      <h1 class="mt-4 font-powerchain text-3xl font-bold">{{ $t('headline.registration_completed') }}</h1>
      <div v-if="chainDetails" class="mt-8 flex self-start">
        <div class="flex flex-col items-end text-sm text-powerchain-gray">
          <span class="uppercase">{{ $t('registration_completed.chain_id') }}:</span>
          <span class="uppercase">{{ $t('registration_completed.description') }}:</span>
          <span class="uppercase">{{ $t('registration_completed.endpoint') }}:</span>
          <span class="uppercase">Min Required Deposit:</span>
          <span class="uppercase">Min Required Vesting:</span>
          <span class="uppercase">Reward Bonus Required Vesting:</span>
          <span class="uppercase">Reward Bonus Percentage:</span>
          <span class="uppercase">Notary Period:</span>
          <span class="uppercase">{{ $t('registration_completed.max_transactors') }}:</span>
          <span class="uppercase">{{ $t('registration_completed.max_validators') }}:</span>
          <span class="uppercase">{{ $t('registration_completed.vesting_cond') }}:</span>
          <span class="uppercase">{{ $t('registration_completed.participation_cond') }}:</span>
        </div>
        <div class="ml-4 flex flex-col text-sm">
          <span>{{ chain }}</span>
          <span>{{ chainDetails.description }}</span>
          <span>{{ chainDetails.endpoint }}</span>
          <span>{{ fromNetPrecisionToTokens(chainDetails.minRequiredDeposit) }}</span>
          <span>{{ fromNetPrecisionToTokens(chainDetails.minRequiredVesting) }}</span>
          <span>{{ fromNetPrecisionToTokens(chainDetails.rewardBonusRequiredVesting) }}</span>
          <span>{{ chainDetails.rewardBonusPercentage }}</span>
          <span>{{ chainDetails.notaryPeriod }}</span>
          <span>{{ chainDetails.maxNumOfTransactors }}</span>
          <span>{{ chainDetails.maxNumOfValidators }}</span>
          <span>{{ chainDetails.involvedVestingNotaryCond }}</span>
          <span>{{ chainDetails.participationNotaryCond }}</span>
        </div>
      </div>
      <div v-else class="w-full mt-8 flex justify-center h-12">
        <span class="spinner-in-page"></span>
      </div>
      <p class="mt-8 text-powerchain-gray text-md"></p>
      <div class="mt-12 w-full flex justify-end">
        <NextButton @click.native="next">{{ $t('button.interact_with_chain') }}</NextButton>
      </div>
    </div>
  </div>
</template>

<script>
  import Check from '../../components/Check'
  import NextButton from '../../components/NextButton'
  import {fromNetPrecisionToTokens} from '../../utils'

  export default {
  inject: ['ethereum'],
  components: { Check, NextButton },
  props: {
    network: {
      type: String
    },
    chain: {
      type: String
    }
  },
  data () {
    return {
      chainDetails: null
    }
  },
  created () {
    this.fetchChainDetails()
  },
  methods: {
    fromNetPrecisionToTokens (litPrecision) {
      return fromNetPrecisionToTokens(litPrecision)
    },
    next () {
      this.$router.push({ name: 'interact', params: { chain: this.chain } })
    },
    async fetchChainDetails () {
      this.chainDetails = await this.ethereum.getChainStaticDetails(this.chain)
    }
  }
}
</script>
