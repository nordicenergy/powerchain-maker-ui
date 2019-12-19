<template>
  <div class="flex flex-col pl-8">
    <div class="flex flex-col mt-8" v-if="userDetails">
      <span @click="visibleUserDetails = !visibleUserDetails" class="text-white cursor-pointer">User details</span>
      <div v-if="visibleUserDetails" class="mt-2 flex flex-col text-sm text-powerchain-gray">
        <p><span @click="fetchUserDetails" class="uppercase font-medium text-white text-xs cursor-pointer">Reload</span></p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Deposit</span><span class="ml-2 text-xs text-white">{{ fromNetPrecisionToTokens(userDetails.deposit) }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Whitelisted</span><span class="ml-2 text-xs text-white">{{ userDetails.whitelisted }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Deposit F. With. Request Exist</span><span class="ml-2 text-xs text-white">{{ userDetails.depositFullWithdrawalReqExist }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Deposit Request Notary</span><span class="ml-2 text-xs text-white">{{ userDetails.depositReqNotary }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Vesting</span><span class="ml-2 text-xs text-white">{{ fromNetPrecisionToTokens(userDetails.vesting) }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Last Vesting Increase Time</span><span class="ml-2 text-xs text-white">{{ userDetails.lastVestingIncreaseTime }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Mining</span><span class="ml-2 text-xs text-white">{{ userDetails.mining }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Previous Notary Mined</span><span class="ml-2 text-xs text-white">{{ userDetails.prevNotaryMined }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Vesting Request Notary</span><span class="ml-2 text-xs text-white">{{ userDetails.vestingReqNotary }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Vesting Request Value</span><span class="ml-2 text-xs text-white">{{ fromNetPrecisionToTokens(userDetails.vestingReqValue) }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Vesting Request Exist</span><span class="ml-2 text-xs text-white">{{ userDetails.vestingReqExist }}</span>
        </p>
      </div>
    </div>
    <div class="flex flex-col mt-8" v-if="chainStaticDetails">
      <span @click="visibleChainStaticDetails = !visibleChainStaticDetails" class="text-white cursor-pointer">Chain static details</span>
      <div v-if="visibleChainStaticDetails" class="mt-2 flex flex-col text-sm text-powerchain-gray">
        <p><span class="uppercase font-medium" style="font-size: 10px;">Description</span><span class="ml-2 text-xs text-white">{{ chainStaticDetails.description }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Endpoint</span><span class="ml-2 text-xs text-white">{{ chainStaticDetails.endpoint }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Registered</span><span class="ml-2 text-xs text-white">{{ chainStaticDetails.registered }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Min Required Deposit</span><span class="ml-2 text-xs text-white">{{ fromNetPrecisionToTokens(chainStaticDetails.minRequiredDeposit) }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Min Required Vesting</span><span class="ml-2 text-xs text-white">{{ fromNetPrecisionToTokens(chainStaticDetails.minRequiredVesting) }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Reward bonus required vesting</span><span class="ml-2 text-xs text-white">{{ fromNetPrecisionToTokens(chainStaticDetails.rewardBonusRequiredVesting) }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Reward bonus percentage</span><span class="ml-2 text-xs text-white">{{ chainStaticDetails.rewardBonusPercentage }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Notary period</span><span class="ml-2 text-xs text-white">{{ chainStaticDetails.notaryPeriod }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Max Num of Validators</span><span class="ml-2 text-xs text-white">{{ chainStaticDetails.maxNumOfValidators }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Max Num of Transactors</span><span class="ml-2 text-xs text-white">{{ chainStaticDetails.maxNumOfTransactors }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Involved Vesting > 50%</span><span class="ml-2 text-xs text-white">{{ chainStaticDetails.involvedVestingNotaryCond }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">2/3 + 1 Participation</span><span class="ml-2 text-xs text-white">{{ chainStaticDetails.participationNotaryCond }}</span>
        </p>
      </div>
    </div>
    <div class="flex flex-col mt-8" v-if="chainDynamicDetails">
      <span @click="visibleChainDynamicDetails = !visibleChainDynamicDetails" class="text-white cursor-pointer">Chain dynamic details</span>
      <div v-if="visibleChainDynamicDetails" class="mt-2 flex flex-col text-sm text-powerchain-gray">
        <p><span @click="fetchDynamicDetails" class="uppercase font-medium text-white text-xs cursor-pointer">Reload</span></p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Active</span><span class="ml-2 text-xs text-white">{{ chainDynamicDetails.active }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Total Vesting</span><span class="ml-2 text-xs text-white">{{ fromNetPrecisionToTokens(chainDynamicDetails.totalVesting) }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Validators Count</span><span class="ml-2 text-xs text-white">{{ chainDynamicDetails.validatorsCount }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Transactors Count</span><span class="ml-2 text-xs text-white">{{ chainDynamicDetails.transactorsCount }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Last Validator Vesting</span><span class="ml-2 text-xs text-white">{{ fromNetPrecisionToTokens(chainDynamicDetails.lastValidatorVesting) }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Last Notary Block</span><span class="ml-2 text-xs text-white">{{ chainDynamicDetails.lastNotaryBlock }}</span>
        </p>
        <p><span class="uppercase font-medium" style="font-size: 10px;">Lats Notary Timestamp</span><span class="ml-2 text-xs text-white">{{ chainDynamicDetails.lastNotaryTimestamp }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import {fromNetPrecisionToTokens} from '../utils'

  export default {
  inject: ['ethereum'],
  data () {
    return {
      userDetails: null,
      chainStaticDetails: null,
      chainDynamicDetails: null,
      visibleUserDetails: true,
      visibleChainStaticDetails: true,
      visibleChainDynamicDetails: true
    }
  },
  computed: {
    chain () {
      if (!Object.prototype.hasOwnProperty.call(this.$route, 'params')) {
        return false
      }

      if (!Object.prototype.hasOwnProperty.call(this.$route.params, 'chain')) {
        return false
      }

      return this.$route.params.chain
    }
  },
  mounted () {
    this.fetchStaticDetails();
    this.fetchDynamicDetails();
    this.fetchUserDetails()
  },
  methods: {
    async fetchUserDetails () {
      if (this.chain === false) {
        return
      }

      this.userDetails = await this.ethereum.getUserDetails(this.chain)
    },
    async fetchStaticDetails () {
      if (this.chain === false) {
        return
      }

      this.chainStaticDetails = await this.ethereum.getChainStaticDetails(this.chain)
    },
    async fetchDynamicDetails () {
      if (this.chain === false) {
        return
      }

      this.chainDynamicDetails = await this.ethereum.getChainDynamicDetails(this.chain)
    },
    fromNetPrecisionToTokens (tokens) {
      return fromNetPrecisionToTokens(tokens)
    }
  }
}
</script>
