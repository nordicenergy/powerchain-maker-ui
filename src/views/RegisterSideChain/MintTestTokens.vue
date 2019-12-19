<template>
  <div>
    <div class="flex flex-col items-center">
      <span class="text-powerchain-gray text-sm font-medium">{{ $t('step') }} 2/{{ totalSteps }}</span>
      <h1 class="font-powerchain text-3xl font-bold">
        {{ $t('headline.mint.mint') }} <span class="text-active">{{ $t('headline.mint.lit') }}</span> {{
        $t('headline.mint.test_tokens') }}
      </h1>
      <p class="mt-2 text-powerchain-gray font-medium">
        {{ $t('mint.skip.first') }}
        <router-link class="text-secondary hover:underline" :to="{ name: 'register.approve_spender', params: { network: network }}">{{
          $t('mint.skip.second') }}
        </router-link>
      </p>
      <div class="mt-8 w-3/4 mx-auto">
        <label v-if="!processing" class="text-xs text-powerchain-gray font-medium">{{ $t('label.tokens') }}</label>
        <label v-else class="text-xs text-powerchain-gray font-medium">{{ $t('mint.minting_tokens') }}</label>
        <div class="relative">
          <MintTokensInput @mint="handleMinting" v-model="tokens" :loading="processing" placeholder="NET 0"></MintTokensInput>
          <Tooltip v-if="errorMessage" class="absolute top-0 right-0 -mr-48 -mt-6">
            <template slot="headline">MetaMask Error</template>
            <template slot="text">{{ errorMessage }}</template>
          </Tooltip>
        </div>
        <router-link class="inline-block mt-4 text-sm font-medium text-secondary hover:underline" v-if="mints.length > 0" :to="{ name: 'register.minted_test_tokens', params: { network: network } }">{{ $t('mint.see_mints') }}</router-link>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">{{ $t('button.choose_network') }}</BackButton>
      <NextButton @click.native="next">{{ $t('button.approve_spender') }}</NextButton>
    </div>
  </div>
</template>

<script>
  import BackButton from '../../components/BackButton'
  import NextButton from '../../components/NextButton'
  import MintTokensInput from '../../components/MintTokensInput'
  import Tooltip from '../../components/Tooltip'
  import WithErrorMessage from '../../components/WithErrorMessage'
  import {mapGetters} from 'vuex'

  export default {
  beforeRouteEnter (to, from, next) {
    if (to.params.network === 'main') {
      next({ name: 'register.network', params: { network: this.ethereum.getNetworkName() } })
    }

    next()
  },
  mixins: [WithErrorMessage],
  components: { MintTokensInput, NextButton, BackButton, Tooltip },
  inject: ['ethereum'],
  computed: {
    ...mapGetters([
      'mints',
      'network'
    ]),
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
    previous () {
      this.$router.push({ name: 'register.network' })
    },
    next () {
      this.$router.push({ name: 'register.approve_spender', params: { network: this.network } })
    },
    async handleMinting () {
      this.processing = true;
      try {
        const response = await this.ethereum.mint(this.tokens);
        this.$store.dispatch('addMint', {
          tokens: this.tokens,
          timestamp: new Date(),
          transaction: response
        });
        await this.$router.push({ name: 'register.minted_test_tokens', params: { network: this.network } })
      } catch (e) {
        this.handleError()
      } finally {
        this.processing = false
      }
    }
  }
}
</script>
