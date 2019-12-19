<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">{{ $t('headline.interact') }}</h1>
      <div class="mt-8 flex">
        <div :class="{ 'btn-tile-active': selected === 'interact.vesting' }" class="btn-tile"
             @click="pickOption('interact.vesting')">
          <Check v-if="selected === 'interact.vesting'"></Check>
          <span>{{ $t('interact.vesting') }}</span>
        </div>
        <div :class="{ 'btn-tile-active': selected === 'interact.deposits' }" class="ml-2 btn-tile"
             @click="pickOption('interact.deposits')">
          <Check v-if="selected === 'interact.deposits'"></Check>
          <span>{{ $t('interact.deposits') }}</span>
        </div>
        <div :class="{ 'btn-tile-active': selected === 'interact.mining' }" class="ml-2 btn-tile"
             @click="pickOption('interact.mining')">
          <Check v-if="selected === 'interact.mining'"></Check>
          <span>{{ $t('interact.mining') }}</span>
        </div>
        <div :class="{ 'btn-tile-active': selected === 'interact.approve_spender' }" class="ml-2 btn-tile"
             @click="pickOption('interact.approve_spender')">
          <Check v-if="selected === 'interact.approve_spender'"></Check>
          <span>Approve</span>
        </div>
        <div v-if="network === 'ropsten'" :class="{ 'btn-tile-active': selected === 'interact.mint_test_tokens' }" class="ml-2 btn-tile"
             @click="pickOption('interact.mint_test_tokens')">
          <Check v-if="selected === 'interact.mint_test_tokens'"></Check>
          <span>Mint Tokens</span>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">{{ $t('button.main_menu') }}</BackButton>
      <NextButton :disabled="!selected" @click.native="next">{{ $t('button.next') }}</NextButton>
    </div>
  </div>
</template>

<script>
  import BackButton from '../../components/BackButton'
  import NextButton from '../../components/NextButton'
  import Check from '../../components/Check'

  export default {
  props: {
    chain: {
      type: String
    },
    network: {
      type: String
    }
  },
  data () {
    return {
      selected: null
    }
  },
  components: { BackButton, NextButton, Check },
  methods: {
    pickOption (optionNumber) {
      if (this.selected === optionNumber) {
        this.selected = null
      } else {
        this.selected = optionNumber
      }
    },
    previous () {
      this.$router.push({ name: 'interact.provide_sidechain_id' })
    },
    next () {
      if (this.selected === 'interact.vesting') {
        this.$router.push({ name: 'interact.vesting', params: { network: this.network, chain: this.chain } })
      } else if (this.selected === 'interact.deposits') {
        this.$router.push({ name: 'interact.deposits', params: { network: this.network, chain: this.chain } })
      } else if (this.selected === 'interact.mining') {
        this.$router.push({ name: 'interact.mining', params: { network: this.network, chain: this.chain } })
      } else if (this.selected === 'interact.approve_spender') {
        this.$router.push({ name: 'interact.approve_spender', params: { network: this.network, chain: this.chain } })
      } else if (this.selected === 'interact.mint_test_tokens') {
        this.$router.push({ name: 'interact.mint_test_tokens', params: { network: this.network, chain: this.chain } })
      }
    }
  }
}
</script>
