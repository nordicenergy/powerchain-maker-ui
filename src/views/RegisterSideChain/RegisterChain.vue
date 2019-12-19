<template>
  <div class="h-screen pt-12">
    <div class="flex flex-col items-center" style="width: 350px;">
      <span class="text-powerchain-gray text-sm font-medium">{{ $t('step') }} {{ stepNumber }}/{{ totalSteps }}</span>
      <h1 class="font-powerchain text-3xl font-bold">{{ $t('headline.register_chain') }}</h1>
      <div class="relative mt-8 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">{{ $t('label.description') }}</label>
        <TextInput v-model="description" ref="description" @focus.native="focus = 'description'"
                   @blur.native="focus = null"
                   class="w-full"></TextInput>
      </div>
      <div class="relative mt-2 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">{{ $t('label.init_endpoint') }}</label>
        <TextInput v-model="initEndpoint" ref="endpoint" @focus.native="focus = 'endpoint'" @blur.native="focus = null"
                   class="w-full"></TextInput>

      </div>
      <div class="relative mt-2 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">{{ $t('label.chain_validator') }}</label>
        <TextInput v-model="chainValidator" ref="validator" @focus.native="focus = 'validator'"
                   @blur.native="focus = null"
                   class="w-full"></TextInput>
      </div>
      <div class="relative mt-2 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">Min required deposit</label>
        <TextInput v-model="minRequiredDeposit" ref="minRequiredDeposit" @focus.native="focus = 'minRequiredDeposit'"
                   @blur.native="focus = null"
                   class="w-full"></TextInput>
      </div>
      <div class="relative mt-2 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">Min required vesting</label>
        <TextInput v-model="minRequiredVesting" ref="minRequiredVesting" @focus.native="focus = 'minRequiredVesting'"
                   @blur.native="focus = null"
                   class="w-full"></TextInput>
      </div>
      <div class="relative mt-2 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">Reward bonus required vesting</label>
        <TextInput v-model="rewardBonusRequiredVesting" ref="rewardBonusRequiredVesting"
                   @focus.native="focus = 'rewardBonusRequiredVesting'"
                   @blur.native="focus = null"
                   class="w-full"></TextInput>
      </div>
      <div class="relative mt-2 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">Reward bonus percentage</label>
        <TextInput v-model="rewardBonusPercentage" ref="rewardBonusPercentage"
                   @focus.native="focus = 'rewardBonusPercentage'"
                   @blur.native="focus = null"
                   class="w-full"></TextInput>
      </div>
      <div class="relative mt-2 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">Notary period</label>
        <TextInput v-model="notaryPeriod" ref="notaryPeriod"
                   @focus.native="focus = 'notaryPeriod'"
                   @blur.native="focus = null"
                   class="w-full"></TextInput>

      </div>
      <div class="relative mt-2 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">{{ $t('label.max_validators') }}</label>
        <TextInput v-model="maxValidators" ref="max_validators" @focus.native="focus = 'max_validators'"
                   @blur.native="focus = null"
                   class="w-full"></TextInput>
      </div>
      <div class="relative mt-2 flex flex-col w-full">
        <label class="text-xs text-powerchain-gray font-medium">{{ $t('label.max_transactors') }}</label>
        <TextInput v-model="maxTransactors" ref="max_transactors" @focus.native="focus = 'max_transactors'"
                   @blur.native="focus = null"
                   class="w-full"></TextInput>
      </div>
      <div class="mt-2 w-full">
        <label class="text-xs text-powerchain-gray font-medium cursor-pointer">{{ $t('label.notary_conditions') }}</label>
      </div>
      <div class="mt-2 flex w-full">
        <div class="relative flex items-center w-1/2">
          <CheckboxInput ref="vesting_cond" v-model="notaryVesting"></CheckboxInput>
          <label @click="notaryVesting = !notaryVesting"
                 class="ml-2 text-xs text-powerchain-gray font-medium cursor-pointer">{{ $t('label.vesting_cond') }}</label>
        </div>
        <div class="relative flex items-center w-1/2">
          <CheckboxInput ref="participation_cond" v-model="notaryParticipation"></CheckboxInput>
          <label @click="notaryParticipation = !notaryParticipation"
                 class="ml-2 text-xs text-powerchain-gray font-medium cursor-pointer">{{ $t('label.participation_cond')
            }}</label>
        </div>
      </div>
    </div>
    <div class="relative mt-12 mb-12 flex justify-between">
      <BackButton @click.native="previous">{{ $t('button.approve_spender') }}</BackButton>
      <ConfirmButton @click.native="handleRegistration" :disabled="processing">
        <span v-if="!processing">{{ $t('button.register_chain') }}</span>
        <span v-else>{{ $t('button.registering') }}</span>
        <span v-if="processing" class="spinner-button w-5 h-5 mr-4"></span>
      </ConfirmButton>
      <Tooltip v-if="errorMessage" class="absolute top-0 right-0 -mr-48 -mt-6">
        <template slot="headline">MetaMask Error</template>
        <template slot="text">{{ errorMessage }}</template>
      </Tooltip>
    </div>
  </div>
</template>

<script>
  import BackButton from '../../components/BackButton'
  import ConfirmButton from '../../components/ConfirmButton'
  import TextInput from '../../components/TextInput'
  import CheckboxInput from '../../components/CheckboxInput'
  import Tooltip from '../../components/Tooltip'
  import WithErrorMessage from '../../components/WithErrorMessage'
  import {etherScanAddress, getpowerChainRegistryAddress} from '../../utils'
  import {getChainId} from '../../transactionUtils'

  export default {
  components: { ConfirmButton, BackButton, TextInput, CheckboxInput, Tooltip },
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
    active () {
      if (this.focus !== null) {
        return this.focus
      }

      return this.activeHover
    },
    stepNumber () {
      if (this.network === 'main') {
        return '3'
      }
      return '4'
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
      focus: null,
      activeHover: null,
      processing: false,
      description: null,
      initEndpoint: null,
      chainValidator: null,
      maxValidators: null,
      maxTransactors: null,
      notaryVesting: false,
      notaryParticipation: false,
      minRequiredDeposit: null,
      minRequiredVesting: null,
      rewardBonusRequiredVesting: null,
      rewardBonusPercentage: null,
      notaryPeriod: null
    }
  },
  methods: {
    previous () {
      this.$router.push({ name: 'register.approve_spender', params: { network: this.network } })
    },
    async handleRegistration () {
      this.processing = true;
      try {
        const response = await this.ethereum.registerChain(
          this.description,
          this.initEndpoint,
          this.chainValidator,
          this.minRequiredDeposit,
          this.minRequiredVesting,
          this.rewardBonusRequiredVesting,
          this.rewardBonusPercentage,
          this.notaryPeriod,
          this.maxTransactors,
          this.maxValidators,
          this.notaryVesting,
          this.notaryParticipation
        );

        this.$store.dispatch('addRegistration', {
          timestamp: new Date(),
          transaction: response
        });

        await this.$router.push({
          name: 'register.completed',
          params: { network: this.network, chain: getChainId(response) }
        })
      } catch (e) {
        this.handleError()
      } finally {
        this.processing = false
      }
    }
  }
}
</script>
