<template>
  <div>
    <div class="flex flex-col items-center">
      <span class="text-powerchain-gray text-sm font-medium">{{ $t('step') }} 1/{{ totalSteps }}</span>
      <h1 class="font-powerchain text-3xl font-bold" v-html="$t('headline.register.network', { network: network }) "></h1>
      <p class="mt-2 text-powerchain-gray font-medium" v-html="$t('subheadline.register.network_change')"></p>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">{{ $t('button.main_menu') }}</BackButton>
      <NextButton v-if="network === 'ropsten'" @click.native="nextMint">{{ $t('button.mint_tokens') }}</NextButton>
      <NextButton v-if="network === 'main'" @click.native="nextApprove">{{ $t('button.approve') }}</NextButton>
    </div>
  </div>
</template>

<script>
  import NextButton from '../../components/NextButton'
  import BackButton from '../../components/BackButton'
  import {mapGetters} from 'vuex'

  export default {
  components: { NextButton, BackButton },
  computed: {
    ...mapGetters([
      'network'
    ]),
    totalSteps () {
      if (this.network === 'main') {
        return '3'
      } else if (this.network === 'ropsten') {
        return '4'
      }
    }
  },
  methods: {
    previous () {
      this.$router.push({ name: 'welcome' })
    },
    nextMint () {
      this.$router.push({ name: 'register.mint_test_tokens', params: { network: this.network } })
    },
    nextApprove () {
      this.$router.push({ name: 'register.approve_spender', params: { network: this.network } })
    }
  }
}
</script>
