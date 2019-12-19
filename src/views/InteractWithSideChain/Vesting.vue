<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">{{ $t('headline.vesting') }}</h1>
      <div class="mt-8 flex">
        <div :class="{ 'btn-tile-active': selected === 'interact.vest_in_chain' }" class="btn-tile"
             @click="pickOption('interact.vest_in_chain')">
          <Check v-if="selected === 'interact.vest_in_chain'"></Check>
          <span>{{ $t('vesting.vest_in_chain') }}</span>
        </div>
        <div :class="{ 'btn-tile-active': selected === 'interact.withdraw_vesting' }" class="ml-2 btn-tile"
             @click="pickOption('interact.withdraw_vesting')">
          <Check v-if="selected === 'interact.withdraw_vesting'"></Check>
          <span>{{ $t('vesting.withdraw_vesting') }}</span>
        </div>
        <div :class="{ 'btn-tile-active': selected === 'interact.confirm_vest' }" class="ml-2 btn-tile text-center"
             @click="pickOption('interact.confirm_vest')">
          <Check v-if="selected === 'interact.confirm_vest'"></Check>
          <span>{{ $t('vesting.confirm_vest') }}</span>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">{{ $t('button.interact_with_chain_menu') }}</BackButton>
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
      this.$router.push({ name: 'interact', params: { network: this.network, chain: this.chain } })
    },
    next () {
      if (this.selected === 'interact.vest_in_chain') {
        this.$router.push({ name: 'interact.vest_in_chain', params: { network: this.network, chain: this.chain } })
      } else if (this.selected === 'interact.withdraw_vesting') {
        this.$router.push({ name: 'interact.withdraw_vesting', params: { network: this.network, chain: this.chain } })
      } else if (this.selected === 'interact.confirm_vest') {
        this.$router.push({ name: 'interact.confirm_vest', params: { cnetwork: this.network, hain: this.chain } })
      }
    }
  }
}
</script>
