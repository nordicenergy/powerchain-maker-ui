<template>
  <div>
    <div class="flex flex-col items-center" style="min-width: 400px;">
      <h1 class="font-powerchain text-3xl font-bold">
        {{ $t('headline.mint.mint') }} <span class="text-active">{{ $t('headline.mint.lit') }}</span> {{
        $t('headline.mint.test_tokens') }}
      </h1>
      <div class="mt-8 w-3/4 mx-auto">
        <label v-if="!processing" class="text-xs text-powerchain-gray font-medium">{{ $t('label.tokens') }}</label>
        <label v-else class="text-xs text-powerchain-gray font-medium">{{ $t('mint.minting_tokens') }}</label>
        <div class="relative">
          <MintTokensInput @mint="handleMinting" v-model="tokens" :loading="processing"
                           placeholder="NET 0"></MintTokensInput>
          <Tooltip v-if="errorMessage" class="absolute top-0 right-0 -mr-48 -mt-6">
            <template slot="headline">MetaMask Error</template>
            <template slot="text">{{ errorMessage }}</template>
          </Tooltip>
        </div>
      </div>
      <div class="mt-8" v-if="lastMint">
        <div class="flex items-center">
          <Check size="xxs"></Check>
          <p class="ml-4 text-md font-bold">{{ lastMint.tokens }} NET tokens successfully minted on</p>
        </div>
        <p class="ml-8 text-md text-powerchain-gray">
          <a class="hover:text-secondary" :href="etherScan(network, lastMint.transaction)" target="_blank">{{
            lastMint.transaction.from
            }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import MintTokensInput from '../../components/MintTokensInput'
  import {mapGetters} from 'vuex'
  import Check from '../../components/Check'
  import WithEtherScan from '../../components/WithEtherScan'
  import WithErrorMessage from '../../components/WithErrorMessage'
  import Tooltip from '../../components/Tooltip'

  export default {
  beforeRouteEnter (to, from, next) {
    if (to.params.network === 'main') {
      next({ name: 'interact.provide_sidechain_id', params: { network: this.ethereum.getNetworkName() } })
    }

    next()
  },
  mixins: [WithEtherScan, WithErrorMessage],
  components: { MintTokensInput, Check, Tooltip },
  inject: ['ethereum'],
  computed: {
    ...mapGetters([
      'network'
    ])
  },
  data () {
    return {
      tokens: null,
      processing: false,
      lastMint: null
    }
  },
  methods: {
    async handleMinting () {
      this.processing = true;
      try {
        const response = await this.ethereum.mint(this.tokens);
        this.lastMint = {
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
