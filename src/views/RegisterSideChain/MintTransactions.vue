<template>
  <div>
    <div class="flex flex-col items-center">
      <span class="text-powerchain-gray text-sm font-medium">{{ $t('step') }} 2/4</span>
      <h1 class="font-powerchain text-3xl font-bold">
        {{ $t('headline.mint.minted') }} <span class="text-active">{{ $t('headline.mint.lit') }}</span> {{
        $t('headline.mint.test_tokens') }}
      </h1>
      <div class="mt-6">
        <div class="mt-2" v-for="(mint, index) in mints" :key="index">
          <div class="flex items-center">
            <Check size="xxs"></Check>
            <p class="ml-4 text-md font-bold">{{ mint.tokens }} NET tokens successfully minted on</p>
          </div>
          <p class="ml-8 text-md text-powerchain-gray">
            <a class="hover:text-secondary" :href="etherScan(network, mint.transaction)" target="_blank">{{ mint.transaction.from
              }}</a>
          </p>
        </div>
      </div>
      <div class="w-full flex justify-start">
        <router-link class="ml-8 inline-block mt-4 text-sm font-medium text-secondary hover:underline" :to="{ name: 'register.mint_test_tokens', params: { network: network } }">{{ $t('mint.mint_more') }}</router-link>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">{{ $t('button.mint_tokens') }}</BackButton>
      <NextButton @click.native="next">{{ $t('button.approve_spender') }}</NextButton>
    </div>
  </div>
</template>

<script>
  import BackButton from '../../components/BackButton'
  import NextButton from '../../components/NextButton'
  import Check from '../../components/Check'
  import {mapGetters} from 'vuex'
  import WithEtherScan from '../../components/WithEtherScan'

  export default {
  mixins: [WithEtherScan],
  components: { NextButton, BackButton, Check },
  props: {
    network: {
      type: String,
      default: 'ropsten'
    }
  },
  computed: {
    ...mapGetters([
      'mints'
    ])
  },
  methods: {
    previous () {
      this.$router.push({ name: 'register.mint_test_tokens' })
    },
    next () {
      this.$router.push({ name: 'register.approve_spender', params: { network: this.network } })
    }
  }
}
</script>
